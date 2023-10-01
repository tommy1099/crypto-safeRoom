import { SignalFilters } from "../../../forms";
const ExpandedSidePanel = () => {
  return (
    <div className="hidden p-5 lg:flex shadow-2xl rounded-md fixed top-[15%] w-[5%] items-start justify-center bottom-[10%] right-[0%]">
      <SignalFilters />
    </div>
  );
};
export default ExpandedSidePanel;
