import { Link } from "react-router-dom";
const HelloHero = () => {
  const handleRoute = () => {
    <Link to="/auth" />;
  };
  return (
    <div className="z-2 absolute hero h-[70%] top-[15%] w-[500px] bg-white rounded-3xl mx-14 shadow-lg">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Welcome to</h1>
          <h1 className="text-5xl font-bold">The Safe Room</h1>
          <p className="py-6">
            This is the official website for the Crypto Safe Room Team, join us
            in this journey
          </p>
          <Link
            to="/auth/login"
            className="btn bg-patternColors-green text-white"
            onClick={handleRoute}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HelloHero;
