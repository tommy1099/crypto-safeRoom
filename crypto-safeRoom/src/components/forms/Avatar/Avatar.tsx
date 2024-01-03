import { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { BackendAddress } from "../../../utils/BackendAddress/BackendAddress";
import { setUser } from "../../../Store/UserReducer";
import RefreshToken from "../../../utils/RefreshToken/RefreshToken";
import { RootState } from "../../../Store/Store";
import { FaCrown } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import { toggleModalTrue } from "../../../Store/IsModalOpen";
interface Props {
  where: string;
}

interface FetchDataParams {
  accessToken: string;
  dispatch: Dispatch<any>;
}
const Avatar = ({ where }: Props) => {
  const accessToken = Cookies.get("accessToken");
  const userData = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const fetchData = async ({
    accessToken,
    dispatch,
  }: FetchDataParams): Promise<void> => {
    const userProfileEndpoint = `${BackendAddress()}/user/profile`;

    try {
      const response = await fetchWithRetry(userProfileEndpoint, accessToken);

      const contentType = response.headers.get("Content-Type");
      if (!response.ok) {
        handleHttpError(response.status, contentType);
      } else if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        dispatch(setUser(data));
      } else {
        throw new Error("Invalid response format: expected JSON");
      }
    } catch (error) {
      handleFetchError(error);
    }
  };

  const fetchWithRetry = async (
    url: string,
    accessToken: string
  ): Promise<Response> => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok && response.status === 401) {
      // Unauthorized, attempt to refresh the token
      await RefreshToken(navigate, location, dispatch);
      // Retry the original request with the new token
      return fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    return response;
  };

  const handleHttpError = (
    status: number,
    contentType: string | null
  ): never => {
    if (status === 401) {
      console.log(contentType);
      throw new Error("Unauthorized");
    } else {
      throw new Error(`HTTP error! Status: ${status}`);
    }
  };
  const handleFetchError = (error: unknown): void => {
    if (error instanceof Error) {
      console.error("Error during fetch request:", error.message);
      // Handle the error appropriately (e.g., show an error message to the user)
    } else {
      console.error("Unknown error during fetch request:", error);
      // Handle the error appropriately (e.g., show a generic error message to the user)
    }
  };

  useEffect(() => {
    if (
      window.location.pathname === "/signals" ||
      window.location.pathname === "/checkout"
    )
      if (!accessToken) {
        RefreshToken(navigate, location, dispatch);
        setShowModal(true);
        dispatch(toggleModalTrue());
      } else {
        fetchData({ accessToken, dispatch });

        // Use setInterval to fetch data every 10 seconds
        const intervalId = setInterval(() => {
          fetchData({ accessToken, dispatch });
        }, 20000);

        return () => {
          // Cleanup when the component unmounts or when accessToken changes
          clearInterval(intervalId);
        };
      }
  }, []);

  return (
    <>
      <div className="avatar placeholder">
        <div
          className={`${
            where === "navbar" ? "w-11" : "w-32 md:w-48"
          } rounded-full bg-neutral-focus text-neutral-content`}
        >
          {userData !== undefined && userData.pic !== "" && userData.pic ? (
            <img src={userData.pic} alt="profilePic" />
          ) : userData.firstname &&
            userData.lastname &&
            userData.firstname !== "" &&
            userData.lastname !== "" ? (
            <span className={`${where === "navbar" ? "text-xl" : "text-6xl"}`}>
              {userData.firstname?.[0]}
              {userData.lastname?.[0]}
            </span>
          ) : (
            <span className={`${where === "navbar" ? "text-xl" : "text-6xl"}`}>
              {userData.username?.[0]}
            </span>
          )}
          {userData.plan.type === "VIP" && (
            <div className="absolute top-[-10px] text-2xl text-primary">
              <FaCrown />
            </div>
          )}
        </div>
      </div>
      <Modal
        id="login"
        children={<></>} //doest matter
        type={"login"}
        showModal={showModal}
        handleClose={handleCloseModal}
        title={"Login"}
      />
    </>
  );
};

export default Avatar;
