import { useEffect, useState } from "react";
import img2 from "../../../assets/img/hero/173011194_10140022.jpeg";
import img3 from "../../../assets/img/hero/22378717_6558730.jpeg";
import img4 from "../../../assets/img/hero/girl-enjoying-holidays-got-super-cool-present-cheerful-upbeat-goodlooking-redhead-woman-yello_1258-126377.jpg";
import img5 from "../../../assets/img/hero/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-126800.jpg";

const HomeCarousel = () => {
  const images = [img2, img3, img4, img5];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change 5000 to the desired time interval in milliseconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className=" md:mx-0 h-[200px] md:h-96 w-full carousel mt-[65px]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative w-full carousel-item  ${
            index === currentSlide ? "visible" : "hidden"
          }`}
        >
          <img src={image} className="object-cover w-full" />
          <div className="flex absolute right-5 left-5 top-1/2 justify-between transform -translate-y-1/2">
            <a
              href={`#slide${index === 0 ? images.length : index}`}
              className="btn btn-circle"
              onClick={() =>
                goToSlide((index - 1 + images.length) % images.length)
              }
            >
              ❮
            </a>
            <a
              href={`#slide${(index + 2) % (images.length + 1)}`}
              className="btn btn-circle"
              onClick={() => goToSlide((index + 1) % images.length)}
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HomeCarousel;
