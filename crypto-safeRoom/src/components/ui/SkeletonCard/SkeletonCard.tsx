import { Skeleton } from "@/components/ui/skeleton";
const SkeletonCard = () => {
  return (
    <div dir="ltr" className="flex flex-col space-y-3">
      <Skeleton className="h-[250px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-[200px]" />
      </div>
    </div>
  );
};

export default SkeletonCard;
