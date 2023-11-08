// import { useEffect, useState } from "react";
// import { BackendAddress } from "../../../utils/BackendAddress/BackendAddress";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
// import Cookies from "js-cookie";
interface Props {
  where: string;
}
const Avatar = ({ where }: Props) => {
  const userData = useSelector((state: RootState) => state.user);

  // useEffect(() => {
  //   // RefreshToken();
  //   const handleProfile = async () => {
  //     // Check if the user has a valid access token
  //     const accessToken = Cookies.get("accessToken");
  //     if (accessToken) {
  //       // If there's an access token, you can make an API request to fetch user data
  //       // Replace 'your_api_endpoint' with the actual URL to fetch user data
  //       await fetch(`${BackendAddress()}/user/profile`, {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       })
  //         .then((response) => {
  //           if (response.ok) {
  //             return response.json();
  //           } else {
  //             throw Error("Failed to fetch user data");
  //           }
  //         })
  //         .then((data) => {
  //           console.log("data:", data);
  //           setUserData(data);
  //         })
  //         .catch(() => {});
  //     }
  //   };
  //   handleProfile();
  // }, []);
  // const handleNameCapital = (value: string) => {
  //   return value.toUpperCase();
  // };
  return (
    <div className="avatar placeholder">
      <div
        className={`${
          where === "navbar" ? "w-11" : "w-48"
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
      </div>
    </div>
  );
};
export default Avatar;
