import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RadialProgressProps } from "../../../Interfaces/Interfaces.ts";

const RadialProgressBar = ({
  value,
  style,
  formatNumberToPersian,
  isFa,
  maxValue,
  textSize,
  type,
}: RadialProgressProps) => {
  // const minutes = Math.floor(milliseconds / 60000);
  return (
    <CircularProgressbar
      value={value}
      maxValue={maxValue}
      minValue={0}
      text={`${
        isFa
          ? formatNumberToPersian(
              `${type === "paymentTimeout" ? Math.floor(value / 60) : value}`
            )
          : type === "paymentTimeout"
          ? Math.floor(value / 60)
          : value
      } ${type === "paymentTimeout" ? "m" : ""}`}
      // styles={buildStyles({
      //   textColor: "#374151",
      //   pathColor: `#ee8f50`,
      // })}
      styles={buildStyles({
        textSize: `${textSize}`,
        textColor: `${style.textColor}`,
        pathColor: `${style.pathColor}`,
        trailColor: `${style.trailColor}`,
      })}
    />
    // <div
    //   className="text-6xl radial-progress text-primary"
    //   style={{ "--value": value, "--size": "10rem" }}
    // >
    //   {value}
    // </div>
  );
};
export { RadialProgressBar };
