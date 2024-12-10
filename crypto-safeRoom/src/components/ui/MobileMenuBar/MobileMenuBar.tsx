import { CgGhostCharacter } from "react-icons/cg";
import { BiCategory } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
const MobileMenuBar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-16 fixed items-center text-center z-[1] bottom-0 w-screen bg-base-100 border-t shadow-md flex justify-between px-5">
      <div
        onClick={() => navigate("/profile")}
        className="flex flex-col  items-center "
      >
        <div className="text-[25px]">
          <CgGhostCharacter />
        </div>
        <div className="text-sm">پروفایل</div>
      </div>

      <div
        onClick={() => navigate("/checkout")}
        className="flex flex-col items-center "
      >
        <div className="text-[25px]">
          <IoCartOutline />
        </div>
        <div className="text-sm">سبد خرید</div>
      </div>
      <div onClick={() => {}} className="flex flex-col items-center ">
        <div className="text-[25px]">
          <BiCategory />
        </div>
        <div className="text-sm">دسته بندی</div>
      </div>
      <div
        onClick={() => navigate("/")}
        className="flex flex-col items-center "
      >
        <div className="text-[25px]">
          <IoHomeOutline />{" "}
        </div>
        <div className="text-sm">خانه</div>
      </div>
    </div>
  );
};
export default MobileMenuBar;
