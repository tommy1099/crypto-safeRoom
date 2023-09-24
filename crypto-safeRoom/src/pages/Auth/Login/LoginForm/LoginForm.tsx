import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="absolute w-0 justify-start top-[30%] left-[10%] hero bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
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
              <label className="label">
                <Link
                  to="/auth/forgot"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-patternColors-green text-white">
                Login
              </button>
            </div>
          </div>
          <div className="z-10 ml-4 mb-5 flex">
            <p className="z-10 text-gray-900">Dont have an account?</p>
            <Link to="/auth/signup">
              <line className="underline ml-2 text-gray-900 cursor-pointer">
                SignUp
              </line>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
