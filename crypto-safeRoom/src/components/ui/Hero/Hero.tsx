import { HeroProps } from "../../../Interfaces/Interfaces";
const Hero = ({ section1, section2, isFa }: HeroProps) => {
  return (
    <div
      dir={isFa ? "rtl" : "ltr"}
      className="h-[500px] flex items-center justify-start mt-[60px] hero bg-base-100 z-[2]"
    >
      <div className="mx-[5%] text-start hero-content">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-neutral">{section1}</h1>
          <p className="py-6 text-neutral">{section2}</p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};
export default Hero;
