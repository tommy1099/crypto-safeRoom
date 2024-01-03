// ModalContent.tsx
import React, { useEffect, useState } from "react";
import { CardProps, IloginData } from "../../../../Interfaces/Interfaces";
import { useTranslation } from "react-i18next";
import { formatNumberToPersian } from "../../../../utils/NumberToFarsi/NumberToFarsi";
import { RootState } from "../../../../Store/Store";
import { useDispatch, useSelector } from "react-redux";
import { FaBtc } from "react-icons/fa6";
import { TbBrandTether } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa6";
import copy from "clipboard-copy";
import { cryptoPrice } from "../../../../utils/cryptoPrice/CryptoPrice";
import { Table } from "../../../ui";
import { BackendAddress } from "../../../../utils/BackendAddress/BackendAddress";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { toggleisLoggedinTrue } from "../../../../Store/isLoggedInReducer";
import { setUser } from "../../../../Store/UserReducer";
import { toggleModalFalse } from "../../../../Store/IsModalOpen";

const ModalContent: React.FC<CardProps> = ({
  tpPrices,
  entryPoint,
  alertDesc,
  type,
  img,
  desc,
  tags,
  title,
  handleImageClick,
  price,
  onChildValue,
  order,
  user,
  handleClose,
}) => {
  const shouldFormatNumbers = type === "signals";
  const [totalPriceInBTC, setTotalPriceInBTC] = useState(0);
  const [totalPriceInETH, setTotalPriceInETH] = useState(0);
  const [totalPriceInUSDT, setTotalPriceInUSDT] = useState(0);
  const [showWalletAlert, setShowWalletAlert] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const { t } = useTranslation();
  const isFullscreen = useSelector(
    (state: RootState) => state.FullScreenToggleReducer.fullScreen
  );
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const handleTextAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
    if (onChildValue) onChildValue(textAreaValue);
  };
  const handleCopyToClipboard = async (text: string | undefined) => {
    try {
      await copy(text || "");
      setShowWalletAlert(true);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };
  type formPlanDate = {
    maxDays: string;
    remaining: string;
  };
  const [formUserDataState, setFormUserDataState] = useState<IloginData>({
    email: "",
    password: "",
  });
  const [formDataState, setFormDataState] = useState<formPlanDate>({
    maxDays: "",
    remaining: "",
  });
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormDataState((prevData: formPlanDate) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleUserFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormUserDataState((prevData: IloginData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleSubmitPlan = async () => {
    try {
      const accessToken = Cookies.get("accessToken");
      const formData = new FormData();

      formData.append("maxDays", formDataState.maxDays);
      formData.append("remaining", formDataState.remaining);

      const response = await fetch(
        `${BackendAddress()}/user/planUpdate/${user?.username}`,
        {
          method: "POST",
          body: formData, //sending the form data to the backend
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        console.log("Done updating user's plan");
      } else {
        console.error("user didnt get updated");
      }
    } catch (error) {
      console.error("error:", error);
    }
  };
  const handleLogin = async () => {
    console.log("formDataState.email:", formUserDataState.email);
    console.log("formDataState.password:", formUserDataState.password);
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${BackendAddress()}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formUserDataState),
      });
      if (response.ok) {
        handleClose();
        dispatch(toggleModalFalse());
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

        if (accessToken) {
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
              window.location.reload();
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
  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const btcPrice = await cryptoPrice("btc", price || 0);
        const ethPrice = await cryptoPrice("eth", price || 0);
        const usdtPrice = await cryptoPrice("usdt", price || 0);

        setTotalPriceInBTC(btcPrice);
        setTotalPriceInETH(ethPrice);
        setTotalPriceInUSDT(usdtPrice);
      } catch (error) {
        console.error("Error fetching crypto prices:", error);
      }
    };

    fetchCryptoPrices();
  }, [price]);
  return (
    <div
      className={`flex ${
        type === "checkout" && "overflow-x-hidden"
      } flex-col justify-between `}
    >
      {/* {type === "userData" && (
        <div>
          <Table type="user" order={orders[0]} />
          <Table type="order" order={orders[0]} />
        </div>
      )} */}
      <div className="">
        {/* {!isLoaded ? <Loading /> : <></>} */}
        {type === "signals" && (
          <img
            className={`w-full h-64 object-cover mb-4 cursor-pointer ${
              isFullscreen
                ? "fixed z-[20] lg:top-[9%] lg:left-[5%] w-full h-[30%] left-[0%] top-[35%] lg:w-[90%] lg:h-[90%]"
                : ""
            }`}
            src={img}
            onClick={handleImageClick}
            // onLoad={handleImageLoad}
          />
        )}

        {type === "news" && (
          <img
            className="w-full h-[200px] object-cover"
            src={img}
            alt={title}
          />
        )}
        {type === "checkout" && order !== undefined && order.done ? (
          <div>
            <div className="flex flex-col">
              <div className="mb-10">
                <p className="text-4xl text-green-700">Successfull Order</p>
              </div>
              {/* <div className="flex justify-center items-center">
              <p className="text-4xl text-primary">
                Thank you for your purchase
              </p>
              </div> */}
              <div className="flex justify-start items-start mt-3">
                <p className="text-2xl text-primary">Order Details</p>
              </div>
              <div className="flex gap-5 justify-start items-start p-5 border-b-2 border-[#2c2c2c]">
                <div className="">
                  <label className="text-primary" htmlFor="date">
                    Date
                  </label>
                  <p id="date" className="text-xl text-neutral">
                    {new Date(order.orderDate).toLocaleString(
                      `${isFa ? "fa" : "en"}`,
                      {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      }
                    )}
                  </p>
                </div>
                <div>
                  <label className="text-primary" htmlFor="method">
                    Payment Method
                  </label>
                  <p id="method" className="text-xl text-neutral">
                    {String(order.paymentMethod.method)}
                  </p>
                </div>
                <div>
                  <label className="text-primary" htmlFor="id">
                    Total Price
                  </label>
                  <p className="text-neutral">
                    {String(order.totalPrice)}$ in crypto
                  </p>
                </div>
              </div>
              <Table type="order" order={order} />
            </div>
            <p className="text-xl text-primary">User Information</p>
            <Table type="user" order={order} />
          </div>
        ) : type === "checkout" &&
          order !== undefined &&
          order.paymentMethod.timer !== undefined &&
          order.paymentMethod.timer <= 0 &&
          !order.paymentMethod.paid ? (
          <div>
            <div className="flex flex-col">
              <div className="mb-10">
                <p className="text-4xl text-red-700">Failed Order</p>
              </div>
              {/* <div className="flex justify-center items-center">
                <p className="text-4xl text-primary">
                  Thank you for your purchase
                </p>
              </div> */}
              <div className="flex justify-start items-start mt-3">
                <p className="text-2xl text-primary">Order Details</p>
              </div>
              <div className="flex gap-5 justify-start items-start p-5 border-b-2 border-[#2c2c2c]">
                <div className="">
                  <label className="text-primary" htmlFor="date">
                    Date
                  </label>
                  <p id="date" className="text-xl text-neutral">
                    {new Date(order.orderDate).toLocaleString(
                      `${isFa ? "fa" : "en"}`,
                      {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      }
                    )}
                  </p>
                </div>
                <div>
                  <label className="text-primary" htmlFor="method">
                    Payment Method
                  </label>
                  <p id="method" className="text-xl text-neutral">
                    {String(order.paymentMethod.method)}
                  </p>
                </div>
                <div>
                  <label className="text-primary" htmlFor="id">
                    Total Price
                  </label>
                  <p className="text-neutral">
                    {String(order.totalPrice)}$ in crypto
                  </p>
                </div>

                <Table type="order" order={order} />
              </div>
            </div>
            <p className="text-xl text-primary">User Information</p>
            <Table type="user" order={order} />
          </div>
        ) : type === "checkout" &&
          order !== undefined &&
          order.paymentMethod.timer !== undefined &&
          order.paymentMethod.timer >= 0 &&
          order.paymentMethod.paid ? (
          <div>
            <div className="flex flex-col">
              <div className="mb-10">
                <p className="text-4xl text-primary">Pending Order</p>
              </div>
              {/* <div className="flex justify-center items-center">
            <p className="text-4xl text-primary">
              Thank you for your purchase
            </p>
          </div> */}
              <div className="flex justify-start items-start mt-3">
                <p className="text-2xl text-primary">Order Details</p>
              </div>
              <div className="flex gap-5 justify-start items-start p-5 border-b-2 border-[#2c2c2c]">
                <div className="">
                  <label className="text-primary" htmlFor="date">
                    Date
                  </label>
                  <p id="date" className="text-xl text-neutral">
                    {new Date(order.orderDate).toLocaleString(
                      `${isFa ? "fa" : "en"}`,
                      {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      }
                    )}
                  </p>
                </div>
                <div>
                  <label className="text-primary" htmlFor="method">
                    Payment Method
                  </label>
                  <p id="method" className="text-xl text-neutral">
                    {String(order.paymentMethod.method)}
                  </p>
                </div>
                <div>
                  <label className="text-primary" htmlFor="id">
                    Total Price
                  </label>
                  <p className="text-neutral">
                    {String(order.totalPrice)}$ in crypto
                  </p>
                </div>

                <Table type="order" order={order} />
              </div>
            </div>
            <p className="text-xl text-primary">User Information</p>
            <Table type="user" order={order} />
          </div>
        ) : (
          type === "checkout" && (
            <>
              {showWalletAlert && (
                <div
                  onClick={() => setShowWalletAlert(false)}
                  role="alert"
                  className="flex fixed top-5 justify-center items-center w-[75%] border-none alert bg-primary text-neutral"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 stroke-info shrink-0 text-neutral"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>Wallet Address Coppied!</span>
                </div>
              )}

              <div className="flex overflow-x-hidden flex-col justify-around items-center stats md:flex-row">
                {/* <img
                className="w-[400px] h-[400px] object-cover "
                src={img}
                alt={title}
              /> */}
                <div className="flex flex-col gap-5 mb-5">
                  <p className="mx-2 text-neutral">Wallet Addresses</p>
                  {desc && (
                    <div
                      role="alert"
                      className="alert alert-info bg-base-100 text-neutral border-none p-0 flex w-[400px]"
                    >
                      <div
                        className="flex gap-2 justify-center items-center"
                        onClick={() => handleCopyToClipboard(desc.desc1)}
                      >
                        <div className="text-2xl animate-pulse text-primary">
                          <FaBtc />
                        </div>

                        <span className="active:text-primary hover:opacity-[0.8] cursor-pointer text-neutral">
                          {desc.desc1}
                        </span>
                      </div>

                      <p
                        className="active:text-neutral hover:opacity-[0.8] cursor-pointer text-primary"
                        onClick={() =>
                          handleCopyToClipboard(String(totalPriceInBTC))
                        }
                      >
                        {totalPriceInBTC}
                      </p>
                    </div>
                  )}
                  {desc && (
                    <div
                      role="alert"
                      className="alert alert-info bg-base-100 text-neutral border-none p-0 flex w-[400px]"
                    >
                      <div
                        className="flex gap-2 justify-center items-center"
                        onClick={() => handleCopyToClipboard(desc.desc2)}
                      >
                        <div className="text-2xl animate-pulse text-neutral">
                          <FaEthereum />
                        </div>

                        <span className="active:text-primary hover:opacity-[0.8] cursor-pointer text-neutral">
                          {desc.desc2}
                        </span>
                      </div>

                      <p
                        className="active:text-neutral hover:opacity-[0.8] cursor-pointer text-primary"
                        onClick={() =>
                          handleCopyToClipboard(String(totalPriceInETH))
                        }
                      >
                        {totalPriceInETH}
                      </p>
                    </div>
                  )}
                  {desc && (
                    <div
                      role="alert"
                      className="alert alert-info bg-base-100 text-neutral border-none p-0 flex w-[400px]"
                    >
                      <div
                        className="flex gap-2 justify-center items-center"
                        onClick={() => handleCopyToClipboard(desc.desc3)}
                      >
                        <div className="text-2xl text-green-600 animate-pulse">
                          <TbBrandTether />
                        </div>

                        <span className="active:text-primary hover:opacity-[0.8] cursor-pointer text-neutral">
                          {desc.desc3}
                        </span>
                      </div>

                      <p
                        className="active:text-neutral hover:opacity-[0.8] cursor-pointer text-primary"
                        onClick={() =>
                          handleCopyToClipboard(String(totalPriceInUSDT))
                        }
                      >
                        {totalPriceInUSDT}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2 border-none">
                  <label className="text-neutral" htmlFor="paymentText">
                    Enter Your resite
                  </label>
                  <textarea
                    name="paymentText"
                    id="paymentText"
                    cols={30}
                    rows={10}
                    onChange={handleTextAreaValue}
                    className="pl-2 h-[150px] w-[300px] mt-2 rounded-md border bg-base-100 border-neutral focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                  ></textarea>
                </div>
              </div>
            </>
          )
        )}
        {/* {type !== "news" && type !== "signals" && (
          <div className="xl:flex">
            <img
              className="w-[400px] h-[400px] object-cover "
              src={img}
              alt={title}
            />
            {desc && <p className="p-5 text-neutral">{desc.desc1}</p>}
            {desc && <p className="text-neutral">{desc.desc2}</p>}
            {desc && <p className="text-neutral">{desc.desc3}</p>}
          </div>
        )} */}
      </div>
      <div className="my-5">
        {type === "news" && <p className="mb-4">{desc && desc.desc1}</p>}
        {type === "signals" && desc !== undefined && (
          <div>
            <div className="flex justify-center items-center p-2">
              <div className="flex gap-1 p-2 shadow stats">
                <p className="text-neutral">{t("entryPoint")}:</p>
                <p className="border-none text-neutral">
                  {entryPoint === "now"
                    ? t("now")
                    : isFa
                    ? formatNumberToPersian(Number(entryPoint))
                    : entryPoint}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center p-1">
              <div className="shadow stats">
                <div className="flex justify-center items-center stat">
                  <p className="text-sm text-neutral">
                    {t("tp1")}%
                    {shouldFormatNumbers
                      ? isFa
                        ? formatNumberToPersian(Number(desc.desc1))
                        : desc.desc1
                      : desc.desc1}
                  </p>
                </div>

                <div className="flex justify-center items-center stat">
                  <p className="text-sm text-neutral">
                    {t("tp2")}%
                    {shouldFormatNumbers
                      ? isFa
                        ? formatNumberToPersian(Number(desc.desc2))
                        : desc.desc2
                      : desc.desc2}
                  </p>
                </div>

                <div className="flex justify-center items-center stat">
                  <p className="text-sm text-neutral">
                    {t("tp3")}%
                    {shouldFormatNumbers
                      ? isFa
                        ? formatNumberToPersian(Number(desc.desc3))
                        : desc.desc3
                      : desc.desc3}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center p-1">
              <div className="shadow stats">
                <div className="flex justify-center items-center stat">
                  <p className="text-sm text-neutral">
                    {t("tp1Price")}
                    {": "}
                    {shouldFormatNumbers
                      ? isFa
                        ? formatNumberToPersian(Number(tpPrices?.tp1Price))
                        : tpPrices?.tp1Price
                      : tpPrices?.tp1Price}
                  </p>
                </div>

                <div className="flex justify-center items-center stat">
                  <p className="text-sm text-neutral">
                    {t("tp2Price")}
                    {": "}
                    {shouldFormatNumbers
                      ? isFa
                        ? formatNumberToPersian(Number(tpPrices?.tp2Price))
                        : tpPrices?.tp2Price
                      : tpPrices?.tp2Price}
                  </p>
                </div>

                <div className="flex justify-center items-center stat">
                  <p className="text-sm text-neutral">
                    {t("tp3Price")}
                    {": "}
                    {shouldFormatNumbers
                      ? isFa
                        ? formatNumberToPersian(Number(tpPrices?.tp3Price))
                        : tpPrices?.tp3Price
                      : tpPrices?.tp3Price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {type === "plan" && (
          <div>
            <div className="flex gap-10 justify-center items-center">
              <div className="flex gap-4 items-center">
                <label htmlFor="maxDays">Corrent Max Days</label>
                <p>{user?.plan.maxDays}</p>
              </div>
              <div className="flex gap-4 items-center">
                <label htmlFor="remaining">Corrent Remaining Days</label>
                <p>{user?.plan.remaining}</p>
              </div>
            </div>
            <div className="flex gap-10 justify-center items-center">
              <div className="flex gap-4 items-center">
                <label htmlFor="maxDays">Max Days</label>
                <input
                  className="pl-1 mt-2 w-12 h-12 rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                  name="maxDays"
                  id="maxDays"
                  type="text"
                  placeholder={String(user?.plan.maxDays)}
                  onChange={handleFormChange}
                />
              </div>
              <div className="flex gap-4 items-center">
                <label htmlFor="remaining">Remaining</label>
                <input
                  className="pl-1 mt-2 w-12 h-12 rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                  name="remaining"
                  id="remaining"
                  type="text"
                  placeholder={String(user?.plan.remaining)}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <button
              className="p-3 my-10 text-white rounded-md bg-neutral"
              onClick={handleSubmitPlan}
            >
              Submit
            </button>
          </div>
        )}
      </div>
      {type === "signals" && (
        <div className="flex justify-center items-center mt-2 space-x-2">
          {tags && (
            <div className="flex text-xl">
              <div className="shadow stats">
                <div className="flex justify-center items-center text-sm stat">
                  <div className="stat-title">{t("stop")}%</div>
                  <p className="text-neutral">
                    {shouldFormatNumbers
                      ? isFa
                        ? formatNumberToPersian(Number(tags.tag1))
                        : tags.tag1
                      : tags.tag1}
                    %
                  </p>
                </div>
              </div>
            </div>
          )}
          {tags && (
            <div className="flex text-xl">
              <div className="shadow stats">
                <div className="flex justify-center items-center text-sm stat">
                  <div className="stat-title">{t("sl")}</div>
                  <p className="text-neutral">
                    {shouldFormatNumbers && tags.tag2}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {type === "signals" && (
        <div className="flex justify-center items-center p-2">
          <div className="flex gap-1 p-2 shadow stats">
            <p className="text-neutral">{t("alertDesc")}:</p>
            <p className="border-none text-neutral">{alertDesc}</p>
          </div>
        </div>
      )}
      {type === "checkout" && order !== undefined && order.done ? (
        <></>
      ) : type === "checkout" &&
        order !== undefined &&
        order.paymentMethod.timer !== undefined &&
        order.paymentMethod.timer <= 0 &&
        !order.paymentMethod.paid ? (
        <></>
      ) : type === "checkout" &&
        order !== undefined &&
        order.paymentMethod.timer !== undefined &&
        order.paymentMethod.timer >= 0 &&
        order.paymentMethod.paid ? (
        <></>
      ) : (
        type === "checkout" && (
          <div className="flex items-center md:mt-[4%] md:flex-col">
            <div
              role="alert"
              className="alert alert-info bg-base-100 text-neutral border-none p-0 text-sm w-[45%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 animate-pulse stroke-current shrink-0 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>{tags?.tag1}</span>
            </div>
            <div
              role="alert"
              className="alert alert-info bg-base-100 text-neutral border-none p-0 text-sm w-[45%]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 animate-pulse stroke-current shrink-0 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>{tags?.tag2}</span>
            </div>
          </div>
        )
      )}
      {type === "login" && (
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
            <div className="flex justify-center items-center mt-5">
              <div className="flex w-[190px] items-center justify-center">
                <img
                  src={`${
                    isDarkTheme
                      ? "../../../src/assets/img/logoDark212121.png"
                      : "../../../src/assets/img/logo.png"
                  }`}
                  alt="LOGO"
                />
              </div>
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
                  onChange={handleUserFormChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-neutral">
                    {t("password")}
                  </span>
                </label>
                <input
                  required
                  name="password"
                  type="password"
                  id="password"
                  className="pl-5 mt-2 w-full h-12 rounded-md border border-neutral bg-base-100 focus:border-primary focus:border-2 focus:outline-none placeholder:text-neutral"
                  placeholder={t("password")}
                  onChange={handleUserFormChange}
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
                  onClick={handleLogin}
                  className="btn btn-primary"
                  disabled={loading}
                >
                  <div className="flex gap-2 justify-center items-center text-base-100">
                    {loading ? t("logginIn") : t("login")}
                    {loading && (
                      <span className="loading loading-spinner"></span>
                    )}
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
      )}
    </div>
  );
};
export default ModalContent;
