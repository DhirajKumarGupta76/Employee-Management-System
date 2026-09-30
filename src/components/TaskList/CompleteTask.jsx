import React from "react";

const CompleteTask = ({ task }) => {
  return (
    <div
      className="
        bg-[#adc76e]
        text-white
        rounded-2xl
        p-4
        mb-2
        shadow-md
        hover:shadow-xl
        transition-all
        duration-200
      "
    >

      {/* Top Section */}
      <div className="flex items-center justify-between">

        {/* Category */}
        <span
          className="
            bg-[#b94e35]
            px-3
            py-1
            rounded-md
            text-sm
            font-bold
          "
        >
          {task.category}
        </span>

        {/* Date */}
        <span className="text-sm font-semibold">
          {task.taskDate}
        </span>

      </div>


      {/* Task Number */}
      <p className="text-xs mt-3 text-green-100">
        Task #{task.taskNumber}
      </p>


      {/* Task Title */}
      <h2 className="text-2xl font-bold mt-1">
        {task.taskTitle}
      </h2>


      {/* Task Description */}
      <p className="text-sm mt-2 leading-5">
        {task.taskDescription}
      </p>


      {/* Completed Status */}
      <div className="flex justify-center items-center mt-5">

        <span
          className="
            px-5
            py-2.5
            bg-green-900
            text-white
            font-semibold
            rounded-lg
            shadow-md
          "
        >
          ✓ Task Completed
        </span>

      </div>

    </div>
  );
};

export default CompleteTask;