import React, { useState, useEffect, useRef } from "react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const selectedOption = useSelector(
    (state: RootState) => state.dropDown.selectedOption
  );
  // const [isOpen, setIsOpen] = useState(false);
  const handleOptionSelect = (option: string) => {
    dispatch(setSelectedOption(option));
    onSelect(option);
    // setIsOpen(false); // Set isOpen to false after an option is selected
  };
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [dropdownRef, isOpen]);
  // const handleDropdownClick = () => {
  //   setIsOpen(!isOpen); // Toggle isOpen when the dropdown is clicked
  // };

  return (
    // <div
    //   ref={dropdownRef}
    //   className="flexz flex-col ml-[5%] w-[120px] mt-[10px] lg:mt-[20px] bg-base-100 gap-2 text-neutral  items-center"
    // >
    //   <label className="mb-1 items-center text-[11px]">{label}</label>
    //   <div className="relative w-[85px] bg-base-100">
    //     <button
    //       className="px-3 py-2 w-full text-left rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-patternColors-green"
    //       onClick={handleDropdownClick}
    //     >
    //       {selectedOption}
    //       <svg
    //         className={`h-5 w-5 absolute top-0 right-0 m-2 pointer-events-none ${
    //           isOpen ? "transform rotate-180" : ""// }`}
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M10 12l-5-5 1.5-1.5L10 9.998l3.5-3.5L15 7.998l-5 5z"
    //           clipRule="evenodd"
    //         />
    //       </svg>
    //     </button>
    //     {isOpen && (
    //       <div className="absolute bg-base-100 text-neutral w-full  rounded-md shadow-lg max-h-[200px] overflow-y-auto">
    //         {options.map((option) => (
    //           <button
    //             key={option}
    //             className="block px-3 py-2 w-full text-left hover:text-secondary hover:bg-primary focus:outline-none"
    //             onClick={() => handleOptionSelect(option)}
    //           >
    //             {option}
    //           </button>
    //         ))}
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="dropdown dropdown-end dropdown-hover">
      <label
        tabIndex={0}
        className="w-20 border-2 bg-base-100 btn border-primary hover:border-primary text-neutral hover:bg-primary hover:text-base-100"
      >
        {selectedOption}
      </label>
      <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-neutral rounded-box w-52">
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
