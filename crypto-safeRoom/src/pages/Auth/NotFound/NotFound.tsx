import { Link } from "react-router-dom";
import { Container } from "../..";
import notfoundPic from "../../../assets/img/404-error-with-landscape-concept-illustration_114360-7898.avif";

const NotFound = () => {
  return (
    <Container
      dir="ltr"
      style="rounded-lg shadow-2xl absolute inset-10 box-border z-10 bg-white max-w-screen max-h-screen overflow-x-auto"
    >
      {
        <>
          <img
            style={{ filter: "grayscale(80%)" }}
            className="absolute left-[25%] w-[50%]"
            src={notfoundPic}
            alt=""
          />
          <Link className="flex flex-col mt-[35%] ml-[40%]" to="/welcome">
            <button className="flex justify-center items-center w-64 h-10 text-white rounded-md bg-patternColors-green">
              Home Page
            </button>
          </Link>
        </>
      }
    </Container>
  );
};

export default NotFound;
