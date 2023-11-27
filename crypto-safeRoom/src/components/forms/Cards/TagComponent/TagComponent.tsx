import { TagsProps } from "../../../../Interfaces/Interfaces.ts";
import { BiLineChartDown } from "react-icons/bi";
import { BsSignStop } from "react-icons/bs";

const TagsComponent = ({
  tags,
  user,
  vip,
  blur,
  t,
  formatNumberToPersian,
  isFa,
  type,
}: TagsProps) => {
  const tagClassName =
    type === "signals" ? "flex flex-col" : "text-xs text-black min-h-[20px]";
  return (
    <div className={`flex gap-0 p-1 card-actions ${tagClassName}`}>
      {tags && tags.tag1 && (
        <div className="flex gap-1 items-center">
          <div
            className={`${
              user.plan.type !== "VIP" && vip && !blur
                ? "opacity-0"
                : "text-red-700"
            }`}
          >
            <BsSignStop />
          </div>
          <div className="text-[14px]">
            {type === "signals"
              ? `${t("stop")}%${
                  isFa ? formatNumberToPersian(Number(tags.tag1)) : tags.tag1
                }`
              : `${tags.tag1}`}
          </div>
        </div>
      )}
      {tags && tags.tag2 && (
        <div className="flex gap-1 items-center">
          <div
            className={`${
              user.plan.type !== "VIP" && vip && !blur
                ? "opacity-0"
                : "text-blue-700"
            }`}
          >
            <BiLineChartDown />
          </div>
          <div className="text-[14px]">
            {t("sl")} {tags.tag2}
          </div>
        </div>
      )}
      {tags && tags.tag3 && <div>{tags.tag3}</div>}
      {tags && tags.tag4 && <div>{tags.tag4}</div>}
    </div>
  );
};
export default TagsComponent;
