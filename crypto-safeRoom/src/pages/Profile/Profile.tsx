import { Container } from "..";
import { NavBar, Footer, Input, Button } from "../../components/ui";
import Pic from "../../assets/img/proxy-image2.jpg";
const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="flex w-full h-[300px] bg-gray-100">
        <div className="mt-[4%] ml-[3%]">
          <span className="">
            <img
              src={Pic}
              alt="Profile picture"
              className="object-cover w-[200px] h-[200px] rounded-full"
            />
          </span>
        </div>
        <div className="ml-[2%] mt-[7%]">
          <div>
            <p className="mb-2 text-3xl">Welcome Tommy</p>
            <p>email@email.com</p>
            <p>VIP Member</p>
          </div>
          <div className="flex justify-between items-center ml-[-12%] mt-[15%]">
            <Container style="p-5 flex flex-col w-[500px] h-[400px] border-gray-200 border-2 shadow-md rounded-md">
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
            <Container style="p-5  w-[500px] h-[400px] border-gray-200 border-2 shadow-md rounded-md">
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
              className="flex gap-7 flex-col w-[500px] h-[400px]"
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
      <div className="mt-[60%]">
        <Footer />
      </div>
    </>
  );
};
export default Profile;
