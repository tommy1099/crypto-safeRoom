import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { BackendAddress } from "../../../utils/BackendAddress/BackendAddress";
import { setUser } from "../../../Store/UserReducer";
import RefreshToken from "../../../utils/RefreshToken/RefreshToken";
import { RootState } from "../../../Store/Store";
import { FaCrown } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
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
  const fetchData = async ({
    accessToken,
    dispatch,
  }: FetchDataParams): Promise<void> => {
    try {
      const response = await fetch(`${BackendAddress()}/user/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();

        dispatch(setUser(data));
      } else {
        throw new Error("Invalid response format: expected JSON");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error during fetch request:", error.message);
        // Handle the error appropriately (e.g., show an error message to the user)
      } else {
        console.error("Unknown error during fetch request:", error);
        // Handle the error appropriately (e.g., show a generic error message to the user)
      }
    }
  };
  useEffect(() => {
    if (!accessToken) {
      RefreshToken(navigate, location, dispatch);
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
  );
};

export default Avatar;
