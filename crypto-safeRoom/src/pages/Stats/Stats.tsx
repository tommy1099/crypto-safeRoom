import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import StatsVisualizer from "../../components/forms/StatsVisualizer/StatsVisualizer";
import { Footer, NavBar } from "../../components/ui";
import { ScrollToTopIcon } from "../../components/forms";
import { useTranslation } from "react-i18next";
// import { useEffect } from "react";

const Stats = () => {
  const allSignalsList = useSelector(
    (state: RootState) => state.allSignals.allSignals
  );
  const { t } = useTranslation();
  // useEffect(() => {
  //   console.log("signals for stats:", allSignalsList);
  // }, []);
  return (
    <div className="overflow-y-auto">
      <NavBar />
      <span className="flex lg:flex-row flex-col justify-center items-center bg-primary mb-[270px] rounded-b-[50px]">
        <span className="flex my-[15%] flex-col gap-10 p-8 ">
          <div>
            <StatsVisualizer type="type1" signals={allSignalsList} />
          </div>
          <div>
            <StatsVisualizer type="type2" signals={allSignalsList} />
          </div>
        </span>
        <div className="text-3xl md:text-5xl p-10 text-[#212121]">
          <p className="mb-5">{t("statsSoFar")}</p>
          <p>{t("transparency")}</p>
        </div>
      </span>
      <div className="">
        <Footer />
      </div>
      <div className="fixed left-0 top-[90%] m-5 ">
        <ScrollToTopIcon />
      </div>
    </div>
  );
};
export default Stats;
