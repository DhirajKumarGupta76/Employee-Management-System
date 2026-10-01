import React, { useContext } from "react";

import { AuthContext } from "../../context/AuthProvider";


const AllTask = ({ setAdminPage }) => {

  // -----------------------------------------
  // GET EMPLOYEE DATA
  // -----------------------------------------

  const { UserData } = useContext(AuthContext);


  // -----------------------------------------
  // LOADING
  // -----------------------------------------

  if (!UserData) {

    return (

      <div className="
        min-h-screen
        bg-[#111827]
        text-white
        flex
        items-center
        justify-center
      ">

        <h1 className="
          text-xl
          font-semibold
        ">
          Loading tasks...
        </h1>

      </div>

    );

  }


  // -----------------------------------------
  // GET ALL TASKS
  // -----------------------------------------

//   const allTasks = UserData.employees.flatMap(
//     (employee) => {

//       return employee.tasks.map(
//         (task) => {

//           return {
//             ...task,

//             // Store employee information
//             // so we know who owns the task
//             employeeId: employee.id,
//             employeeName: employee.name,
//             employeeEmail: employee.email
//           };

//         }
//       );

//     }
//   );

const allTasks = UserData.employees
  .flatMap((employee) => {

    return employee.tasks.map((task) => {

      return {
        ...task,

        employeeId: employee.id,
        employeeName: employee.name,
        employeeEmail: employee.email
      };

    });

  })
  .sort((a, b) => {

    // New tasks should appear first
    if (a.newTask && !b.newTask) return -1;

    if (!a.newTask && b.newTask) return 1;

    return 0;

  });


  // -----------------------------------------
  // TASK STATISTICS
  // -----------------------------------------

  const totalTasks = allTasks.length;


  const newTasks = allTasks.filter(
    (task) => task.newTask === true
  ).length;


  const completedTasks = allTasks.filter(
    (task) => task.completed === true
  ).length;


  const acceptedTasks = allTasks.filter(
    (task) => task.accepted === true
  ).length;


  const failedTasks = allTasks.filter(
    (task) => task.failed === true
  ).length;


  // -----------------------------------------
  // GET TASK STATUS
  // -----------------------------------------

  const getTaskStatus = (task) => {

    if (task.completed) {
      return "Completed";
    }

    if (task.failed) {
      return "Failed";
    }

    if (task.accepted) {
      return "Accepted";
    }

    if (task.newTask) {
      return "New";
    }

    return "Unknown";

  };


  // -----------------------------------------
  // STATUS STYLE
  // -----------------------------------------

  const getStatusStyle = (task) => {

    if (task.completed) {

      return `
        bg-green-500/20
        text-green-400
      `;

    }


    if (task.failed) {

      return `
        bg-red-500/20
        text-red-400
      `;

    }


    if (task.accepted) {

      return `
        bg-yellow-500/20
        text-yellow-400
      `;

    }


    if (task.newTask) {

      return `
        bg-blue-500/20
        text-blue-400
      `;

    }


    return `
      bg-gray-500/20
      text-gray-400
    `;

  };


  // -----------------------------------------
  // UI
  // -----------------------------------------

  return (

    <div className="
      min-h-screen
      bg-[#111827]
      text-white
      p-6
    ">


      {/* -------------------------------- */}
      {/* HEADER */}
      {/* -------------------------------- */}

      <div className="
        flex
        items-center
        justify-between
        mb-8
      ">

        <div>

          <h1 className="
            text-3xl
            font-bold
          ">
            All Tasks
          </h1>

          <p className="
            text-gray-400
            mt-2
          ">
            View all tasks assigned to employees.
          </p>

        </div>


        {/* BACK BUTTON */}

        <button
          onClick={() =>
            setAdminPage("dashboard")
          }
          className="
            bg-gray-700
            hover:bg-gray-600
            px-5
            py-2
            rounded-lg
            transition
          "
        >
          ← Back
        </button>

      </div>


      {/* -------------------------------- */}
      {/* STATISTICS */}
      {/* -------------------------------- */}

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-5
        gap-5
        mb-8
      ">


        {/* TOTAL */}

        <div className="
          bg-[#1f2937]
          p-5
          rounded-2xl
          border
          border-gray-700
        ">

          <p className="text-gray-400">
            Total Tasks
          </p>

          <h2 className="
            text-3xl
            font-bold
            mt-2
          ">
            {totalTasks}
          </h2>

        </div>


        {/* NEW */}

        <div className="
          bg-[#1f2937]
          p-5
          rounded-2xl
          border
          border-gray-700
        ">

          <p className="text-gray-400">
            New
          </p>

          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-blue-400
          ">
            {newTasks}
          </h2>

        </div>


        {/* ACCEPTED */}

        <div className="
          bg-[#1f2937]
          p-5
          rounded-2xl
          border
          border-gray-700
        ">

          <p className="text-gray-400">
            Accepted
          </p>

          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-yellow-400
          ">
            {acceptedTasks}
          </h2>

        </div>


        {/* COMPLETED */}

        <div className="
          bg-[#1f2937]
          p-5
          rounded-2xl
          border
          border-gray-700
        ">

          <p className="text-gray-400">
            Completed
          </p>

          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-green-400
          ">
            {completedTasks}
          </h2>

        </div>


        {/* FAILED */}

        <div className="
          bg-[#1f2937]
          p-5
          rounded-2xl
          border
          border-gray-700
        ">

          <p className="text-gray-400">
            Failed
          </p>

          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-red-400
          ">
            {failedTasks}
          </h2>

        </div>

      </div>


      {/* -------------------------------- */}
      {/* ALL TASKS */}
      {/* -------------------------------- */}

      <div className="
        bg-[#1f2937]
        rounded-2xl
        p-6
        border
        border-gray-700
      ">


        <div className="
          flex
          items-center
          justify-between
          mb-6
        ">

          <div>

            <h2 className="
              text-2xl
              font-bold
            ">
              Task List
            </h2>

            <p className="
              text-gray-400
              text-sm
              mt-1
            ">
              {totalTasks} tasks found
            </p>

          </div>

        </div>


        {/* -------------------------------- */}
        {/* NO TASK */}
        {/* -------------------------------- */}

        {allTasks.length === 0 && (

          <div className="
            text-center
            py-12
            text-gray-400
          ">

            <p className="text-lg">
              No tasks available.
            </p>

          </div>

        )}


        {/* -------------------------------- */}
        {/* TASK LIST */}
        {/* -------------------------------- */}

        <div className="
          space-y-4
        ">

          {allTasks.map(
            (task) => (

              <div
                key={`${task.employeeId}-${task.taskNumber}`}
                className="
                  bg-[#111827]
                  rounded-xl
                  p-5
                  border
                  border-gray-800
                  hover:border-gray-600
                  transition
                "
              >


                {/* -------------------------------- */}
                {/* TOP */}
                {/* -------------------------------- */}

                <div className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-start
                  md:justify-between
                  gap-4
                ">


                  {/* TASK INFORMATION */}

                  <div className="flex-1">

                    <div className="
                      flex
                      flex-wrap
                      items-center
                      gap-3
                      mb-2
                    ">

                      <h3 className="
                        text-lg
                        font-bold
                      ">
                        {task.taskTitle}
                      </h3>


                      <span className="
                        text-xs
                        bg-gray-700
                        text-gray-300
                        px-2
                        py-1
                        rounded
                      ">
                        #{task.taskNumber}
                      </span>

                    </div>


                    {/* DESCRIPTION */}

                    <p className="
                      text-gray-400
                      text-sm
                      mb-4
                    ">
                      {task.taskDescription}
                    </p>


                    {/* TASK DETAILS */}

                    <div className="
                      flex
                      flex-wrap
                      gap-3
                      text-sm
                    ">


                      {/* EMPLOYEE */}

                      <span className="
                        bg-gray-800
                        px-3
                        py-1
                        rounded-lg
                        text-gray-300
                      ">
                        👤 {task.employeeName}
                      </span>


                      {/* CATEGORY */}

                      <span className="
                        bg-gray-800
                        px-3
                        py-1
                        rounded-lg
                        text-gray-300
                      ">
                        📁 {task.category}
                      </span>


                      {/* DATE */}

                      <span className="
                        bg-gray-800
                        px-3
                        py-1
                        rounded-lg
                        text-gray-300
                      ">
                        📅 {task.taskDate}
                      </span>


                      {/* PRIORITY */}

                      {task.priority && (

                        <span className="
                          bg-gray-800
                          px-3
                          py-1
                          rounded-lg
                          text-gray-300
                        ">
                          ⚡ {task.priority}
                        </span>

                      )}

                    </div>

                  </div>


                  {/* STATUS */}

                  <div>

                    <span
                      className={`
                        ${getStatusStyle(task)}
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                        inline-block
                      `}
                    >
                      {getTaskStatus(task)}
                    </span>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </div>

  );

};


export default AllTask;