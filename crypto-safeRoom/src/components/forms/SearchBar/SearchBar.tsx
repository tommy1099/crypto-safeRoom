import { ChangeEvent, useRef, useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { IProduct, ISearch } from "../../../Interfaces/Interfaces";
import Suggestions from "./Suggestions";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
const SearchBar = ({ handleBlurToggleFromChild }: ISearch) => {
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<IProduct[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [nothingFound, setNothingFound] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const debouncedSearch = (query: string) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(async () => {
      const response = await fetch(
        `http://localhost:3000/product/suggestions/${query}`
      );
      if (response.ok) {
        setShowLoading(false);

        const data: IProduct[] = await response.json();
        if (data.length <= 0) {
          setNothingFound(true);
        }
        setSuggestions(data);
      }
    }, 500);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    if (value.trim() === "") {
      setShowSuggestions(false);
      setSuggestions([]);
    } else {
      setNothingFound(false);
      setShowLoading(true);
      setShowSuggestions(true);
      debouncedSearch(value);
      setSuggestions([]);
    }
  };

  const handleInputClick = () => {
    if (searchTerm.trim() !== "") {
      setShowLoading(true);
      debouncedSearch(searchTerm);
      setTimeout(() => {
        setShowSuggestions(true);
      }, 0);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
        setSuggestions([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleClearClick = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    handleBlurToggleFromChild(showSuggestions);
  }, [handleBlurToggleFromChild, setShowSuggestions, showSuggestions]);
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    setShowSuggestions(false);
    event.preventDefault();
    setSearchParams({ q: searchTerm }); // if (!window.location.pathname.includes("/search")) {
    // navigate(`/search/?q=${encodeURIComponent(searchTerm)}`);
    // }
  };
  useEffect(() => {
    setSearchTerm(searchParams.get("q") || "");
    if (searchTerm) {
      navigate(`/search/?q=${encodeURIComponent(searchTerm)}&sort=newest`);
    }
  }, [searchParams]);
  return (
    <form
      onSubmit={handleSearch}
      className="relative z-10 justify-end items-end w-full text-right"
    >
      <span
        onClick={handleSearch}
        className="absolute top-2 right-2 text-3xl cursor-pointer text-slate-400"
      >
        <IoIosSearch />
      </span>
      <input
        ref={inputRef}
        value={searchTerm}
        onChange={handleInputChange}
        onClick={handleInputClick}
        dir="rtl"
        type="text"
        placeholder={"جستجو در آپولو"}
        className={`input input-bordered  ${
          showSuggestions
            ? "rounded-b-none border-0 border-t border-r border-l border-slate-400"
            : "bg-gray-200 border-none"
        } w-full mr-1 pr-10 rounded-xl focus:ring-0 z-3 focus:outline-none `}
      />
      {showSuggestions && (
        <span
          className="absolute top-3 left-5 text-2xl cursor-pointer text-slate-400"
          onClick={handleClearClick}
        >
          <MdOutlineCancel />
        </span>
      )}
      {showSuggestions && (
        <span className="mx-5 w-[93%] absolute border-blue-500 border-t-2 top-12 right-0"></span>
      )}
      {showSuggestions && (
        <div ref={suggestionsRef}>
          <Suggestions
            data={suggestions}
            showLoading={showLoading}
            nothingFound={nothingFound}
          />
        </div>
      )}
    </form>
  );
};

export default SearchBar;
