import React, { useState } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  //   setSelectedOption(options[0]);
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false); // Set isOpen to false after an option is selected
  };

  const handleDropdownClick = () => {
    setIsOpen(!isOpen); // Toggle isOpen when the dropdown is clicked
  };

  return (
    <div className="flex mt-6 ml-[5%] gap-2 items-center p-5">
      <label className="mb-1 items-center text-[11px]">{label}</label>
      <div className="relative w-[150px]">
        <button
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-left focus:outline-none focus:ring-2 focus:ring-patternColors-green"
          onClick={handleDropdownClick}
        >
          {selectedOption || "Select an option"}
          <svg
            className={`h-5 w-5 absolute top-0 right-0 m-2 pointer-events-none ${
              isOpen ? "transform rotate-180" : ""
            }`}
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
                className="block w-full text-left px-3 py-2 hover:bg-gray-100 focus:outline-none"
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
