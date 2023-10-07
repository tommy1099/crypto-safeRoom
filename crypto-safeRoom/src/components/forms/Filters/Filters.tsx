import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toggleSwitchFalse, toggleSwitchTrue } from "../../../Store/isChecked";
import { Dropdown, Input } from "../../ui";
import { setSelectedValue } from "../../../Store/RadioState";
import { RootState } from "../../../Store/Store";
interface Props {
  type: string;
}

const Filters: React.FC<Props> = ({ type }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({
    toggle: "false",
    cat: "All",
  });

  const switchToggle = searchParams.get("toggle") === "true";
  const catValue = searchParams.get("cat");
  const selectedRadioValue = useSelector(
    (state: RootState) => state.Radio.selectedValue
  );
  // Initialize the Redux state with URL parameters on component mount
  useEffect(() => {
    // Update the Redux state based on the URL toggle parameter
    if (searchParams.get("toggle") === "true") {
      dispatch(toggleSwitchTrue());
    } else {
      dispatch(toggleSwitchFalse());
    }
    dispatch(setSelectedValue(catValue));

    console.log("selectedRadioValue:", selectedRadioValue);

    // dispatch(setSelectedValue(selectedRadioValue));
    // Optionally, you can notify the parent component of the filter change
    // if (onFilterChange) {
    //   onFilterChange(catValue || "");
    // }
  }, [searchParams, dispatch, catValue, selectedRadioValue]);

  const options = [
    "All",
    "Beginner",
    "Advanced",
    "Strategies",
    "Emotions Management",
    "Money Management",
  ];

  const handleCheckTrueFalse = (option: string) => {
    if (option === "Active" && switchToggle) {
      dispatch(toggleSwitchFalse());
      handleCheck();
    } else if (option === "All" && !switchToggle) {
      handleCheck();
      dispatch(toggleSwitchTrue());
    }
  };

  const handleRadioChange = (value: string) => {
    setSearchParams((prev) => ({ ...prev, cat: value }));
  };

  const handleCheck = () => {
    if (switchToggle) {
      setSearchParams((prev) => ({ ...prev, toggle: "false" }));
    } else {
      setSearchParams((prev) => ({ ...prev, toggle: "true" }));
    }
  };

  return (
    <>
      {type === "signals" ? (
        <div className="flex flex-col gap-1">
          <Dropdown
            label="Show: "
            options={["All", "Active"]}
            onSelect={handleCheckTrueFalse}
          />
        </div>
      ) : type === "tutorials" ? (
        <div className="flex flex-col items-start mt-10">
          <div className="flex flex-col gap-10 items-start space-x-0 w-48">
            {options.map((option) => (
              <Input
                id={option}
                style="mr-2"
                type="radio"
                name="filter"
                value={option}
                onChange={() => handleRadioChange(option)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Filters;
