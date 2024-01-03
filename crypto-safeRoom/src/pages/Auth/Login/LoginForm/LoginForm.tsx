import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BackendAddress } from "../../../../utils/BackendAddress/BackendAddress";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleisLoggedinTrue } from "../../../../Store/isLoggedInReducer";
import { setUser } from "../../../../Store/UserReducer";
import Cookies from "js-cookie";
import RefreshToken from "../../../../utils/RefreshToken/RefreshToken";
import { RootState } from "../../../../Store/Store";
import { useTranslation } from "react-i18next";
import { IloginData } from "../../../../Interfaces/Interfaces";

// interface UserToken {
//   id: string;
//   token: string;
// }

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  // const [token, setToken] = useState<string | null>(null);
  const [formDataState, setFormDataState] = useState<IloginData>({
    email: "",
    password: "",
  });
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);
  const isFa = useSelector((state: RootState) => state.lang.isFa);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const createNewItem = async () => {
    console.log("formDataState.email:", formDataState.email);
    console.log("formDataState.password:", formDataState.password);
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
        console.error("Error during login request:", response.statusText);
      }
    } catch (error) {
      setError(`An error occurred. Please try again later.${error}`);
      console.log(`An error occurred. Please try again later.${error}`);
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
    // <Container
    //   dir="ltr"
    //   style="absolute flex w-[400px] h-[500px] bg-base-100 shadow-2xl p-10 flex-col justify-center items-center rounded-lg"
    // >
    //   <div className="ml-[11%] w-full h-24 flex items-center">
    //     <p className="text-3xl font-bold text-patternColors-green">
    //       Crypto Safe Room
    //     </p>
    //   </div>

    //   <div className="flex flex-col gap-5 w-full">
    //     <div>
    //       <label htmlFor="email">Email</label>
    //       <input
    //         required
    //         name="email"
    //         type="email"
    //         id="email"
    //         className="w-full h-10 rounded-md border-2 border-gra-300"
    //         placeholder="email"
    //         onChange={handleFormChange}
    //       />
    //     </div>
    //     <div>
    //       <label className="left-0" htmlFor="password">
    //         Password
    //       </label>
    //       <input
    //         required
    //         name="password"
    //         type="password"
    //         id="password"
    //         className="w-full h-10 rounded-md border-2 border-gra-300"
    //         placeholder="password"
    //         onChange={handleFormChange}
    //       />
    //       <div>
    //         <Link
    //           className="text-sm text-patternColors-red hover:underline"
    //           to="/auth/forgot"
    //         >
    //           Forgot Password?
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="flex justify-center items-center mt-10">
    //       <button
    //         onClick={createNewItem}
    //         className="w-32 h-10 text-white rounded-md border-box bg-patternColors-green"
    //         disabled={loading}
    //       >
    //         <div className="flex gap-2 justify-center items-center">
    //           {loading ? "Logging in" : "Login"}
    //           {loading && <span className="loading loading-spinner"></span>}
    //         </div>
    //       </button>
    //     </div>
    //   </div>
    //   {error && (
    //     <div className="flex justify-center items-center text-sm bg-gray-200 text-primary ml-[10%] mt-5">
    //       <p>{error}</p>
    //     </div>
    //   )}
    //   <div className="flex text-sm gap-1 mt-[5%] ml-[17%]">
    //     <p>Don't have an account?</p>
    //     <Link className="cursor-pointer hover:underline" to="/auth/signup">
    //       <p className="text-patternColors-red">Signup</p>
    //     </Link>
    //   </div>
    // </Container>
    <div
      dir={`${isFa ? "rtl" : "ltr"}`}
      className="min-h-screen hero bg-base-200"
    >
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div
          className={`text-center ${isFa ? "lg:text-right" : "lg:text-left"}`}
        >
          <h1 className="text-5xl font-bold text-neutral">{t("loginNow")}</h1>
          <p className="py-6 text-neutral">{t("loginMessage")}</p>
        </div>
        <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
          <div className="flex justify-center items-center mt-5">
            <Link to="/" className="flex w-[190px] items-center justify-center">
              <img
                src={`${
                  isDarkTheme
                    ? "../../../src/assets/img/logoDark212121.png"
                    : "../../../src/assets/img/logo.png"
                }`}
                alt="LOGO"
              />
            </Link>
          </div>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-neutral">{t("email")}</span>
              </label>
              <input
                required
                name="email"
                type="email"
                id="email"
                className="pl-5 mt-2 w-full h-12 rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                placeholder={t("email")}
                onChange={handleFormChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-neutral">{t("password")}</span>
              </label>
              <input
                required
                name="password"
                type="password"
                id="password"
                className="pl-5 mt-2 w-full h-12 rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                placeholder={t("password")}
                onChange={handleFormChange}
              />
              <label className="label">
                <a
                  href="/auth/forgot"
                  className="label-text-alt link link-hover text-neutral"
                >
                  {t("forgotPass")}
                </a>
              </label>
            </div>
            <div className="mt-6 form-control">
              <button
                onClick={createNewItem}
                className="btn btn-primary"
                disabled={loading}
              >
                <div className="flex gap-2 justify-center items-center text-base-100">
                  {loading ? t("logginIn") : t("login")}
                  {loading && <span className="loading loading-spinner"></span>}
                </div>
              </button>
            </div>
          </div>
          {error && (
            <div className="flex justify-center items-center mt-5 text-sm bg-gray-200 text-primary">
              <p>{error}</p>
            </div>
          )}
          <div className="flex gap-1 justify-center items-center mb-5 text-sm text-neutral">
            <p>{t("donthaveAcc")}</p>
            <Link
              className="cursor-pointer hover:underline text-neutral"
              to="/auth/signup"
            >
              <p className="text-primary">{t("signUp")}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
