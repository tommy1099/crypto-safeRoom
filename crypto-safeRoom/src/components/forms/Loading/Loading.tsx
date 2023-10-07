import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 rounded-full border-t-4 border-blue-500 border-opacity-25 animate-spin"></div>
    </div>
  );
};

export default Loading;
