import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-[10%]">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default Loading;
