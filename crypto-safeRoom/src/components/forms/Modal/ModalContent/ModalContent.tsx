// ModalContent.tsx
import React from "react";
import { CardProps } from "../../../../Interfaces/Interfaces";
import { useTranslation } from "react-i18next";
import { formatNumberToPersian } from "../../../../utils/NumberToFarsi/NumberToFarsi";
import { RootState } from "../../../../Store/Store";
import { useSelector } from "react-redux";

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
}) => {
  const shouldFormatNumbers = type === "signals";
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const { t } = useTranslation();
  const isFullscreen = useSelector(
    (state: RootState) => state.FullScreenToggleReducer.fullScreen
  );

  return (
    <div className="">
      {" "}
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
        {type !== "news" && type !== "signals" && (
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
        )}
      </div>
      <div className="my-5">
        {type === "news" && <p className="mb-4">{desc && desc.desc1}</p>}
        {type === "signals" && desc !== undefined && (
          <div>
            <div className="flex justify-center items-center p-2">
              <div className="flex gap-1 p-2 shadow stats">
                <p className="text-neutral">{t("entryPoint")}:</p>
                <p className="border-none text-neutral">
                  {entryPoint === ""
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
      </div>
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
      <div className="flex justify-center items-center p-2">
        <div className="flex gap-1 p-2 shadow stats">
          <p className="text-neutral">{t("alertDesc")}:</p>
          <p className="border-none text-neutral">{alertDesc}</p>
        </div>
      </div>
    </div>
  );
};
export default ModalContent;
