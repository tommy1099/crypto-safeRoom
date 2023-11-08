import { Container } from "..";
import { NavBar, Footer, Button } from "../../components/ui";
import { RadialProgressBar } from "../../components/ui";
import { ScrollToTopIcon } from "../../components/forms";
import Cookies from "js-cookie";
import { AiOutlineSend } from "react-icons/ai";
import { useEffect, useState } from "react";
import { BackendAddress } from "../../utils/BackendAddress/BackendAddress";
import { AiFillCamera } from "react-icons/ai";
import axios from "axios";
import { Avatar } from "../../components/forms";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import RefreshToken from "../../utils/RefreshToken/RefreshToken";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../Store/UserReducer";
// import { useNavigate } from "react-router-dom";
// import RefreshToken from "../../utils/RefreshToken/RefreshToken";
// import Pic from "../../assets/img/test.jpeg";

type SentForm = {
  img: File | null;
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  newPass: string;
  confirmPassword: string;
};
type SentRefCode = {
  refcode: string;
};
const Profile = () => {
  RefreshToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.user);

  // const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [formDataState, setFormDataState] = useState<SentForm>({
    img: null,
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    newPass: "",
    confirmPassword: "",
  });
  const [codeRefFormData, setCodeRefFormData] = useState<SentRefCode>({
    refcode: "",
  });
  const createNewItem = async () => {
    try {
      const accessToken = Cookies.get("accessToken");
      const formData = new FormData();
      formData.append("img", selectedImage || ""); // Append the image to FormData
      formData.append("email", formDataState.email);
      formData.append("firstname", formDataState.firstname);
      formData.append("lastname", formDataState.lastname);
      formData.append("phone", formDataState.phone);
      formData.append("confirmedPass", formDataState.newPass);
      formData.append("confirmPassword", formDataState.confirmPassword);

      // console.log(...formData);
      const response = await fetch(`${BackendAddress()}/user/update`, {
        method: "PUT",
        body: formData, //sending the form data to the backend
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data: SentForm = await response.json();
        console.log("user updated:", data);
        window.location.reload();
      } else {
        console.error("user didnt get updated");
      }
    } catch (error) {
      console.error("error:", error);
    }
  };
  const sendRefCode = async () => {
    setError("");
    try {
      if (!codeRefFormData.refcode || !codeRefFormData.refcode.trim()) {
        setError("Enter a code please");
      } else {
        const accessToken = Cookies.get("accessToken");

        const response = await axios.put(
          `${BackendAddress()}/user/refcode`,
          codeRefFormData,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          const data: SentForm = response.data;

          console.log("refcode worked:", data);
          window.location.reload();
        } else {
          setError("Eather this code has entered before or is invalid");

          console.error("refcode didnt worked");
        }
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("error:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedImage(file);
  };
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormDataState((prevData: SentForm) => {
      if (name === "img") {
        return {
          ...prevData,
          img: selectedImage,
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };
  const handleConfirmationEmail = async () => {
    try {
      const accessToken = Cookies.get("accessToken");

      const response = await axios.post(
        `${BackendAddress()}/user/confirmEmail`,
        null,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        const data: SentForm = response.data;

        console.log("refcode worked:", data);
        window.location.reload();
      } else {
        console.log("Eather this code has entered before or is invalid");

        console.error("refcode didnt worked");
      }
    } catch (error) {
      console.log("An error occurred. Please try again later.");
      console.error("error:", error);
    }
  };
  const handleRefCodeFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setCodeRefFormData((prevState: SentRefCode) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  // useEffect(() => {
  //   // RefreshToken();
  //   const handleProfile = async () => {
  //     // Check if the user has a valid access token
  //     const accessToken = Cookies.get("accessToken");
  //     if (!accessToken) {
  //       navigate("/auth/login");
  //     } else {
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
  //             throw new Error("Failed to fetch user data");
  //           }
  //         })
  //         .then((data) => {
  //           console.log("data:", data);
  //           setUserData(data);
  //         })
  //         .catch(() => {
  //           navigate("/auth/login");
  //         });
  //     }
  //   };
  //   handleProfile();
  // }, []);
  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      navigate("/auth/login");
    } else {
      const eventSource = new EventSource(
        `${BackendAddress()}/user/profile?token=${accessToken}`
      );

      eventSource.addEventListener("message", (event) => {
        const data = JSON.parse(event.data);
        // console.log("user:", data);
        dispatch(setUser(data));
        return () => {
          // Cleanup when the component unmounts
          eventSource.close();
        };
      });
    }
  }, []);
  return (
    <div className="flex flex-col p-5">
      <NavBar />
      <div className="flex flex-col w-full h-[330px]">
        <div className="flex mt-[17%] ml-[4%] lg:mt-[7%] lg:ml-[2%]">
          <div className="flex w-[300px] lg:w-[600px]  ">
            <label
              htmlFor="img"
              className="relative rounded-full cursor-pointer hover:opacity-90 object-full bg-neutral"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered && (
                <AiFillCamera className="absolute opacity-1 top-[40%] left-[40%] w-10 h-10 text-primary" />
              )}
              <Avatar where={"profile"} />
            </label>
            <input
              name="img"
              accept="image/*"
              id="img"
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
            <div className="flex flex-col mt-[6%] lg:mt-[11%] lg:ml-[3%]">
              {userData.firstname && userData.lastname ? (
                <p className="mb-2 lg:text-3xl">
                  Welcome {userData.firstname} {userData.lastname}
                </p>
              ) : (
                <p className="mb-2 lg:text-3xl">{userData.username}</p>
              )}
              <div className="flex gap-3 justify-start items-center">
                <p>{userData.email}</p>
                {userData.isConfirmed ? (
                  <div className="text-xl stat-figure text-success">
                    <IoMdCheckmarkCircle />
                  </div>
                ) : (
                  <button
                    onClick={handleConfirmationEmail}
                    className="p-1 rounded-md border transition-all cursor-pointer text-neutral hover:text-base-100 hover:bg-primary border-primary"
                  >
                    Confirm
                  </button>
                )}
              </div>
              <p>{userData.plan} Member</p>
            </div>
          </div>
          <div className="flex flex-col mt-10 ml-[8%]">
            <div className="flex flex-row gap-2 justify-center items-center -ml-10">
              <p>Your Referal Code:</p>
              <div className="alert flex items-center justify-center border-4 bg-base-100 border-primary alert-info w-[420px] h-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-black animate-pulse stroke-current shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="text-neutral">{userData.refcode}</span>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
              <p>Enter Your Code:</p>
              <input
                name="refcode"
                id="refcode"
                type="text"
                className={`pl-5 mt-2 rounded-md border ${
                  error
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-primary focus:border-2"
                } focus:outline-none w-[420px] h-14`}
                onChange={handleRefCodeFormChange}
                placeholder="Enter your friends referal code"
              />
              <div
                onClick={() => {
                  sendRefCode();
                }}
                className="flex cursor-pointer hover:text-primary text-neutral"
              >
                <AiOutlineSend />
              </div>
            </div>
            {error && <div className="text-red-500">{error}</div>}
          </div>
          {userData.plan === "vip" ||
            (userData.plan === "VIP" && userData.sub && (
              <div className="flex flex-col absolute text-neutral right-[5%]">
                <div className="w-[60%] text-primary ">
                  <RadialProgressBar value={userData.sub} />
                </div>

                <p className="lg:ml-[13%] mt-[2%]">Subscription</p>
              </div>
            ))}
        </div>

        <div className="mt-[2%] p-4">
          <div className="flex flex-col gap-20 items-center lg:flex-row">
            <Container
              dir="ltr"
              style="p-5 flex flex-col w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] border-gray-200 border-2 shadow-md rounded-md"
            >
              <p className="text-2xl ml-[9%] mt-[5%]">All Orders</p>

              <div className="flex flex-col gap-4 p-10 text-xl mt-[5%]">
                <div className="flex justify-between items-center">
                  <p>Advanced Course</p>
                  <p>Pending</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Advanced Course</p>
                  <p>Done</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Advanced Course</p>
                  <p>Done</p>
                </div>
              </div>
            </Container>
            <div className="flex gap-28 ml-[10%] w-[350px] lg:w-[1000px] h-[400px]">
              <div className="flex flex-col gap-5">
                <div>
                  <label className="text-xl" htmlFor="email">
                    New Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="text"
                    className="pl-5 mt-2 w-full h-12 rounded-md border border-gray-300 focus:border-primary focus:border-2 focus:outline-none"
                    onChange={handleFormChange}
                    placeholder="new email"
                  />
                </div>
                <div>
                  <label className="text-xl" htmlFor="newPass">
                    New Password
                  </label>
                  <input
                    name="newPass"
                    id="newPass"
                    type="text"
                    className="pl-5 mt-2 w-full h-12 rounded-md border border-gray-300 focus:border-primary focus:border-2 focus:outline-none"
                    onChange={handleFormChange}
                    placeholder="new password"
                  />
                </div>
                <div>
                  <label className="text-xl" htmlFor="confirmPassword">
                    Confirm Passowrd
                  </label>
                  <input
                    name="confirmPassword"
                    id="confirmPassword"
                    type="text"
                    className="pl-5 mt-2 w-full h-12 rounded-md border border-gray-300 focus:border-primary focus:border-2 focus:outline-none"
                    onChange={handleFormChange}
                    placeholder="confirm password"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <label className="text-xl" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    id="phone"
                    type="text"
                    className="pl-5 mt-2 w-full h-12 rounded-md border border-gray-300 focus:border-primary focus:border-2 focus:outline-none"
                    onChange={handleFormChange}
                    placeholder="phone number"
                  />
                </div>
                <div>
                  <label className="text-xl" htmlFor="firstname">
                    First Name
                  </label>
                  <input
                    name="firstname"
                    id="firstname"
                    type="text"
                    className="pl-5 mt-2 w-full h-12 rounded-md border border-gray-300 focus:border-primary focus:border-2 focus:outline-none"
                    onChange={handleFormChange}
                    placeholder="first name"
                  />
                </div>
                <div>
                  <label className="text-xl" htmlFor="lastname">
                    Last Name
                  </label>
                  <input
                    name="lastname"
                    id="lastname"
                    type="text"
                    className="pl-5 mt-2 w-full h-12 rounded-md border border-gray-300 focus:border-primary focus:border-2 focus:outline-none"
                    onChange={handleFormChange}
                    placeholder="last name"
                  />
                </div>
                <Button
                  onClick={() => {
                    createNewItem();
                  }}
                  style="border-2 border-primary text-neutral hover:bg-primary hover:text-secondary p-2 mt-[5%] ml-[-40%] w-[200px] rounded-md"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[1100px] lg:mt-[35%]">
        <Footer />
      </div>
      <div className="fixed left-0 top-[90%] m-5 ">
        <ScrollToTopIcon />
      </div>
    </div>
  );
};
export default Profile;
