import { ReactNode } from "react";

interface Porps {
  children: ReactNode;
}
const Shape = ({ children }: Porps) => {
  return (
    <div className="box-border sm:z-1 hidden lg:flex fixed top-0 right-0 h-screen sm:w-[220px] md:w-96 lg:w-screen bg-patternColors-green [clip-path:circle(64.5%_at_91%_53%)] overflow-hidden">
      <div className="flex flex-col items-start ml-[40%] mt-64">{children}</div>
    </div>
  );
};
export default Shape;
