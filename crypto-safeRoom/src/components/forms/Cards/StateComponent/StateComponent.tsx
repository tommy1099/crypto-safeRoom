import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { StateProps } from "../../../../Interfaces/Interfaces.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store/Store.tsx";

const StateComponent = ({ blur, state, t }: StateProps) => {
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  if (blur) {
    return state ? (
      <div
        dir={`${isFa ? "rtl" : "ltr"}`}
        className="flex gap-2 text-[#3f9345]"
      >
        <p>{t("result")}</p>
        <div className="mt-1">
          {" "}
          <IoMdCheckmarkCircle />
        </div>
      </div>
    ) : (
      <div
        dir={`${isFa ? "rtl" : "ltr"}`}
        className="flex gap-2 text-[#b71c1c]"
      >
        <p>{t("result")}</p>
        <div className="mt-1">
          {" "}
          <ImCross />
        </div>
      </div>
    );
  } else {
    return (
      <div
        dir={`${isFa ? "rtl" : "ltr"}`}
        className={`flex gap-2 text-primary ${
          !blur ? "w-[60px] border-primary" : ""
        }`}
      >
        {t("new")}
      </div>
    );
  }
};
export default StateComponent;
