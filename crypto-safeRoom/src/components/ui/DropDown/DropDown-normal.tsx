import { IDropDown_normal } from "../../../Interfaces/Interfaces";

const DropDown_normal = ({ name, children, where }: IDropDown_normal) => {
  return (
    <div
      tabIndex={0}
      className={`border-t collapse  bg-gray-100 ${
        where === "product" && "collapse-open"
      } ${where === "searchPage" && "collapse-arrow"}`}
    >
      <input type="checkbox" />
      <div className="justify-center items-center font-medium text-right text-md collapse-title text-neutral">
        {name}
      </div>
      <div tabIndex={0} className="flex flex-col text-right collapse-content">
        {children}
      </div>
    </div>
  );
};
export default DropDown_normal;
