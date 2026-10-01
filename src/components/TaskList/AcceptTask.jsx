import React from "react";

const AcceptTask = ({ task, onAccept, onComplete, onFail }) => {

  const handleAccept = () => {
    onAccept(task.taskNumber);
  };

  const handleComplete = () => {
    onComplete(task.taskNumber);
  };

  const handleFail = () => {
    onFail(task.taskNumber);
  };

  return (
    <div
      className="
        bg-[#c9704d]
        text-white
        rounded-xl
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
            bg-[#ba4248]
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
      <p className="text-xs mt-3 text-orange-100">
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


      {/* Action Buttons */}
      <div className="flex gap-4 mt-5">

        {/* Accept Button */}
        <button
          onClick={handleAccept}
          className="
            px-5
            py-2.5
            bg-blue-900
            text-white
            font-semibold
            rounded-lg
            hover:bg-blue-700
            active:scale-95
            transition-all
            duration-200
            shadow-md
          "
        >
          ✓ Accept Task
        </button>


        {/* Complete Button */}
        <button
          onClick={handleComplete}
          className="
            px-5
            py-2.5
            bg-green-900
            text-white
            font-semibold
            rounded-lg
            hover:bg-green-600
            active:scale-95
            transition-all
            duration-200
            shadow-md
          "
        >
          ✓ Mark as Completed
        </button>


        {/* Failed Button */}
        <button
          onClick={handleFail}
          className="
            px-5
            py-2.5
            bg-red-900
            text-white
            font-semibold
            rounded-lg
            hover:bg-red-700
            active:scale-95
            transition-all
            duration-200
            shadow-md
          "
        >
          ✕ Mark as Failed
        </button>

      </div>

    </div>
  );
};

export default AcceptTask;