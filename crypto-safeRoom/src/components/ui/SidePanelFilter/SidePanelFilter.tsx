// interface Props {
//   isChecked(): void;
// }
import { useDispatch, useSelector } from "react-redux";
import { toggleSwitch } from "../../../Store/isChecked";
import { RootState } from "../../../Store/Store";
const SidePanelFilter = () => {
  const dispatch = useDispatch();
  const switchState = useSelector(
    (state: RootState) => state.toggleReducer.switch
  );

  const handleCheck = () => {
    dispatch(toggleSwitch());
  };
  return (
    <div className="hidden lg:flex bg-white shadow-2xl z-10 rounded-md fixed top-[15%] w-[10%] pt-[2%] xl:w-[15%] items-start justify-center bottom-[10%] lg:px-24 right-[0%]">
      <div className="form-control">
        <label className="gap-2 label cursor-pointer">
          <span className="label-text">Active</span>
          {switchState ? (
            <input
              type="checkbox"
              onClick={handleCheck}
              className="toggle"
              checked
            />
          ) : (
            <input type="checkbox" onClick={handleCheck} className="toggle" />
          )}

          <span className="label-text">All</span>
        </label>
      </div>
    </div>
  );
};
export default SidePanelFilter;
