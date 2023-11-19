import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "../../..";
import { BackendAddress } from "../../../../utils/BackendAddress/BackendAddress";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleisLoggedinTrue } from "../../../../Store/isLoggedInReducer";
import { setUser } from "../../../../Store/UserReducer";
import Cookies from "js-cookie";
import RefreshToken from "../../../../utils/RefreshToken/RefreshToken";
interface IloginData {
  email: string;
  password: string;
}

// interface UserToken {
//   id: string;
//   token: string;
// }

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // const [token, setToken] = useState<string | null>(null);
  const [formDataState, setFormDataState] = useState<IloginData>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const createNewItem = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${BackendAddress()}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataState),
      });
      if (response.ok) {
        const recievedToken = await response.json();
        console.log("accessToken", recievedToken.accessToken);
        console.log("refreshToken", recievedToken.refreshToken);
        Cookies.set("accessToken", recievedToken.accessToken, {
          expires: 1 / 24,
          // secure: true,
        });
        Cookies.set("refreshToken", recievedToken.refreshToken, {
          expires: 7,
          // secure: true,
        }); // Set cookie to expire in 7 days
        // setToken(recievedToken);
        dispatch(toggleisLoggedinTrue());

        //=====================
        const accessToken = Cookies.get("accessToken");

        if (!accessToken) {
          navigate("/auth/login");
        } else {
          try {
            const response = await fetch(`${BackendAddress()}/user/profile`, {
              method: "GET",
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });

            if (!response.ok) {
              // Handle non-successful responses here
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const contentType = response.headers.get("Content-Type");
            if (contentType && contentType.includes("application/json")) {
              const data = await response.json();
              dispatch(setUser(data));
            } else {
              // Handle non-JSON responses here
              throw new Error("Invalid response format: expected JSON");
            }
          } catch (error) {
            console.error("Error during login request:", error);
            // Handle the error appropriately (e.g., show an error message to the user)
          }
        }
        //=====================
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormDataState((prevData: IloginData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    RefreshToken(navigate, location, dispatch);
  }, []);
  return (
    <Container
      dir="ltr"
      style=" absolute w-[400px] h-[500px] bg-white flex left-[5px] sm:left-[15%] md:left-[20%] lg:left-[7%] shadow-2xl p-10 flex flex-col justify-center items-start rounded-lg"
    >
      <div className="ml-[11%] w-full h-24 flex items-center">
        <p className="text-3xl font-bold text-patternColors-green">
          Crypto Safe Room
        </p>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            type="email"
            id="email"
            className="w-full h-10 rounded-md border-2 border-gra-300"
            placeholder="email"
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label className="left-0" htmlFor="password">
            Password
          </label>
          <input
            required
            name="password"
            type="password"
            id="password"
            className="w-full h-10 rounded-md border-2 border-gra-300"
            placeholder="password"
            onChange={handleFormChange}
          />
          <div>
            <Link
              className="text-sm text-patternColors-red hover:underline"
              to="/auth/forgot"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button
            onClick={createNewItem}
            className="w-32 h-10 text-white rounded-md border-box bg-patternColors-green"
            disabled={loading}
          >
            <div className="flex gap-2 justify-center items-center">
              {loading ? "Logging in" : "Login"}
              {loading && <span className="loading loading-spinner"></span>}
            </div>
          </button>
        </div>
      </div>
      {error && (
        <div className="flex justify-center items-center text-sm bg-gray-200 text-primary ml-[10%] mt-5">
          <p>{error}</p>
        </div>
      )}
      <div className="flex text-sm gap-1 mt-[5%] ml-[17%]">
        <p>Don't have an account?</p>
        <Link className="cursor-pointer hover:underline" to="/auth/signup">
          <p className="text-patternColors-red">Signup</p>
        </Link>
      </div>
    </Container>
  );
};

export default LoginForm;
