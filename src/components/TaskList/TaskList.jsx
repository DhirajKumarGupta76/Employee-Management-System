import React from "react";

const TaskList = ({data}) => {
  return (
    // Main Task List Container
    <div className="w-full h-[300px] grid grid-cols-3  overflow-y-auto space-y-0 gap-5 p-3 justify-center ">

      {/* ================= TASK 1 ================= */}
      <div className="
        bg-[#c9704d]
        text-white
        rounded-xl
        p-4
        mb-2
        shadow-md
      ">

        {/* Top Section */}
        <div className="flex items-center justify-between ">

          {/* Priority */}
          <span className="
            bg-[#ba4248]
            px-3
            py-1
            rounded-md
            text-sm
            font-bold
          
          ">
            High
          </span>

          {/* Date */}
          <span className="text-sm font-semibold">
            20 Feb 2024
          </span>

        </div>

        {/* Task Title */}
        <h2 className="text-3xl font-bold mt-2 ">
          Ek aur task
        </h2>

        {/* Task Description */}
        <p className="text-sm mt-1">
          Task jaisa kabhi nahi dekha hoga waisa
        </p>

      </div>


      {/* ================= TASK 2 ================= */}
      <div className="
        bg-[#adc76e]
        text-white
        rounded-2xl
        p-4
        mb-2
        shadow-md
      ">

        {/* Top Section */}
        <div className="flex items-center justify-between">

          {/* Priority */}
          <span className="
            bg-[#b94e35]
            px-3
            py-1
            rounded-md
            text-sm
            font-bold
          ">
            High
          </span>

          {/* Date */}
          <span className="text-sm font-semibold">
            20 Feb 2024
          </span>

        </div>

        {/* Task Title */}
        <h2 className="text-3xl font-bold mt-3">
          Example Task
        </h2>

        {/* Task Description */}
        <p className="text-sm mt-1">
          Example aisa kahi nahi dekha hoga jaisa
        </p>

      </div>


      {/* ================= TASK 3 ================= */}
      <div className="
        bg-[#4a90e2]
        text-white
        rounded-2xl
        p-4
        mb-2
        shadow-md
      ">

        {/* Top Section */}
        <div className="flex items-center justify-between">

          {/* Priority */}
          <span className="
            bg-[#b94e35]
            px-3
            py-1
            rounded-md
            text-sm
            font-bold
          ">
            High
          </span>

          {/* Date */}
          <span className="text-sm font-semibold">
            8 Feb 2024
          </span>

        </div>

        {/* Task Title */}
        <h2 className="text-3xl font-bold mt-3">
          Complete Project
        </h2>

        {/* Task Description */}
        <p className="text-sm mt-1">
          Complete the assigned project before the deadline.
        </p>

      </div>

    </div>
  );
};

export default TaskList;