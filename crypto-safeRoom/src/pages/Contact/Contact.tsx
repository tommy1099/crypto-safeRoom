import { Footer, NavBar } from "../../components/ui";
import { Container } from "..";
import { ContactForm } from "../../components/forms";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Container style="rounded-lg shadow-2xl absolute inset-10 box-border z-10 bg-white max-w-screen max-h-screen overflow-x-auto">
        {
          <>
            <ContactForm style="absolute justify-start w-[350px] top-[10%] left-[10%] hero" />
            <div className="hidden w-[50%] h-32 lg:flex flex-col justify-start items-center ml-[35%] mt-[15%] font-bold gap-4">
              <p className="text-3xl xl:text-6xl">Contact us via this form</p>
              <p className=" text-xl xl:text-3xl">Let us know what you think</p>
            </div>
          </>
        }
        <Footer />
      </Container>
    </>
  );
};
export default Contact;
