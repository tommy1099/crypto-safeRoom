import { Container } from "..";
import { NavBar, Footer, Input, Button } from "../../components/ui";
import Pic from "../../assets/img/proxy-image2.jpg";
import { RadialProgressBar } from "../../components/ui";
import { ScrollToTopIcon } from "../../components/forms";
const Profile = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex flex-col w-full h-[330px]">
        <div className="flex mt-[17%] ml-[4%] lg:mt-[7%] lg:ml-[2%]">
          <div className="flex z-10 w-[300px] lg:w-[500px]  ">
            <span className="">
              <img
                src={Pic}
                alt="Profile picture"
                className="object-cover w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-full"
              />
            </span>
            <div className="flex flex-col mt-[6%] lg:mt-[11%] lg:ml-[3%]">
              <p className="mb-2 lg:text-3xl">Thomas D. Aldrich</p>
              <p>email@email.com</p>
              <p>VIP Member</p>
            </div>
          </div>
          <div className="flex flex-col absolute mt-[2%] right-[5%]">
            <div className="w-[80px] h-[80px] lg:w-[150px] lg:h-[150px]">
              <RadialProgressBar value={20} />
            </div>
            <p className="lg:ml-[20%] mt-[5%]">Subscription</p>
          </div>
        </div>

        <div className="mt-[2%] p-4">
          <div className="flex flex-col gap-4 justify-between items-center lg:flex-row">
            <Container style="p-5 flex flex-col w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] border-gray-200 border-2 shadow-md rounded-md">
              <p className="text-2xl ml-[9%] mt-[5%]">All Orders</p>

              <div className="flex flex-col gap-4 p-10 text-xl mt-[5%]">
                <div className="flex justify-between items-center">
                  <p>Advanced Course</p>
                  <p>Pending</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Advanced Course</p>
                  <p>Done</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Advanced Course</p>
                  <p>Done</p>
                </div>
              </div>
            </Container>
            <Container style="p-5 w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] border-gray-200 border-2 shadow-md rounded-md">
              <p className="text-2xl ml-[9%] mt-[5%]">
                Latest Order: Advanced Course
              </p>

              <div className="flex flex-col gap-4 p-10 text-xl mt-[5%]">
                <div className="flex justify-between items-center">
                  <p>1: Order Recieved</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>2: Processing Order</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>3: Delivering to Post</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>4: Done</p>
                </div>
              </div>
            </Container>
            <form
              action="#"
              className="flex gap-7 flex-col w-[350px] lg:w-[500px] h-[400px]"
            >
              <div>
                <label className="text-xl" htmlFor="newEmail">
                  New Email
                </label>
                <Input
                  id="newEmail"
                  type="text"
                  style="h-12 w-full border border-gray-300 mt-2 rounded-md"
                  placeHolder="  new email"
                />
              </div>
              <div>
                <label className="text-xl" htmlFor="newPass">
                  New Password
                </label>
                <Input
                  id="newPass"
                  type="text"
                  style="h-12 w-full border border-gray-300 mt-2 rounded-md"
                  placeHolder="  new password"
                />
              </div>
              <div>
                <label className="text-xl" htmlFor="confirmPassword">
                  Confirm Passowrd
                </label>
                <Input
                  id="confirmPassword"
                  type="text"
                  style="h-12 w-full border border-gray-300 mt-2 rounded-md"
                  placeHolder="  confirm password"
                />
              </div>
              <Button
                onClick={() => {}}
                style="border p-2 mt-5 w-[200px] rounded-md"
              >
                Save
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-[1100px] lg:mt-[35%]">
        <Footer />
      </div>
      <div className="fixed left-0 top-[90%] m-5 ">
        <ScrollToTopIcon />
      </div>
    </div>
  );
};
export default Profile;
