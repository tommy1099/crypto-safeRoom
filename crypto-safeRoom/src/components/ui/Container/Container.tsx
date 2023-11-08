interface Props extends React.PropsWithChildren {
  style: string;
  dir: string;
}
const Container = ({ children, style, dir }: Props) => {
  return (
    <div dir={dir} className={style}>
      {children}
    </div>
  );
};
export default Container;
