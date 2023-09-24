import { ReactNode } from "react";

interface Porps {
  children: ReactNode;
}
const Shape = ({ children }: Porps) => {
  return (
    <div className="z-20 hidden sm:flex fixed top-0 right-0 h-screen sm:w-[220px] md:w-96 lg:w-screen bg-gradient-to-r from-gray-500 to-gray-900 [clip-path:circle(64.5%_at_91%_53%)] overflow-hidden">
      <div className="flex flex-col items-start ml-[40%] mt-64">{children}</div>
    </div>
  );
};
export default Shape;
