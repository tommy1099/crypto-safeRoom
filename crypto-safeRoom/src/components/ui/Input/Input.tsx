interface Props {
  style: string;
  placeHolder: string;
  id: string;
  type: string;
}
const Input = ({ id, style, placeHolder, type }: Props) => {
  return (
    <input
      type={type}
      id={id}
      className={style}
      placeholder={placeHolder}
    ></input>
  );
};
export default Input;
