import { PropsWithChildren } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props extends PropsWithChildren {
  value: number;
}
const RadialProgressBar = ({ value }: Props) => {
  return (
    <CircularProgressbar
      value={value}
      maxValue={31}
      minValue={0}
      text={`${value}/31`}
      styles={buildStyles({
        textColor: "#374151",
        pathColor: `#ee8f50`,
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
