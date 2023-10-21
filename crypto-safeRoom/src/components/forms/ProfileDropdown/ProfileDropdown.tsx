import { useState, useEffect, useRef } from "react";
import { Avatar } from "..";
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
import { RootState } from "../../../Store/Store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ThemeToggle } from "../../../Store/ThemeToggleReducer";
import { useDispatch } from "react-redux";

const ProfileDropdown = () => {
  const dispatch = useDispatch();

  const isDark = useSelector((state: RootState) => state.themeToggle.Dark);

  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      className="inline-block relative top-[-2px] text-left"
      ref={dropdownRef}
    >
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center rounded-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary"
          onClick={handleToggle}
        >
          <Avatar />
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-4 w-48 rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right text-neutral bg-base-100">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="/auth/login"
              className="block px-4 py-2 text-sm hover:text-secondary hover:bg-primary"
              role="menuitem"
            >
              Login
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:text-secondary hover:bg-primary"
              role="menuitem"
            >
              Settings
            </a>
            <a
              href="/profile"
              className="block px-4 py-2 text-sm hover:text-secondary hover:bg-primary"
              role="menuitem"
            >
              Profile
            </a>
            <div
              onClick={() => {
                dispatch(ThemeToggle());
              }}
              className="flex justify-between px-4 py-2 text-sm cursor-pointer hover:text-secondary hover:bg-primary"
            >
              Theme
              <div className="mt-1"> {isDark ? <HiMoon /> : <FiSun />}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
