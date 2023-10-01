import { useDispatch } from "react-redux";
import { toggleSwitchFalse, toggleSwitchTrue } from "../../../Store/isChecked";
import { Dropdown } from "../../ui";
import { useSearchParams } from "react-router-dom";
const SignalFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams({ toggle: "false" });
  const switchToggle = searchParams.get("toggle") === "true";
  const dispatch = useDispatch();

  //====================================================all/active filter
  const handleCheck = () => {
    if (switchToggle) setSearchParams({ toggle: "false" });
    else {
      setSearchParams({ toggle: "true" });
    }
  };

  const handleCheckTrueFalse = (option: string) => {
    if (option === "Active" && switchToggle) {
      dispatch(toggleSwitchFalse());

      handleCheck();
    } else if (option === "All" && !switchToggle) {
      dispatch(toggleSwitchTrue());

      handleCheck();
    }
  };
  //====================================================all/active filter

  return (
    <div className="flex flex-col gap-1">
      <Dropdown
        label="All/Active"
        options={["All", "Active"]}
        onSelect={handleCheckTrueFalse}
      />
    </div>
  );
};
export default SignalFilters;
