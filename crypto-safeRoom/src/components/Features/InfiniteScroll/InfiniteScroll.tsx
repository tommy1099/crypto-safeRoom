import { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
  duration: number;
  reverse: boolean;
}

const InfiniteLoopSlider = ({
  children,
  duration,
  reverse = false,
}: Iprops) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

export default InfiniteLoopSlider;
