import React from "react";

const FailedTask = ({ task }) => {
  return (
    <div
      className="
        bg-gray-600
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
            bg-red-600
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
      <p className="text-xs mt-3 text-gray-300">
        Task #{task.taskNumber}
      </p>


      {/* Task Title */}
      <h2 className="text-2xl font-bold mt-1">
        {task.taskTitle}
      </h2>


      {/* Task Description */}
      <p className="text-sm mt-2 text-gray-200 leading-5">
        {task.taskDescription}
      </p>


      {/* Failed Status */}
      <div className="flex justify-center mt-5">

        <span
          className="
            px-5
            py-2
            bg-red-600
            rounded-lg
            font-semibold
            shadow-md
          "
        >
          ✕ Task Failed
        </span>

      </div>

    </div>
  );
};

export default FailedTask;