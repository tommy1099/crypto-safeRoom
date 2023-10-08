import { ReactNode } from "react";

interface Props {
  style: string;
  children: ReactNode;
  onClick: () => void;
}
const Button = ({ children, style, onClick }: Props) => {
  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  );
};
export default Button;
