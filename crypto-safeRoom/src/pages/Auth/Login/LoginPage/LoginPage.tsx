import LoginForm from "../LoginForm/LoginForm";
import { Shape } from "../../../../components/ui";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex">
      <LoginForm />

      <Link to="/welcome">
        <BsFillArrowLeftSquareFill
          style={{
            color: "#5B6A6E",
            top: "50%",
            left: "2%",
            position: "fixed",
            fontSize: "40px",
            cursor: "pointer",
          }}
        />
      </Link>
      <Shape
        children={
          <div className="md:p-22 md:py-12 lg:px-28 lg:py-20">
            <h1 className="font-bold text-white text-5xl">Login now</h1>
            <p className="py-6 text-white">
              Rest assured your information will be safe with us, and we won't
              share your credentials with anyone
            </p>
          </div>
        }
      />
    </div>
  );
};
export default LoginPage;
