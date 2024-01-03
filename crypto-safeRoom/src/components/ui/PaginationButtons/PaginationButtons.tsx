interface PaginationButtonsProps {
  isLoaded: boolean;
  currentPage: number;
  incPage: () => void;
  decPage: () => void;
}
const PaginationButtons = ({
  isLoaded,
  currentPage,
  incPage,
  decPage,
}: PaginationButtonsProps) => {
  return (
    <div className="join">
      <button onClick={decPage} className="join-item btn">
        <span className="text-primary">«</span>
      </button>
      <button className="join-item btn text-neutral">
        Page {currentPage}
        {isLoaded && <span className="loading loading-spinner"></span>}
      </button>
      <button onClick={incPage} className="join-item btn">
        <span className="text-primary">»</span>
      </button>
    </div>
  );
};
export default PaginationButtons;
