import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../../pages";
import { Input, Button } from "../../ui";
// import { PasswordInput } from "../../../../components/forms"; //hide and show password

const ContactForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Container style=" relative w-[400px] h-[550px] fixed left-[10%] sm:left-[15%] md:left-[20%] lg:left-[10%] lg:top-[10%] shadow-2xl p-10 flex flex-col justify-center items-start rounded-lg">
      <div className="ml-[11%] w-full h-24 flex items-center my-[10%]">
        <p className="text-3xl font-bold text-patternColors-green">
          Crypto Safe Room
        </p>
      </div>

      <form
        className="flex flex-col gap-5 w-full"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="">
          <label htmlFor="title">Title</label>
          <Input
            type="text"
            id="title"
            style="w-full h-10 border-2 border-gra-300 rounded-md"
            placeHolder="title"
          />
        </div>
        <div className="">
          <label htmlFor="subject">Subject</label>
          <Input
            type="text"
            id="subject"
            style="w-full h-10 border-2 border-gra-300 rounded-md"
            placeHolder="subject"
          />
        </div>
        <div>
          <label className="left-0" htmlFor="password">
            Write you opinion down below
          </label>
          <textarea
            id="textarea"
            className="w-full h-10 border-2 border-gra-300 rounded-md"
          />
          {/* <PasswordInput /> */}
        </div>
        <Link to="/home" className="flex items-center justify-center mt-5">
          <Button style=" w-24 h-10 border-box bg-patternColors-green text-white rounded-md">
            Submit
          </Button>
        </Link>
      </form>
    </Container>
  );
};

export default ContactForm;
