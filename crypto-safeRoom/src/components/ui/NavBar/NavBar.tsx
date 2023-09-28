import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    // <div className="navbar bg-base-100 z-20 sticky rounded-xl shadow-xl top-0">
    //   <div className="flex-1">
    //     <Link to="/welcome" className="cursor-pointer ml-5 font-bold text-xl">
    //       Crypto Safe Room
    //     </Link>
    //   </div>
    //   <div className="hidden lg:flex left-[40%] right-[40%] gap-10 cursor-pointer">
    //     <Link to="/signals">
    //       <p>Signals</p>
    //     </Link>
    //     <Link to="/welcome">
    //       <p>News</p>
    //     </Link>
    //     <Link to="/welcome">
    //       <p>Tutorials</p>
    //     </Link>
    //     <Link to="/welcome">
    //       <p>Products</p>
    //     </Link>
    //     <Link to="/welcome">
    //       <p>Events</p>
    //     </Link>
    //   </div>
    //   <div className="ml-10 flex-none">
    //     <div className="dropdown dropdown-end">
    //       <label tabIndex={0} className="">
    //         <div className="cursor-pointer indicator mr-5 mt-2">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-7 w-7"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    //             />
    //           </svg>
    //           <span className="badge badge-sm indicator-item">0</span>
    //         </div>
    //       </label>

    //       <div
    //         tabIndex={0}
    //         className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
    //       >
    //         <div className="card-body">
    //           <span className="font-bold text-lg">0 Items</span>
    //           <span className="text-patternColors-red">Subtotal: $0</span>
    //           <div className="card-actions">
    //             <button className="btn btn-accent btn-block text-black">
    //               View cart
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="dropdown dropdown-end ">
    //       <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    //         <div className="w-10 rounded-full">
    //           <div className="avatar placeholder">
    //             <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
    //               <span className="text-2xl">T</span>
    //             </div>
    //           </div>
    //         </div>
    //       </label>
    //       <ul
    //         tabIndex={0}
    //         className=" menu menu-sm dropdown-content mt-3 z-11 p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         <li>
    //           <a className="justify-between">
    //             Profile
    //             {/* <span className="badge">New</span> */}
    //           </a>
    //         </li>
    //         <li>
    //           <a>Settings</a>
    //         </li>
    //         <li>
    //           <Link to="/auth/login">Login</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="z-20 drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar shadow-xl rounde-md">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link className="cursor-pointer flex-1 px-2 mx-2" to="home">
            <div>Crypto Safe Room</div>
          </Link>
          <div className="flex-none hidden lg:block">
            <ul className="mt-2 menu menu-horizontal p-0">
              <li>
                <Link to="/signals">
                  <p>Signals</p>
                </Link>
              </li>
              <li>
                <Link to="/welcome">
                  <p>News</p>
                </Link>
              </li>
              <li>
                <Link to="/welcome">
                  <p>Tutorial</p>
                </Link>
              </li>
              <li>
                <Link to="/welcome">
                  <p>Products</p>
                </Link>
              </li>
              <li>
                <Link to="/welcome">
                  <p>Events</p>
                </Link>
              </li>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="mr-3 -mt-1 btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                    <span className="badge badge-sm indicator-item ">8</span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar -mt-1"
                >
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
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <Link to="/signals">
              <p>Signals</p>
            </Link>
          </li>
          <li>
            <Link to="/welcome">
              <p>News</p>
            </Link>
          </li>
          <li>
            <Link to="/welcome">
              <p>Tutorial</p>
            </Link>
          </li>
          <li>
            <Link to="/welcome">
              <p>Products</p>
            </Link>
          </li>
          <li>
            <Link to="/welcome">
              <p>Events</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
