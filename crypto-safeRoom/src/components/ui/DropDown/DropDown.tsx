import React, { useState } from "react";
import { RootState } from "../../../Store/Store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setSelectedOption } from "../../../Store/DropDownReducer";
interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(
    (state: RootState) => state.dropDown.selectedOption
  );
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionSelect = (option: string) => {
    dispatch(setSelectedOption(option));
    onSelect(option);
    setIsOpen(false); // Set isOpen to false after an option is selected
  };
  const handleDropdownClick = () => {
    setIsOpen(!isOpen); // Toggle isOpen when the dropdown is clicked
  };

  return (
    <div className="flex ml-[5%] mt-[10px] lg:mt-[10px] gap-2 items-center">
      <label className="mb-1 items-center text-[11px]">{label}</label>
      <div className="relative w-[85px]">
        <button
          className="px-3 py-2 w-full text-left rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-patternColors-green"
          onClick={handleDropdownClick}
        >
          {selectedOption}
          <svg
            className={`h-5 w-5 absolute top-0 right-0 m-2 pointer-events-none ${
              isOpen ? "transform rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12l-5-5 1.5-1.5L10 9.998l3.5-3.5L15 7.998l-5 5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-[200px] overflow-y-auto">
            {options.map((option) => (
              <button
                key={option}
                className="block px-3 py-2 w-full text-left hover:bg-gray-100 focus:outline-none"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
