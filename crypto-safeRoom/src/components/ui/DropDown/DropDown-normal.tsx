import { IDropDown_normal } from "../../../Interfaces/Interfaces";

const DropDown_normal = ({ name, children }: IDropDown_normal) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-open collapse-arrow bg-base-100"
    >
      <div className="collapse-title text-md font-medium items-center text-right justify-center pl-10 text-neutral">
        {name}
      </div>
      <div tabIndex={0} className="collapse-content flex flex-col text-right">
        {children}
      </div>
    </div>
  );
};
export default DropDown_normal;
