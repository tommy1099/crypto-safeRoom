import backgroundImg from "../../../assets/img/cryptocurrency-financial-items-seamless-pattern-vector-background_153454-5871.jpg";
const BackgroundPattern = () => {
  return (
    <div
      className=" absolute w-screen h-screen"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        filter: "grayscale(80%)",
      }}
    ></div>
  );
};
export default BackgroundPattern;
