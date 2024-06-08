import { IDropDown_normal } from "../../../Interfaces/Interfaces";

const DropDown_normal = ({ name, children }: IDropDown_normal) => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-t">
      <input type="checkbox" />
      <div className="collapse-title text-sm font-medium items-center  text-right justify-center  text-neutral">
        {name}
      </div>
      <div tabIndex={0} className="collapse-content flex flex-col text-right">
        {children}
      </div>
    </div>
  );
};
export default DropDown_normal;
