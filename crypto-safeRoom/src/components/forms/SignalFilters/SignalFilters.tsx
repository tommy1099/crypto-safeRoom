import { useDispatch, useSelector } from "react-redux";
import { toggleSwitch } from "../../../Store/isChecked";
import { RootState } from "../../../Store/Store";
const SignalFilters = () => {
  const dispatch = useDispatch();
  const switchState = useSelector(
    (state: RootState) => state.toggleReducer.switch
  );

  const handleCheck = () => {
    dispatch(toggleSwitch());
  };
  return (
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
  );
};
export default SignalFilters;
