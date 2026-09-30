import React from "react";

const TaskListNumber = ({data}) => {
  console.log(data)
  return (
    // Main container
    <div className="w-full gap-5 flex flex-col grid grid-cols-4 ">

     

        {/* New Task */}
        <div className="bg-[#4a90e2] rounded-lg p-4 text-black ">
          <h1 className="text-4xl font-bold">
            {/* {data.taskNumber.newTask} */}
          </h1>

          <h2 className="text-xl font-semibold mt-1">
            New Task
          </h2>
        </div>

        {/* Completed */}
        <div className="bg-[#adc76e] rounded-lg p-4 text-black">
          <h1 className="text-4xl font-bold">
            3
          </h1>

          <h2 className="text-xl font-semibold mt-1">
            Completed
          </h2>
        </div>

      

      

        {/* Accepted */}
        <div className="bg-[#f6d365] rounded-lg p-4 text-black">
          <h1 className="text-4xl font-bold">
            0
          </h1>

          <h2 className="text-xl font-semibold mt-1">
            Accepted
          </h2>
        </div>

        {/* Failed */}
        <div className="bg-[#c9704d] rounded-lg p-4 text-black">
          <h1 className="text-4xl font-bold">
            1
          </h1>

          <h2 className="text-xl font-semibold mt-1">
            Failed
          </h2>
        </div>

      

    </div>
  );
};

export default TaskListNumber;