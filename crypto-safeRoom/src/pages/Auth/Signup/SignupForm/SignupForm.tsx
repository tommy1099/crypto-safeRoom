import { Link } from "react-router-dom";
const SignupForm = () => {
  return (
    <div className="absolute w-0 justify-start top-[30%] left-[10%] hero bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-patternColors-green text-white">
                Login
              </button>
            </div>
          </div>
          <div className="z-10 ml-[13%] mb-[10%] flex">
            <p className="z-10 text-gray-900">Already have an account?</p>
            <Link to="/auth/login">
              <line className="underline ml-2 text-patternColors-red cursor-pointer">
                Login
              </line>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
