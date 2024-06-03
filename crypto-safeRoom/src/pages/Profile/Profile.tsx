import { Container } from "..";
import { ScrollToTopIcon } from "../../components/forms";
import { Footer, NavBar } from "../../components/ui";
import RightSideProfileMenu from "./RightSideSearchPageeMenu";

const Profile = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex justify-center gap-4 mt-[10%]">
        <div className="flex flex-col w-[60%] gap-4">
          <Container
            dir=""
            style="border-2 bg-gray-100 rounded-md border-slate-500 w-full h-52"
          ></Container>
          <div className="flex gap-4">
            <Container
              dir=""
              style="border-2 bg-gray-100 rounded-md border-slate-500 w-1/2 h-[400px]"
            ></Container>
            <Container
              dir=""
              style="border-2 bg-gray-100 rounded-md border-slate-500 w-1/2 h-[400px]"
            ></Container>
          </div>
          <Container
            dir=""
            style="border-2 bg-gray-100 rounded-md border-slate-500 h-[400px]"
          ></Container>
        </div>

        {/* <RightSideProfileMenu /> */}
      </div>
      <div className="w-screen">
        <Footer />
      </div>
      <div className="fixed left-4 bottom-4">
        {" "}
        <ScrollToTopIcon />
      </div>
    </div>
  );
};
export default Profile;
