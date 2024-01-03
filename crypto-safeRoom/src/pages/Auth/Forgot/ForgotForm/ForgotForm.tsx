import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BackendAddress } from "../../../../utils/BackendAddress/BackendAddress";
import { useSelector } from "react-redux";

import { RootState } from "../../../../Store/Store";
import { useTranslation } from "react-i18next";
interface IloginData {
  email: string;
  password: string;
}

const ForgotForm = () => {
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
  const sendRestRequest = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${BackendAddress()}/auth/reset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataState),
      });
      if (response.ok) {
        //=====================
      } else {
        setError("Invalid email. Please try again.");
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

  return (
    <div
      dir={`${isFa ? "rtl" : "ltr"}`}
      className="min-h-screen hero bg-base-200"
    >
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div
          className={`text-center ${isFa ? "lg:text-right" : "lg:text-left"}`}
        >
          <h1 className="text-5xl font-bold text-neutral">{t("resetNow")}</h1>
          <p className="py-6 text-neutral">{t("resetMessage")}</p>
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
          <form onSubmit={sendRestRequest} className="card-body">
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

            <div className="mt-6 form-control">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                <div className="flex gap-2 justify-center items-center text-base-100">
                  {loading ? t("reseting") : t("reset")}
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
        </div>
      </div>
    </div>
  );
};

export default ForgotForm;
