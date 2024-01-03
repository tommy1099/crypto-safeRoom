import { useState } from "react";

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown dropdown-end dropdown-hover">
      <label
        tabIndex={0}
        className="border-2 bg-base-100 btn border-primary hover:border-primary text-neutral hover:bg-primary hover:text-base-100"
      >
        {selectedOption}
      </label>
      <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-neutral rounded-box">
        {options.map((option) => {
          return (
            <li key={option}>
              <button
                key={option}
                className="block px-3 py-2 w-full text-left hover:text-secondary hover:bg-primary focus:outline-none"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
