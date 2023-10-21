import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../../Store/Store";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { PiMathOperationsBold } from "react-icons/pi";
import { AiFillExclamationCircle } from "react-icons/ai";
const StatsVisualizer = () => {
  const stats = useSelector((state: RootState) => state.statsTracker.statsObj);

  // Calculate the ratio of successful to failed data points
  const calculateRatio = (successful: number, failed: number) => {
    if (failed === 0) {
      return successful > 0 ? 100 : 0;
    }
    const ratio = (successful / (successful + failed)) * 100;
    return parseFloat(ratio.toFixed(0));
  };

  const ratio = calculateRatio(stats.successful, stats.failed);

  return (
    <div className="shadow stats">
      <div className="flex justify-center items-center stat">
        <div>
          <div className="stat-title">Total</div>
          <div className="stat-value text-neutral">{stats.all}</div>
          <div className="stat-desc">{`2023 Jan 1st - Now!`}</div>
        </div>
        <div className="mt-3 text-3xl stat-figure text-primary">
          <AiFillExclamationCircle />
        </div>
      </div>

      <div className="flex justify-center items-center stat">
        <div>
          <div className="stat-title">Successfull</div>
          <div className="stat-value text-neutral">{stats.successful}</div>
          <div className="stat-desc">{"-"}</div>
        </div>

        <div className="mt-3 text-3xl stat-figure text-primary">
          <IoMdCheckmarkCircle />
        </div>
      </div>

      <div className="flex justify-center items-center stat">
        <div>
          <div className="stat-title">Failed</div>
          <div className="stat-value text-neutral">{stats.failed}</div>
          <div className="stat-desc">{"-"}</div>
        </div>

        <div className="mt-3 text-2xl stat-figure text-primary">
          <ImCross />
        </div>
      </div>
      <div className="flex justify-center items-center stat">
        <div>
          <div className="stat-title">Success Ratio</div>
          <div className="stat-value text-neutral">{ratio}%</div>
          <div className="stat-desc">{"-"}</div>
        </div>

        <div className="mt-3 text-3xl stat-figure text-primary">
          <PiMathOperationsBold />
        </div>
      </div>
    </div>
  );
};

export default StatsVisualizer;
