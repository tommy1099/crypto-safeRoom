import * as React from "react";

interface IAskedQuestionsProps {
  question: string;
  answer: string;
}

export const AskedQuestions = ({ question, answer }: IAskedQuestionsProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <></>;
};
