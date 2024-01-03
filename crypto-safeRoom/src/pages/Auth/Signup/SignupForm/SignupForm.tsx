import { Link, useNavigate } from "react-router-dom";
import { BackendAddress } from "../../../../utils/BackendAddress/BackendAddress";
import React, { useState, FormEvent, useEffect } from "react";
// import { z } from "zod";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";

import { resetUser, setUser } from "../../../../Store/UserReducer";

import {
  usernameSchema,
  emailSchema,
  passwordSchema,
} from "../../../../utils/ZOD/Schemas";
import { toggleisLoggedinTrue } from "../../../../Store/isLoggedInReducer";
import { RootState } from "../../../../Store/Store";
import { useTranslation } from "react-i18next";
// import { Passwordinput } from "../../../../components/forms"; //hide and show password
type ISignupForm = {
  username: string;
  email: string;
  password: string;
};
const SignupForm = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const [formDataState, setFormDataState] = useState<ISignupForm>({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    username: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    setError("");
    dispatch(resetUser());

    console.log(errors);
    console.log(formDataState);
  }, [dispatch, errors, formDataState]);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    setErrors({
      username: "",
      email: "",
      password: "",
    });
    try {
      usernameSchema.parse(formDataState.username);
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Invalid username",
      }));
      setLoading(false);
    }

    try {
      emailSchema.parse(formDataState.email);
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email",
      }));
      setLoading(false);
    }

    try {
      passwordSchema.parse(formDataState.password);
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Invalid password",
      }));
      setLoading(false);
    }
    const hasValidationErrors = Object.values(errors).some(
      (error) => error !== ""
    );
    if (!hasValidationErrors) {
      try {
        const response = await fetch(`${BackendAddress()}/auth/signup/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataState), //sending the form data to the backend
        });

        if (response.ok) {
          //=====================
          const response = await fetch(`${BackendAddress()}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataState),
          });
          if (response.ok) {
            const recievedToken = await response.json();
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
            const accessToken = Cookies.get("accessToken");
            if (!accessToken) {
              navigate("/auth/login");
            } else {
              // If there's an access token, you can make an API request to fetch user data
              // Replace 'your_api_endpoint' with the actual URL to fetch user data
              await fetch(`${BackendAddress()}/user/profile`, {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              })
                .then((response) => {
                  if (response.ok) {
                    return response.json();
                  } else {
                    throw new Error("Failed to fetch user data");
                  }
                })
                .then((data) => {
                  dispatch(setUser(data));
                  navigate("/signals?toggle=true");
                })
                .catch(() => {
                  navigate("/auth/signup");
                });
            }
          }
          //=====================
        } else {
          setError("Email or Username Already exist");

          setLoading(false);
        }
      } catch (error) {
        setError(`Error creating user item: ${error}`);
        setLoading(false);
      }
    }
  };
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Clear validation error for the current field
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    // Only track changes if the form has been submitted
    setFormDataState((prevData: ISignupForm) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div
      dir={`${isFa ? "rtl" : "ltr"}`}
      className="min-h-screen hero bg-base-200"
    >
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div
          className={`text-center mt-10 ${
            isFa ? "lg:text-right" : "lg:text-left"
          }`}
        >
          <h1 className="text-5xl font-bold text-neutral">{t("signupNow")}</h1>
          <p className="py-6 text-neutral">{t("signupMessage")}</p>
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
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-neutral">{t("username")}</span>
              </label>
              <input
                required
                name="username"
                type="username"
                id="email"
                className="pl-5 mt-2 w-full h-12 rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                placeholder={t("username")}
                onChange={handleFormChange}
              />
            </div>
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
            </div>
            <div className="mt-6 form-control">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                <div className="flex gap-2 justify-center items-center text-base-100">
                  {loading ? t("signingUp") : t("signUp")}
                  {loading && <span className="loading loading-spinner"></span>}
                </div>
              </button>
            </div>
          </form>
          {error && (
            <div className="flex justify-center items-center mt-5 text-sm bg-gray-200 text-primary">
              <p>{error}</p>
            </div>
          )}
          <div className="flex gap-1 justify-center items-center mb-5 text-sm text-neutral">
            <p>{t("haveAnAcc")}</p>
            <Link
              className="cursor-pointer hover:underline text-neutral"
              to="/auth/login"
            >
              <p className="text-primary">{t("login")}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
