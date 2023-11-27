import { Link } from "react-router-dom";
import { Button } from "../../ui";
const HelloHero = () => {
  return (
    <div className="z-2 absolute h-[70%] top-[15%] lg:w-[30%] bg-white rounded-3xl mx-[5%] shadow-2xl">
      <div className="text-center">
        <div className=" mt-[20%] items-center flex flex-col justify-center p-10 ">
          <h1 className="text-4xl font-bold">Welcome to</h1>
          <h1 className="text-5xl font-bold">The Safe Room</h1>
          <p className="py-6">
            This is the official website for the Crypto Safe Room Team, join us
            in this journey
          </p>
          <Link
            className="flex justify-center items-center lg:mt-[25%]"
            to="/auth/login"
          >
            <Button
              onClick={() => {}}
              style="rounded-md bg-patternColors-green text-white h-10 w-26 p-5 items-center justify-center flex"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HelloHero;
