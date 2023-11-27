import { NavBar } from "../../components/ui";
import { Container } from "..";
import { ContactForm } from "../../components/forms";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Container
        dir="ltr"
        style="rounded-lg shadow-2xl absolute inset-10 box-border z-10 bg-white max-w-screen max-h-screen overflow-x-auto"
      >
        {
          <>
            <ContactForm />
            <div className="hidden xl:flex items-center justify-center ml-[20%] mt-[-10%]">
              <div className="hidden w-[50%] h-10 lg:flex flex-col justify-center z-20 font-bold gap-4">
                <p className="text-3xl xl:text-6xl">Contact us via this form</p>
                <p className="text-xl  xl:text-3xl">
                  Let us know what you think
                </p>
              </div>
            </div>
          </>
        }
      </Container>
    </>
  );
};
export default Contact;
