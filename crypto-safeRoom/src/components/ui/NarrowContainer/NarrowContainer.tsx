import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  style: string;
}
const NarrowContainer = ({ style, children }: Props) => {
  return <div className={style}>{children}</div>;
};
export default NarrowContainer;
