import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar bg-base-100 z-20 sticky rounded-xl shadow-xl top-0">
      <div className="flex-1">
        <Link to="/welcome" className="cursor-pointer ml-5 font-bold text-xl">
          Crypto Safe Room
        </Link>
      </div>
      <div className="hidden lg:flex left-[40%] right-[40%] gap-10 cursor-pointer">
        <Link to="/signals">
          <p>Signals</p>
        </Link>
        <Link to="/welcome">
          <p>News</p>
        </Link>
        <Link to="/welcome">
          <p>Tutorials</p>
        </Link>
        <Link to="/welcome">
          <p>Products</p>
        </Link>
        <Link to="/welcome">
          <p>Events</p>
        </Link>
      </div>
      <div className="ml-10 flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="">
            <div className="cursor-pointer indicator mr-5 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </label>

          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">0 Items</span>
              <span className="text-patternColors-red">Subtotal: $0</span>
              <div className="card-actions">
                <button className="btn btn-accent btn-block text-black">
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                  <span className="text-2xl">T</span>
                </div>
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content mt-3 z-11 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                {/* <span className="badge">New</span> */}
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
