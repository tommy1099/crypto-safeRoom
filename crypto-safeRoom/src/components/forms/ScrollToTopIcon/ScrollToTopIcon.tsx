import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
// import { classNames } from '/utils';
import { Button } from "../../ui";
const ScrollToTopIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = (): void => {
    const win: Window & typeof globalThis = window;
    if (win.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  const returnStyle = () => {
    return `    'inline-flex items-center p-3 text-white bg-pink-600 rounded-full shadow-sm transition-opacity hover:bg-pink-700 focus:ring-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
    ${isVisible ? "opacity-100" : "opacity-0"}`;
  };
  return (
    <Button onClick={scrollToTop} style={returnStyle()}>
      <BiArrowFromBottom
        className="w-6 h-6 animate-bounce"
        aria-hidden="true"
      />
    </Button>
  );
};

export default ScrollToTopIcon;
