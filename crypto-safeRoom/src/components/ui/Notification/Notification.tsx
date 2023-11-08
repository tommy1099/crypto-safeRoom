const Notification = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-right">
      {" "}
      <button
        tabIndex={0}
        className="btn btn-ghost btn-circle hover:bg-base-100"
      >
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="badge badge-xs badge-primary indicator-item" />
        </div>
      </button>
      {/* <label tabIndex={0} className="m-1 btn">
        Click
      </label> */}
      <ul
        tabIndex={0}
        className="dropdown-content block z-[1] menu p-2 shadow bg-base-100 rounded-box w-[300px] overflow-y-auto h-[400px]"
      >
        <li>
          <a>
            Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item
            1Item 1Item 1Item 1Item 1
          </a>
        </li>
        <li>
          <a>
            Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item
            1Item 1Item 1Item 1Item 1
          </a>
        </li>
        <li>
          <a>
            Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item
            1Item 1Item 1Item 1Item 1
          </a>
        </li>
        <li>
          <a>
            Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item
            1Item 1Item 1Item 1Item 1
          </a>
        </li>
        <li>
          <a>
            Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item
            1Item 1Item 1Item 1Item 1
          </a>
        </li>
        <li>
          <a>
            Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item
            1Item 1Item 1Item 1Item 1
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Notification;
