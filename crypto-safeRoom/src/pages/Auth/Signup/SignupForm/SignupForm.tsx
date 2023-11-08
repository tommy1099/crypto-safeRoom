import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../..";
import { BackendAddress } from "../../../../utils/BackendAddress/BackendAddress";
import React, { useState, FormEvent, useEffect } from "react";
// import { z } from "zod";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

import { setUser } from "../../../../Store/UserReducer";

import {
  usernameSchema,
  emailSchema,
  passwordSchema,
} from "../../../../utils/ZOD/Schemas";
import { toggleisLoggedinTrue } from "../../../../Store/isLoggedInReducer";
// import { Passwordinput } from "../../../../components/forms"; //hide and show password
type ISignupForm = {
  username: string;
  email: string;
  password: string;
};
const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    console.log(errors);
    console.log(formDataState);
  }, [errors, formDataState]);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    }

    try {
      emailSchema.parse(formDataState.email);
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email",
      }));
    }

    try {
      passwordSchema.parse(formDataState.password);
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Invalid password",
      }));
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
              secure: true,
            });
            Cookies.set("refreshToken", recievedToken.refreshToken, {
              expires: 7,
              secure: true,
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
          console.error("Error creating new item");
        }
      } catch (error) {
        console.error("Error creating new item:", error);
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
    <Container style=" absolute w-[400px] h-[550px] bg-white fixed left-[5px] sm:left-[15%] md:left-[20%] lg:left-[7%] shadow-2xl p-10 flex flex-col justify-center items-start rounded-lg">
      <div className="ml-[11%] w-full h-24 flex items-center my-[10%]">
        <p className="text-3xl font-bold text-patternColors-green">
          Crypto Safe Room
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        <div className="">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            id="username"
            className={`w-full h-10 rounded-md border-2 border-gra-300 ${
              errors.username ? "border-red-500" : ""
            }`}
            placeholder="username"
            onChange={handleFormChange}
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            className={`w-full h-10 rounded-md border-2 border-gra-300 ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="email"
            onChange={handleFormChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className="left-0" htmlFor="password">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            className={`w-full h-10 rounded-md border-2 border-gra-300 ${
              errors.password ? "border-red-500" : ""
            }`}
            placeholder="password"
            onChange={handleFormChange}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <div className="flex justify-center items-center mt-10">
          <button
            type="submit"
            className="w-24 h-10 text-white rounded-md border-box bg-patternColors-green"
          >
            Signup
          </button>
        </div>
      </form>

      <div className="flex text-sm gap-1 my-[5%] ml-[17%]">
        <p>Already have an account?</p>
        <Link className="cursor-pointer hover:underline" to="/auth/login">
          <p className="text-patternColors-red">Login</p>
        </Link>
      </div>
    </Container>
  );
};

export default SignupForm;
