import { ReactNode } from "react";

interface Props {
  style: string;
  children: ReactNode;
  onClick?: () => void;
  onClickWithEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({ children, style, onClick, onClickWithEvent }: Props) => {
  return (
    <button onClick={onClickWithEvent || onClick} className={style}>
      {children}
    </button>
  );
};
export default Button;
