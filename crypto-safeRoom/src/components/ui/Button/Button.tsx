import { ReactNode } from "react";

interface Props {
  style: string;
  children: ReactNode;
}
const Button = ({ children, style }: Props) => {
  return <button className={style}>{children}</button>;
};
export default Button;
