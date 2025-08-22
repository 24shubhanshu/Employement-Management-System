import React from "react";

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[280px] p-5 bg-green-400 rounded-xl">
      <div className="flex justify-between items-center ">
        <h3 className="bg-red-600 text-s px-3 py-1 rounded">   {data.category}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-3 text-xl font-2xl">{data.title}</h2>

      <p className="text-sm mt-1">
        {data.description}
      </p>
      <div className="mt-2 bg-red-500 p-1 rounded w-40 ">
        <button className="w-full">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
