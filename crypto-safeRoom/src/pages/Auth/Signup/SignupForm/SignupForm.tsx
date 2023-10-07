import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../..";
import { Input, Button } from "../../../../components/ui";
// import { PasswordInput } from "../../../../components/forms"; //hide and show password

const SignupForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Container style=" absolute w-[400px] h-[550px] fixed left-[5px] sm:left-[15%] md:left-[20%] lg:left-[7%] shadow-2xl p-10 flex flex-col justify-center items-start rounded-lg">
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
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            id="username"
            style="w-full h-10 border-2 border-gra-300 rounded-md"
            placeHolder="username"
          />
        </div>
        <div className="">
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            id="email"
            style="w-full h-10 border-2 border-gra-300 rounded-md"
            placeHolder="email"
          />
        </div>
        <div>
          <label className="left-0" htmlFor="password">
            Password
          </label>
          <Input
            type="password"
            id="password"
            style="w-full h-10 border-2 border-gra-300 rounded-md"
            placeHolder="password"
          />
          {/* <PasswordInput /> */}
        </div>
        <div className="flex items-center justify-center mt-10">
          <Button style=" w-24 h-10 border-box bg-patternColors-green text-white rounded-md">
            Signup
          </Button>
        </div>
      </form>
      <div className="flex text-sm gap-1 my-[5%] ml-[17%]">
        <p>Already have an account?</p>
        <Link className="hover:underline cursor-pointer" to="/auth/login">
          <p className="text-patternColors-red">Login</p>
        </Link>
      </div>
    </Container>
  );
};

export default SignupForm;
