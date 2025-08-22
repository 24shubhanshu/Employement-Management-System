import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const {userData} = useContext(AuthContext);
  //  if (!Array.isArray(userData)) {
  //   return <div className="text-white">Loading tasks...</div>;
  // }
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-60 ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between">
        <h2 className="w-1/5 text-xl font-bold bg-red-600">Employee Name</h2>
        <h3 className="w-1/5 text-xl font-bold bg-red-600">New Task</h3>
        <h5 className="w-1/5 text-xl font-bold bg-red-600">Active</h5>
        <h5 className="w-1/5 text-xl font-bold bg-red-600">Completed</h5>
        <h5 className="w-1/5 text-xl font-bold bg-red-600">Failed</h5>
      </div>

      <div className="h-[80%] overflow-auto">
        {userData.map((elem,idx) => {
          return (
            <div key={idx} className=" mb-2 py-2 px-4 border-2 border-green-200 flex justify-between">
              <h2 className="w-1/5  text-xl  !text-white font-semibold ">{elem.firstName}</h2>
              <h3 className="w-1/5 text-xl !text-blue-300 font-semibold">{elem.taskCounts.newTask}</h3>
              <h5 className="w-1/5 text-xl !text-yellow-300 font-semibold">{elem.taskCounts.active}</h5>
              <h5 className="w-1/5 text-xl !text-white-300 font-semibold">{elem.taskCounts.completed}</h5>
              <h5 className="w-1/5 text-xl !text-red-400 font-semibold">{elem.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
