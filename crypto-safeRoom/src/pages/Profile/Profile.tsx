import { Container } from "..";
import { NavBar, Footer, Button } from "../../components/ui";
import { RadialProgressBar } from "../../components/ui";
import { ScrollToTopIcon } from "../../components/forms";
import Cookies from "js-cookie";
// import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import { BackendAddress } from "../../utils/BackendAddress/BackendAddress";
import { AiFillCamera } from "react-icons/ai";
import axios from "axios";
import { Avatar } from "../../components/forms";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { IoMdCheckmarkCircle } from "react-icons/io";
// import { setUser } from "../../Store/UserReducer";
// import { useNavigate } from "react-router-dom";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import RefreshToken from "../../utils/RefreshToken/RefreshToken";
// import Pic from "../../assets/img/test.jpeg";
type orders = {
  userInfo: {
    username: string;
    shippingAddress: {
      firstname: string;
      lastname: string;
      country: string;
      city: string;
      zipCode: string;
      address: string;
    };
  };
  orderDate: Date;
  paymentMethod: {
    state: boolean;
    method: string;
  };
  productName: [
    {
      productId: string;
      productName: string;
      quantity: number;
      price: number;
    }
  ];
  totalPrice: number;
  userNote: string;
  done: boolean;
  _id: string;
};
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
import { useTranslation } from "react-i18next";
import { formatNumberToPersian } from "../../utils/NumberToFarsi/NumberToFarsi";

const Profile = () => {
  // RefreshToken();
  const { t } = useTranslation();

  // const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.user);
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);
  const isFa = useSelector((state: RootState) => state.lang.isFa);

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
        await response.json();
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

      await axios.post(`${BackendAddress()}/user/confirmEmail`, null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
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

  return (
    <div className="flex">
      <div className="flex flex-col w-full h-full">
        <NavBar />
        <div className="flex flex-col justify-between items-center mt-[20%] md:mt-[5%]">
          <div>
            <div className="flex flex-col">
              <div className="flex flex-col justify-between items-center pb-5 border-b-2 border-neutral md:flex-row">
                <div className="flex md:w-[600px] mt-[5%] pl-10">
                  <label
                    htmlFor="img"
                    className="relative h-[128px] md:h-[192px] rounded-full cursor-pointer hover:opacity-90 object-full bg-neutral"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered && (
                      <AiFillCamera className="absolute opacity-1 top-[40%] left-[40%] text-primary" />
                    )}
                    <Avatar where={"profile"} />
                    <input
                      name="img"
                      accept="image/*"
                      id="img"
                      type="file"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>

                  <div className="flex flex-col mt-[6%] lg:mt-[11%] ml-[3%]">
                    {userData.firstname && userData.lastname ? (
                      <p className="mb-2 lg:text-3xl text-neutral">
                        {t("welcome")} {userData.firstname} {userData.lastname}
                      </p>
                    ) : (
                      <p className="mb-2 lg:text-3xl">
                        {t("welcome")} {userData.username}
                      </p>
                    )}
                    <div className="flex flex-col gap-3 justify-start items-start md:items-center md:flex-row text-neutral">
                      <p>{userData.email.email}</p>
                      {userData.email.confirm ? (
                        <div className="text-xl stat-figure text-success">
                          <IoMdCheckmarkCircle />
                        </div>
                      ) : (
                        <button
                          onClick={handleConfirmationEmail}
                          className="p-1 rounded-md border transition-all cursor-pointer text-neutral hover:text-secondary hover:bg-primary border-primary"
                        >
                          {t("confirm")}
                        </button>
                      )}
                    </div>
                    <p className="text-neutral">
                      {userData.plan.type} {t("member")}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-[7%]">
                  {userData.plan.type === "vip" ||
                    (userData.plan.type === "VIP" &&
                      userData.plan.remaining && (
                        <div className="flex flex-col justify-center items-center text-neutral">
                          <div className="w-[50%] md:w-[60%] text-primary ">
                            <RadialProgressBar
                              value={userData.plan.remaining}
                              style={{
                                textColor: `${
                                  isDarkTheme ? "#777" : "#374151"
                                }`,
                                pathColor: `${
                                  isDarkTheme ? "#ee8f50" : "#ee8f50"
                                }`,
                                trailColor: `${
                                  isDarkTheme ? "#374151" : "#777"
                                }`,
                              }}
                              formatNumberToPersian={formatNumberToPersian}
                              isFa={isFa}
                            />
                          </div>

                          <p className="">{t("subscription")}</p>
                        </div>
                      ))}
                </div>
              </div>
              <div className="flex  gap-20 flex-col md:flex-row justify-between items-center mt-[5%] border-neutral border-b-2 pb-10">
                <div dir={`${isFa ? "rtl" : "ltr"}`} className="flex flex-col">
                  <div className="flex flex-col items-start mt-[5%]">
                    <p className="text-neutral">{t("yourRef")}</p>
                    <div className="flex justify-center items-center w-full h-14 border-4 alert bg-base-100 border-primary alert-info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 animate-pulse stroke-current text-primary shrink-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span className="text-[17px] text-neutral">
                        {userData.refcode}
                      </span>
                    </div>
                  </div>
                  <div className=" flex flex-col mt-[2%]">
                    <p className="text-neutral">{t("otherRef")}</p>
                    <input
                      name="refcode"
                      id="refcode"
                      type="text"
                      className={`pl-5 mt-2 rounded-md border placeholder:text-neutral bg-base-100 ${
                        error
                          ? "border-red-700 focus:border-red-700"
                          : "border-neutral focus:border-primary focus:border-2"
                      } focus:outline-none w-[400px] h-14`}
                      onChange={handleRefCodeFormChange}
                      placeholder={t("otherRefPlaceHolder")}
                    />
                    <Button
                      onClick={() => {
                        sendRefCode();
                      }}
                      style="border-2 border-primary text-neutral hover:bg-primary hover:text-secondary my-5 p-2 w-[100px] rounded-md"
                    >
                      {t("submit")}
                    </Button>
                  </div>
                  {error && <div className="text-red-700">{error}</div>}
                </div>
                <Container
                  dir=""
                  style="border-neutral border-2 h-[400px] overflow-y-auto rounded-md w-full"
                >
                  <p
                    dir={`${isFa ? "rtl" : "ltr"}`}
                    className="text-2xl mx-[9%] mt-[5%] text-neutral"
                  >
                    {t("allOrders")}
                  </p>
                  {userData.orders &&
                    userData.orders.map((elm: orders, index: number) => (
                      <div
                        className="flex flex-col gap-4 p-4 text-xl mt-[1%] "
                        key={elm._id}
                      >
                        <div className="flex gap-5 justify-between items-center">
                          <p className="text-md text-neutral">
                            {isFa
                              ? formatNumberToPersian(index + 1)
                              : index + 1}
                          </p>
                          <p className="text-neutral">
                            {new Date(elm.orderDate).toLocaleString(
                              `${isFa ? "fa" : "en"}`,
                              {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              }
                            )}
                          </p>
                          <p className="text-sm text-neutral">
                            {new Date(elm.orderDate).toLocaleString(
                              `${isFa ? "fa" : "en"}`,
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                                hour12: false,
                              }
                            )}
                            {/* {new Date(elm.orderDate).toLocaleString(undefined, {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            hour12: false,
                          })} */}
                          </p>
                          <div className="flex gap-1">
                            <p className="text-neutral">
                              {isFa
                                ? formatNumberToPersian(
                                    elm.productName.reduce(
                                      (total, product) =>
                                        total + product.quantity,
                                      0
                                    )
                                  )
                                : elm.productName.reduce(
                                    (total, product) =>
                                      total + product.quantity,
                                    0
                                  )}
                            </p>
                          </div>

                          <p className="text-neutral">
                            $
                            {isFa
                              ? formatNumberToPersian(elm.totalPrice)
                              : elm.totalPrice}
                          </p>
                          {elm.paymentMethod.state ? (
                            <p className="text-green-700">{t("done")}</p>
                          ) : (
                            <p className="text-primary">{t("pending")}</p>
                          )}
                        </div>
                      </div>
                    ))}
                </Container>
              </div>
              <div dir={`${isFa ? "rtl" : "ltr"}`} className="mt-[2%]">
                <div className="flex flex-col gap-2 justify-between items-center md:flex-row">
                  <div className="flex gap-2 flex-col w-[400px]">
                    <div>
                      <label className="text-xl text-neutral" htmlFor="email">
                        {t("newEmail")}
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="text"
                        className="pl-5 mt-2 w-full h-12 rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                        onChange={handleFormChange}
                        placeholder={t("newEmailPlaceHolder")}
                      />
                    </div>
                    <div>
                      <label className="text-xl text-neutral" htmlFor="newPass">
                        {t("newPass")}
                      </label>
                      <input
                        name="newPass"
                        id="newPass"
                        type="text"
                        className="pl-5 mt-2 w-full h-12 rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                        onChange={handleFormChange}
                        placeholder={t("newPassPlaceHolder")}
                      />
                    </div>
                    <div>
                      <label
                        className="text-xl text-neutral"
                        htmlFor="confirmPassword"
                      >
                        {t("confirmPass")}
                      </label>
                      <input
                        name="confirmPassword"
                        id="confirmPassword"
                        type="text"
                        className="pl-5 mt-2 w-full h-12 rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                        onChange={handleFormChange}
                        placeholder={t("confirmPassPlaceHolder")}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-[400px] gap-2">
                    <div>
                      <label
                        className="text-xl text-neutral"
                        htmlFor="firstname"
                      >
                        {t("firstname")}
                      </label>
                      <input
                        name="firstname"
                        id="firstname"
                        type="text"
                        className="pl-5 mt-2 w-full h-12 rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                        onChange={handleFormChange}
                        placeholder={t("firstnamePlaceHolder")}
                      />
                    </div>
                    <div>
                      <label
                        className="text-xl text-neutral"
                        htmlFor="lastname"
                      >
                        {t("lastname")}
                      </label>
                      <input
                        name="lastname"
                        id="lastname"
                        type="text"
                        className="pl-5 mt-2 w-full h-12 rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                        onChange={handleFormChange}
                        placeholder={t("lastnamePlaceHolder")}
                      />
                    </div>
                    <div>
                      <label className="text-xl text-neutral" htmlFor="phone">
                        {t("phone")}
                      </label>
                      <input
                        name="phone"
                        id="phone"
                        type="text"
                        className="pl-5 mt-2 w-full h-12 rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                        onChange={handleFormChange}
                        placeholder={t("phone")}
                      />
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    createNewItem();
                  }}
                  style="border-2 border-primary text-neutral hover:bg-primary hover:text-secondary p-2 mt-[5%] w-[200px] rounded-md"
                >
                  {t("save")}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-[10%] w-full">
            <Footer />
          </div>
          <div className="fixed left-0 top-[90%] m-5 ">
            <ScrollToTopIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
