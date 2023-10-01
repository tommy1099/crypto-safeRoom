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
    <div className="bg-white top-[9%] right-[5%] hidden fixed sm:flex z-20 gap-2">
      <p className=" p-2 rounded-md">Total: {stats.all}</p>
      <p className="text-green-700 p-2 rounded-md">
        Successful: {stats.successful}
      </p>
      <p className=" text-red-700 p-2 rounded-md">Failed: {stats.failed}</p>
      <p className=" p-2 rounded-md">Ratio: {ratio}%</p>
    </div>
  );
};

export default StatsVisualizer;
