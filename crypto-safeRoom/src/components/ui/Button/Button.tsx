import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  style: string;
}
const Button = ({ children, style }: Props) => {
  return <button className={style}>{children}</button>;
};
export default Button;
