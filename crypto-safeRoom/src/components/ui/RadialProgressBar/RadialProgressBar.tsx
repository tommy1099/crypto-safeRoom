import { PropsWithChildren } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
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
    />
  );
};
export { RadialProgressBar };
