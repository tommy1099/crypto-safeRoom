interface Props extends React.PropsWithChildren {
  id?: number;
  title: string;
  desc: string;
  src: string;
  tags: {
    tag1: string;
    tag2: string;
    tag3: string;
    tag4: string;
  };
}
const NewsCard = ({ title, desc, src, tags }: Props) => {
  return (
    <div className="border-gray-800 hover:border-pink-200 border-2 rounded-2xl m-3 shadow-md">
      <div
        className={` hover:cursor-pointer mb-[10%] card h-full w-full bg-base-100 hover:shadow-xl z-10`}
      >
        <figure>
          <img src={src} alt="Signal" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="my-[5%]">
            <p className="">{desc}</p>
          </div>

          <div className="card-actions justify-end">
            <div className=" badge badge-outline ">{tags.tag1}</div>
            <div className=" badge badge-outline ">{tags.tag2}</div>
            <div className="badge badge-outline">{tags.tag3}</div>
            <div className="badge badge-outline">{tags.tag4}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
