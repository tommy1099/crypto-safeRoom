interface Props extends React.PropsWithChildren {
  style: string;
}
const Container = ({ children, style }: Props) => {
  return <div className={style}>{children}</div>;
};
export default Container;
