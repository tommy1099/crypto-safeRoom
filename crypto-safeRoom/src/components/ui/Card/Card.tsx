import { useEffect, useState } from "react";

interface Props extends React.PropsWithChildren {
  expire: number;
  title: string;
  desc: {
    desc1: string;
    desc2: string;
    desc3: string;
  };
  src: string;
  tags: {
    tag1: string;
    tag2: string;
  };
}
const Card = ({ title, desc, src, tags, expire }: Props) => {
  const [showDiv, setShowDiv] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDiv(false);
    }, expire);
    {
      /*14400*/
    }
    return () => {
      clearTimeout(timeoutId);
    };
  });
  return (
    <div className="cursor-pointer mb-[10%] card w-[80%] bg-base-100 image-full hover:shadow-2xl z-10">
      <figure>
        <img src={src} alt="Signal" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div>
            {showDiv && (
              <div id="rmDiv" className="badge badge-secondary">
                NEW
              </div>
            )}
          </div>
        </h2>
        <div className="my-[5%]">
          <p>{desc.desc1}</p>
          <p>{desc.desc2}</p>
          <p>{desc.desc3}</p>
        </div>

        <div className="ard-actions justify-end">
          <div className=" badge badge-outline">{tags.tag1}</div>
          <div className="ml-2 badge badge-outline">{tags.tag2}</div>
        </div>
        {/* <div className="card-actions justify-center">
          <button className="z-1 btn btn-accent w-[%]">Show More</button>
        </div> */}
      </div>
    </div>
  );
};
export default Card;
