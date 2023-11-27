import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { DescProps } from "../../../../Interfaces/Interfaces.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store/Store.tsx";
const DescriptionsComponent = ({
  vip,
  id,
  type,
  desc,
  blur,
  tp,
  t,
  formatNumberToPersian,
  isFa,
}: DescProps) => {
  const shouldFormatNumbers = type === "signals";
  const user = useSelector((state: RootState) => state.user);

  return (
    <div
      dir={isFa ? "rtl" : "ltr"}
      id={id}
      className={`my-[5%] p-1 ${
        vip && user.plan.remaining <= 0 && !blur ? "opacity-0" : ""
      }`}
    >
      {desc?.desc1 && (
        <div className="flex gap-1 items-center">
          {type === "signals" && (
            <div className={`flex`}>
              {!blur && tp && tp.tp1 ? (
                <div className="text-xl text-green-700">
                  <IoMdCheckmarkCircle />
                </div>
              ) : !blur && tp && !tp.tp1 ? (
                <span className="loading loading-ring loading-md"></span>
              ) : blur && tp && tp.tp1 ? (
                <div className="text-xl text-green-700">
                  <IoMdCheckmarkCircle />
                </div>
              ) : (
                <div className="text-red-700">
                  <ImCross />
                </div>
              )}
            </div>
          )}

          <p
            className={`text-${
              shouldFormatNumbers ? "" : "neutral"
            } text-[11px] md:text-[12px]`}
          >
            {type === "signals" && `${t("tp1")}%`}
            {shouldFormatNumbers
              ? isFa
                ? formatNumberToPersian(Number(desc.desc1))
                : desc.desc1
              : desc.desc1}
          </p>
        </div>
      )}
      {desc?.desc2 && (
        <div className="flex gap-1 items-center">
          {type === "signals" && (
            <div className={`flex`}>
              {!blur && tp && tp.tp2 ? (
                <div className="text-xl text-green-700">
                  <IoMdCheckmarkCircle />
                </div>
              ) : !blur && tp && !tp.tp2 ? (
                <span className="loading loading-ring loading-md"></span>
              ) : blur && tp && tp.tp2 ? (
                <div className="text-xl text-green-700">
                  <IoMdCheckmarkCircle />
                </div>
              ) : (
                <div className="text-red-700">
                  <ImCross />
                </div>
              )}
            </div>
          )}

          <p
            className={`text-${
              shouldFormatNumbers ? "" : "neutral"
            } text-[11px] md:text-[12px]`}
          >
            {type === "signals" && `${t("tp2")}%`}
            {shouldFormatNumbers
              ? isFa
                ? formatNumberToPersian(Number(desc.desc2))
                : desc.desc2
              : desc.desc2}
          </p>
        </div>
      )}
      {desc?.desc3 && (
        <div className="flex gap-1 items-center">
          {type === "signals" && (
            <div className={"flex"}>
              {!blur && tp && tp.tp3 ? (
                <div className="text-xl text-green-700">
                  <IoMdCheckmarkCircle />
                </div>
              ) : !blur && tp && !tp.tp3 ? (
                <span className="loading loading-ring loading-md"></span>
              ) : blur && tp && tp.tp3 ? (
                <div className="text-xl text-green-700">
                  <IoMdCheckmarkCircle />
                </div>
              ) : (
                <div className="text-red-700">
                  <ImCross />
                </div>
              )}
            </div>
          )}
          <p
            className={`text-${
              shouldFormatNumbers ? "" : "neutral"
            } text-[11px] md:text-[12px]`}
          >
            {type === "signals" && `${t("tp3")}%`}
            {shouldFormatNumbers
              ? isFa
                ? formatNumberToPersian(Number(desc.desc3))
                : desc.desc3
              : desc.desc3}
          </p>
        </div>
      )}
    </div>
  );
};
export default DescriptionsComponent;
