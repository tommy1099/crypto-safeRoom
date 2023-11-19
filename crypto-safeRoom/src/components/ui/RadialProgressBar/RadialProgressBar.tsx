import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RadialProgressProps } from "../../../../Interfaces/Interfaces.ts";

const RadialProgressBar = ({
  value,
  style,
  formatNumberToPersian,
  isFa,
}: RadialProgressProps) => {
  return (
    <CircularProgressbar
      value={value}
      maxValue={31}
      minValue={0}
      text={`${isFa ? formatNumberToPersian(`${value}`) : value}`}
      // styles={buildStyles({
      //   textColor: "#374151",
      //   pathColor: `#ee8f50`,
      // })}
      styles={buildStyles({
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
