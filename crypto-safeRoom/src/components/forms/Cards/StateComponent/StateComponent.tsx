import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { StateProps } from "../../../../Interfaces/Interfaces.ts";

const StateComponent = ({ blur, state, t }: StateProps) => {
  if (blur) {
    return state ? (
      <div className="flex gap-2 text-green-500">
        <p>{t("result")}</p>
        <div className="mt-1">
          {" "}
          <IoMdCheckmarkCircle />
        </div>
      </div>
    ) : (
      <div className="flex gap-2 text-red-500">
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
