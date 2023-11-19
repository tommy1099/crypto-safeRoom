import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../../Store/Store";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { PiMathOperationsBold } from "react-icons/pi";
import { AiFillExclamationCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { formatNumberToPersian } from "../../../utils/NumberToFarsi/NumberToFarsi";
import {
  successfulSignal,
  failedSignal,
  reset,
} from "../../../Store/SignalStatsTracker";
interface Props {
  signals: NewItem[];
  type: string;
}
interface NewItem {
  id: string;
  img: string;
  crypto: string;
  desc: {
    desc1: string;
    desc2: string;
    desc3: string;
  };
  tags: {
    tag1: string;
    tag2: string;
  };
  vip: boolean;
  blur: boolean;
  state: boolean;
  tp: {
    tp1: boolean;
    tp2: boolean;
    tp3: boolean;
  };
}
const StatsVisualizer = ({ signals, type }: Props) => {
  const isFa = useSelector((state: RootState) => state.lang.isFa);

  const { t } = useTranslation();
  const [profit, setProfit] = useState(0);
  const [loss, setLoss] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const stats = useSelector((state: RootState) => state.statsTracker.statsObj);

  // console.log("stats:", stats);
  // Calculate the ratio of successful to failed data points
  const calculateRatio = (successful: number, failed: number) => {
    if (failed === 0) {
      return successful > 0 ? 100 : 0;
    }
    const ratio = (successful / (successful + failed)) * 100;
    return parseFloat(ratio.toFixed(0));
  };

  const ratio = calculateRatio(stats.successful, stats.failed);

  // const tpSignals = signals.forEach((signal: NewItem)=>{
  //   signal.
  // })

  useEffect(() => {
    const handler = () => {
      dispatch(reset());
      signals.forEach((elm: NewItem) => {
        if (elm.blur && elm.state) dispatch(successfulSignal());
        else if (elm.blur && !elm.state) {
          dispatch(failedSignal());
        }
      });
    };
    const handlePercents = () => {
      setProfit(0);
      setLoss(0);
      signals
        .filter((component: NewItem) => component.blur) // Filter based on component.state being true
        .map((component) => {
          let profitToAdd = 0;
          if (component.tp.tp1) {
            profitToAdd += Number(component.desc.desc1);
          }
          if (component.tp.tp2) {
            profitToAdd += Number(component.desc.desc2);
          }
          if (component.tp.tp3) {
            profitToAdd += Number(component.desc.desc3);
          }
          setProfit((prev) => prev + profitToAdd);
          // setLoss((prev) => prev + Number(component.tags.tag1));
        });
      signals
        .filter((component: NewItem) => component.blur && !component.state) // Filter based on component.state being true
        .map((component) => {
          setLoss((prev) => prev + Number(component.tags.tag1));
          // setLoss((prev) => prev + Number(component.tags.tag1));
        });
      setTotalProfit(profit - loss);
      setTotal(profit + loss);
    };

    handlePercents();
    handler();
  }, [dispatch, loss, profit, signals]);
  return (
    <div className="stats stats-vertical md:stats-horizontal">
      <div className="flex justify-between items-center stat">
        <div>
          <div className="stat-title">
            {type === "type1" ? t("total") : t("totalNumbers")}
          </div>
          <div className="stat-value text-neutral">
            {isFa
              ? formatNumberToPersian(type === "type1" ? stats.all : total)
              : type === "type1"
              ? stats.all
              : total}
            {type === "type1" ? "" : "%"}
          </div>
          <div className="stat-desc">
            {type === "type1" ? t("underTotal") : t("underTotalNumbers")}
          </div>
        </div>
        <div className="mt-3 text-3xl stat-figure text-primary">
          <AiFillExclamationCircle />
        </div>
      </div>

      <div className="flex justify-between items-center stat">
        <div>
          <div className="stat-title">
            {type === "type1" ? t("successful") : t("profit")}
          </div>
          <div className="stat-value text-neutral">
            {isFa
              ? formatNumberToPersian(
                  type === "type1" ? stats.successful : profit
                )
              : type === "type1"
              ? stats.successful
              : profit}
            {type === "type1" ? "" : "%"}
          </div>
          <div className="stat-desc">{`${
            type === "type1" ? t("undersuccessful") : t("underProfit")
          }`}</div>
        </div>

        <div className="mt-3 text-3xl stat-figure text-primary">
          <IoMdCheckmarkCircle />
        </div>
      </div>

      <div className="flex justify-between items-center stat">
        <div>
          <div className="stat-title">
            {type === "type1" ? t("failed") : t("loss")}
          </div>
          <div className="stat-value text-neutral">
            {isFa
              ? formatNumberToPersian(type === "type1" ? stats.failed : loss)
              : type === "type1"
              ? stats.failed
              : loss}{" "}
            {type === "type1" ? "" : "%"}
          </div>
          <div className="stat-desc">{`${
            type === "type1" ? t("underFailed") : t("underLoss")
          }`}</div>
        </div>

        <div className="mt-3 text-2xl stat-figure text-primary">
          <ImCross />
        </div>
      </div>
      <div className="flex justify-between items-center stat">
        <div>
          <div className="stat-title">
            {type === "type1" ? t("successRate") : t("totalprofit")}
          </div>
          <div className="stat-value text-neutral">
            {isFa
              ? formatNumberToPersian(type === "type1" ? ratio : totalProfit)
              : type === "type1"
              ? ratio
              : totalProfit}
            %
          </div>
          <div className="stat-desc">{`${
            type === "type1" ? t("underSuccessRate") : t("underTotalProfit")
          }`}</div>
        </div>

        <div className="mt-3 text-3xl stat-figure text-primary">
          <PiMathOperationsBold />
        </div>
      </div>
    </div>
  );
};

export default StatsVisualizer;
