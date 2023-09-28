interface Props extends React.PropsWithChildren {
  blur: boolean;
  id: number;
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
const Card = ({ blur, title, desc, src, tags }: Props) => {
  return (
    <div className="hover:border-green-300 border-2 rounded-2xl m-3">
      <div
        className={`${
          blur ? " grayscale-[100%]" : ""
        } hover:cursor-pointer mb-[10%] card h-full w-full bg-base-100 image-full hover:shadow-xl z-10`}
      >
        <figure>
          <img src={src} alt="Signal" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{title}</h2>
          <div className="my-[5%]">
            <p className="text-white">{desc.desc1}</p>
            <p className="text-white">{desc.desc2}</p>
            <p className="text-white">{desc.desc3}</p>
          </div>

          <div className="ard-actions justify-end">
            <div className=" badge badge-outline ">{tags.tag1}</div>
            <div className="ml-2 badge badge-outline text-white">
              {tags.tag2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
