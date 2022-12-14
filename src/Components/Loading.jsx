import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center text-center">
      <div className="w-10 h-10 rounded-full bg-green-500 animate-bounce"></div>
      <div className="w-10 h-10 rounded-full bg-green-700 mx-4 animate-ping"></div>
      <div className="w-10 h-10 rounded-full bg-lime-500  animate-bounce"></div>
    </div>
  );
};

export default Loading;
