import Container from "../Container/Container";
import FeatureCard from "./FeatereCard";
import { LuRefreshCcw } from "react-icons/lu";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
interface IFeatures {
  place: string;
}
const FeaturesSection = ({ place }: IFeatures) => {
  return (
    <Container
      dir="ltr"
      style={`flex justify-center ${
        place === "product" ? "bg-base-100" : "md:w-[70%] "
      } items-center w-screen h-full rounded-xl gap-4 py-6`}
    >
      <div
        className={`flex flex-col  ${
          place == "product" && "md:flex-row "
        } gap-4`}
      >
        {/* Feature 1 */}
        <FeatureCard
          place={place}
          icon={<LuRefreshCcw />}
          title="تعویض سایز"
          description="با خیال راحت خرید کنید"
        />
        {/* Feature 2 */}
        <FeatureCard
          place={place}
          icon={<VscWorkspaceTrusted />}
          title="گارانتی"
          description="اصالت و سلامت فیزیکی کالا"
        />
        {/* Feature 3 */}
        <FeatureCard
          place={place}
          icon={<FaShippingFast />}
          title="ارسال سریع"
          description="تیپاکس + پست پیشتاز"
        />
      </div>
      <div
        className={`flex flex-col  ${
          place == "product" && "md:flex-row "
        }  gap-4`}
      >
        {/* Feature 4 */}
        <FeatureCard
          place={place}
          icon={<TbTruckReturn />}
          title="ضمانت بازگشت"
          description="امکان مرجوعی کالا تا 7 روز"
        />
        {/* Feature 5 */}
        <FeatureCard
          place={place}
          icon={<FaPercent />}
          title="تخفیف خرید اول"
          description="کد: first"
        />
        {/* Feature 6 */}
        <FeatureCard
          place={place}
          icon={<MdOutlineSupportAgent />}
          title="پشتیبانی 24/7"
          description="تیم ما آماده ی پاسخگویی هستند"
        />
      </div>
    </Container>
  );
};

export default FeaturesSection;
