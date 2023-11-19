import { PropsWithChildren } from "react";
import { RootState } from "../../../Store/Store";
import { useSelector } from "react-redux";

interface Props extends PropsWithChildren {
  options: { question: string; answer: string }[];
}

const Accordion = ({ options }: Props) => {
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);

  return (
    <>
      {options.map((option, index) => (
        <div
          key={index}
          className={`collapse w-[90%] md:w-[50%] border-2 border-primary mb-5 z-[2] collapse-arrow bg-${
            isDarkTheme ? "[2c2c2c]" : "base-100"
          }`}
        >
          <input type="radio" name={`my-accordion-2`} />
          <div className="text-xl font-medium text-neutral collapse-title">
            {option.question}
          </div>
          <div className="text-sm collapse-content text-neutral">
            {option.answer}
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
