import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../../Store/Store";
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
    <div className="bg-white bottom-0 w-full h-[20px] lg:w-[382px] lg:bottom-[85%] flex pl-[15%] lg:pl-0 lg:top-[70px] lg:right-[5%] fixed lg:flex z-[15] lg:gap-2 gap-3">
      <p className=" lg:p-2 rounded-md">Total: {stats.all}</p>
      <p className="text-green-700 lg:p-2 rounded-md">
        Successful: {stats.successful}
      </p>
      <p className=" text-red-700 lg:p-2 rounded-md">Failed: {stats.failed}</p>
      <p className=" lg:p-2 rounded-md">Ratio: {ratio}%</p>
    </div>
  );
};

export default StatsVisualizer;
