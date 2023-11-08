import { useEffect } from "react";
import axios from "axios"; // Import Axios
import Cookies from "js-cookie";
import { BackendAddress } from "../BackendAddress/BackendAddress";
import { useNavigate } from "react-router-dom";
import { toggleisLoggedinTrue } from "../../Store/isLoggedInReducer";
import { useDispatch } from "react-redux";
const RefreshToken = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // Function to refresh the access token
    const refreshAccessToken = async () => {
      const refreshToken = Cookies.get("refreshToken"); // Replace with the actual refresh token
      console.log("refreshToken:",refreshToken);
      try {
        const response = await axios.post(`${BackendAddress()}/token/refresh-token`, null, {
          headers: {
            Authorization: `Bearer ${refreshToken}`
          }
        });
        // If the refresh was successful, set the new access token
        if (response.data.accessToken) {
          console.log("refreshToken:",response.data.accessToken);
          Cookies.set("accessToken", response.data.accessToken, {
            expires: 1 / 24,
            // secure: true,
          });
          dispatch(toggleisLoggedinTrue());
          if (location.pathname === "/auth/login" || location.pathname === "/auth/signup") {
            // Navigate to a different route
            navigate("/signals?toggle=true");
          }
        } else {
          // Handle the case where the server did not return a new access token
        }
      } catch (error) {
        // Handle any errors (e.g., network issues, invalid refresh token, etc.)
        console.error("Token refresh failed:", error);
      }
    };
    refreshAccessToken();
  }, []);
};

export default RefreshToken;
