import axios from "axios";
import Cookies from "js-cookie";
import { BackendAddress } from "../BackendAddress/BackendAddress";
import { toggleisLoggedinFalse, toggleisLoggedinTrue } from "../../Store/isLoggedInReducer";
import { Dispatch } from "react";
import { Location, NavigateFunction } from "react-router-dom";
import _ from 'lodash';
import { resetUser } from "../../Store/UserReducer";
const RefreshToken = async (
  navigate: NavigateFunction,
  location: Location,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: Dispatch<any>
) => {
  const debouncedNavigate = _.debounce((navigate, path) => navigate(path), 1000);

  try {
    const refreshToken = Cookies.get("refreshToken");

    if (refreshToken) {
      const response = await axios.post(
        `${BackendAddress()}/token/refresh-token`,
        null,
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      if (response.data.accessToken) {
        
        const expires = 1 / 24;

        Cookies.set("accessToken", response.data.accessToken, { expires });

        dispatch(toggleisLoggedinTrue());

        if (
          location.pathname === "/auth/login" ||
          location.pathname === "/auth/signup"
        ) {

          await debouncedNavigate(navigate, "/signals?toggle=true");
        }
      } else {
        await debouncedNavigate(navigate, "/auth/login");
        console.log("couldnt get the new access token")
      }
    }else{
      await debouncedNavigate(navigate, "/auth/login");
        dispatch(resetUser());
        dispatch(toggleisLoggedinFalse());
        Cookies.remove("refreshToken");
        Cookies.remove("accessToken");
    }
  } catch (error) {
    console.log("refresher fucked up!")
    console.error("Token refresh failed:", error);

    // if (axios.isAxiosError(error) && error.response) {
    //   // Handle specific HTTP response errors (e.g., 401 unauthorized)
    //   if (error.response.status === 401) {
    //     // Handle 401 error (e.g., redirect to login page)
    //     await debouncedNavigate(navigate, "/auth/login");
    //     dispatch(resetUser());
    //     dispatch(toggleisLoggedinFalse());
    //     Cookies.remove("refreshToken");
    //     Cookies.remove("accessToken");
    //   } else {
    //     // Handle other response errors
    //     // ...
    //   }
    // } else if (axios.isAxiosError(error)) {
    //   // Handle other Axios errors (e.g., network issues)
    //   // ...
    // } else {
    //   // Handle non-Axios errors
    //   // ...
    // }
  }
};

export default RefreshToken;


