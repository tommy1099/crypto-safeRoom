import { useState, useEffect } from "react";
import { Container } from "..";
import "rc-slider/assets/index.css";
import { DropDown_normal } from "../../components/ui";
import {
  FilterOption,
  IRightSideSearchPageeMenu,
} from "@/Interfaces/Interfaces";
import { useSearchParams } from "react-router-dom";
const countries = [
  { id: "germany", label: "آلمان" },
  { id: "japan", label: "ژاپن" },
  { id: "usa", label: "آمریکا" },
  { id: "canada", label: "کانادا" },
  { id: "uk", label: "انگلیس" },
  { id: "korea", label: "کره" },
] as const;

const sizes = [
  { id: "s", label: "S" },
  { id: "m", label: "M" },
  { id: "l", label: "L" },
  { id: "xl", label: "XL" },
  { id: "2xl", label: "2XL" },
  { id: "3xl", label: "3XL" },
  { id: "4xl", label: "4XL" },
  { id: "5xl", label: "5XL" },
] as const;

const colors = [
  { id: "black", label: "مشکی" },
  { id: "white", label: "سفید" },
  { id: "gray", label: "طوسی" },
  { id: "green", label: "سبز" },
  { id: "red", label: "قرمز" },
  { id: "orange", label: "نارنجی" },
  { id: "yellow", label: "زرد" },
  { id: "pink", label: "صورتی" },
  { id: "brown", label: "قهوه ای" },
  { id: "blue", label: "آبی" },
  { id: "purple", label: "بنفش" },
  { id: "solver", label: "نقره ای" },
] as const;

const textures = [{ id: "gortex", label: "گورتکس" }] as const;

const kinds = [
  { id: "windstopper", label: "وینداستاپر" },
  { id: "jacket", label: "بادگیر" },
  { id: "t-shirt", label: "تیشرت" },
  { id: "pants", label: "شلوار" },
] as const;

const waterproof = [{ id: "waterproof", label: "ضدآب" }] as const;
const water_resistance = [
  { id: "water_resistance", label: "آب گریز" },
] as const;

const usages = [
  { id: "sport", label: "ورزشی" },
  { id: "non-sport", label: "غیر ورزشی" },
] as const;

const brands = [
  { id: "mammut", label: "Mammut" },
  { id: "marmot", label: "Marmot" },
  { id: "the_North_Face", label: "The North Face" },
  { id: "helly_Hansen", label: "Helly Hansen" },
  { id: "timberland", label: "Timberland" },
  { id: "columbia", label: "Columbia" },
  { id: "outdoor_Research", label: "Outdoor Research" },
  { id: "quechua", label: "Quechua" },
  { id: "salomon", label: "Salomon" },
  { id: "arc_teryx", label: "Arc'teryx" },
] as const;

const RightSideSearchPageeMenu = ({
  handleSendFiltersFromChild,
  isSidebarOpen,
}: IRightSideSearchPageeMenu) => {
  const [filters, setFilters] = useState<Record<string, FilterOption[]>>({});
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    handleSendFiltersFromChild(filters);
    console.log("filters: ", filters);
  }, [filters, setFilters]);
  const handleFilterChange = (category: string, option: FilterOption) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      console.log("updatedFilter: ", updatedFilters);
      const categoryFilters = updatedFilters[category] || [];

      if (categoryFilters.some((filter) => filter.label === option.label)) {
        updatedFilters[category] = categoryFilters.filter(
          (filter) => filter.label !== option.label
        );
      } else {
        updatedFilters[category] = [...categoryFilters, option];
      }

      const searchParams = new URLSearchParams(window.location.search);
      // searchParams.delete(category); // Remove the existing filters for this category

      // Clear all existing filters
      for (const [key] of new URLSearchParams(searchParams.toString())) {
        if (key.includes("[")) {
          searchParams.delete(key);
        }
      }

      Object.entries(updatedFilters).forEach(([category, options]) => {
        options.forEach((option, i) => {
          searchParams.append(`${category}[${i}]`, option.label);
        });
      });

      const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.replaceState(null, "", newUrl);

      return updatedFilters;
    });
  };
  const handleClearFilters = () => {
    setFilters({});
  };
  return (
    <Container
      dir="rtl"
      style={`fixed text-sm top-14 h-[1000px] overflow-y-auto right-0 overlfow-y-auto w-64  bg-base-100 rounded-md p-5 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } md:translate-x-0 md:relative w-[250px]`}
    >
      <div className="">فیلتر ها</div>
      <p
        onClick={handleClearFilters}
        className="my-5 text-sm text-blue-400 cursor-pointer"
      >
        حذف فیلتر ها
      </p>

      <DropDown_normal
        name="برندها"
        children={
          <div className="flex flex-col my-5">
            {brands.map((brand) => (
              <label className="flex gap-2" key={brand.id}>
                <input
                  type="checkbox"
                  checked={
                    filters.brands?.some(
                      (filter) => filter.label === brand.label
                    ) || false
                  }
                  onChange={() => handleFilterChange("brands", brand)}
                />
                {brand.label}
              </label>
            ))}
          </div>
        }
      />

      <DropDown_normal
        name="سایز ها"
        children={
          <div className="flex flex-col my-5">
            {sizes.map((size) => (
              <label className="flex gap-2" key={size.id}>
                <input
                  type="checkbox"
                  checked={
                    filters.sizes?.some(
                      (filter) => filter.label === size.label
                    ) || false
                  }
                  onChange={() => handleFilterChange("sizes", size)}
                />
                {size.label}
              </label>
            ))}
          </div>
        }
      />
      <DropDown_normal
        name="رنگ ها"
        children={
          <div className="flex flex-col my-5">
            {colors.map((color) => (
              <label className="flex gap-2" key={color.id}>
                <input
                  type="checkbox"
                  checked={
                    filters.colors?.some(
                      (filter) => filter.label === color.label
                    ) || false
                  }
                  onChange={() => handleFilterChange("colors", color)}
                />
                {color.label}
              </label>
            ))}
          </div>
        }
      />
      <DropDown_normal
        name="کشور سازنده"
        children={
          <div className="flex flex-col my-5">
            {countries.map((country) => (
              <label className="flex gap-2" key={country.id}>
                <input
                  type="checkbox"
                  checked={
                    filters.countriess
                      ? filters.countriess.some(
                          (filter) => filter.label === country.label
                        )
                      : false
                  }
                  onChange={() => handleFilterChange("countriess", country)}
                />
                {country.label}
              </label>
            ))}
          </div>
        }
      />
      <DropDown_normal
        name="جنس"
        children={
          <div className="flex flex-col my-5">
            {textures.map((texture) => (
              <label className="flex gap-2" key={texture.id}>
                <input
                  type="checkbox"
                  checked={
                    filters.textures?.some(
                      (filter) => filter.label === texture.label
                    ) || false
                  }
                  onChange={() => handleFilterChange("textures", texture)}
                />
                {texture.label}
              </label>
            ))}
          </div>
        }
      />
      <DropDown_normal
        name="نوع"
        children={
          <div className="flex flex-col my-5">
            {kinds.map((type) => (
              <label className="flex gap-2" key={type.id}>
                <input
                  type="checkbox"
                  checked={
                    filters.types?.some(
                      (filter) => filter.label === type.label
                    ) || false
                  }
                  onChange={() => handleFilterChange("types", type)}
                />
                {type.label}
              </label>
            ))}
          </div>
        }
      />
      <DropDown_normal
        name=" مورد استفاده"
        children={
          <div className="flex flex-col my-5">
            {usages.map((usages) => (
              <label className="flex gap-2" key={usages.id}>
                <input
                  type="checkbox"
                  checked={
                    filters.usagess?.some(
                      (filter) => filter.label === usages.label
                    ) || false
                  }
                  onChange={() => handleFilterChange("usagess", usages)}
                />
                {usages.label}
              </label>
            ))}
          </div>
        }
      />
      <DropDown_normal
        name="ویژگی ها"
        children={
          <div className="flex flex-col my-5">
            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={filters.featuress?.some(
                  (filter) => filter.id === "waterproof"
                )}
                onChange={() => handleFilterChange("waterproof", waterproof[0])}
              />
              {"ضدآب"}
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={filters.featuress?.some(
                  (filter) => filter.id === "water_resistance"
                )}
                onChange={() =>
                  handleFilterChange("water_resistance", water_resistance[0])
                }
              />
              {"آب گریز"}
            </label>
          </div>
        }
      />
    </Container>
  );
};

export default RightSideSearchPageeMenu;
