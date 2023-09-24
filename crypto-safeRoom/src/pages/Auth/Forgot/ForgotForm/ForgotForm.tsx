const ForgotForm = () => {
  return (
    <div className="absolute w-0 justify-start top-[35%] left-[10%] hero bg-base-100">
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
            <div className="form-control mt-6">
              <button className="btn bg-patternColors-green text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotForm;
