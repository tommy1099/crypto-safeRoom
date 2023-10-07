// import React, { useState, useEffect } from "react";
import { NavBar, Footer } from "../../ui";
import { Container } from "../../../pages";

interface GoogleFormProps {
  src: string;
  width: number;
  height: number;
}

const Exam: React.FC<GoogleFormProps> = ({ src, width, height }) => {
  return (
    <>
      <NavBar />
      <Container style="bg-white flex justify-center mt-[130px] mb-[100px] z-0 ">
        <iframe
          src={src}
          width={width}
          height={height}
          className="overflow-y-hidden bg-white"
        />
      </Container>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Exam;
