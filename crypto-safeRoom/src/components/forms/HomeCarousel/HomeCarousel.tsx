import { useEffect, useState } from "react";
import img1 from "../../../assets/img/cryptoBanner.jpg";
const HomeCarousel = () => {
  const images = [img1];
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
    <div className="mx-5 md:mx-0 h-[200px] md:h-96 md:w-full rounded-xl carousel mt-[20%] md:mt-[5%]">
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
