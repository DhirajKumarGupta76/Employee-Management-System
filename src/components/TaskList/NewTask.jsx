import React from "react";

const NewTask = ({ task, onAccept }) => {

  const handleAccept = () => {
    // Send the task back to parent
    onAccept(task.taskNumber);
  };

  return (
    <div
      className="
        bg-[#4a90e2]
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

        {/* Category / Priority */}
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
      <p className="text-xs mt-3 opacity-80">
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


      {/* Accept Button */}
      <div className="flex justify-center items-center mt-5">

        <button
          onClick={handleAccept}
          className="
            px-5
            py-2.5
            bg-zinc-900
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
          ✓ Mark as Accepted
        </button>

      </div>

    </div>
  );
};

export default NewTask;