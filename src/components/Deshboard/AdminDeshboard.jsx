import React, { useContext } from 'react'
import Header from '../others/Header'
import { AuthContext } from '../../context/AuthProvider'

const AdminDeshboard = ({
  setAdminPage,
  handleLogout
}) => {
    const { UserData } = useContext(AuthContext)

  const allTasks = UserData?.employees?.flatMap(
    (employee) => employee.tasks
  ) || []

  const totalTasks = allTasks.length

  const newTasks = allTasks.filter(
    (task) => task.newTask === true
  ).length

  const completedTasks = allTasks.filter(
    (task) => task.completed === true
  ).length

  const failedTasks = allTasks.filter(
    (task) => task.failed === true
  ).length

  return (

    <div className="min-h-screen bg-[#111827] text-white">

      <Header />

      <div className="p-6">

        {/* Welcome */}

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
              Admin Dashboard 👋
            </h1>

            <p className="
              text-gray-400
              mt-2
            ">
              Manage employees and tasks from here.
            </p>

          </div>


          <button
            onClick={handleLogout}
            className="
              bg-red-500
              hover:bg-red-600
              px-5
              py-2
              rounded-lg
              font-semibold
            "
          >
            Logout
          </button>

        </div>


        {/* Statistics */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-5
          mb-8
        ">

          <div className="
            bg-[#1f2937]
            p-6
            rounded-2xl
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


          <div className="
            bg-[#1f2937]
            p-6
            rounded-2xl
          ">
            <p className="text-gray-400">
              New Tasks
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


          <div className="
            bg-[#1f2937]
            p-6
            rounded-2xl
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


          <div className="
            bg-[#1f2937]
            p-6
            rounded-2xl
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


        {/* Quick Actions */}

        <div className="mb-8">

          <h2 className="
            text-2xl
            font-bold
            mb-5
          ">
            Quick Actions
          </h2>


          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
          ">


            {/* Create Task */}

            <button
              onClick={() => setAdminPage("create")}
              className="
                bg-blue-600
                hover:bg-blue-700
                p-6
                rounded-2xl
                text-left
              "
            >

              <h3 className="
                text-xl
                font-bold
              ">
                + Create Task
              </h3>

              <p className="
                text-blue-100
                mt-2
              ">
                Assign a new task to an employee.
              </p>

            </button>


            {/* All Tasks */}

            <button
              onClick={() => setAdminPage("allTasks")}
              className="
                bg-purple-600
                hover:bg-purple-700
                p-6
                rounded-2xl
                text-left
              "
            >

              <h3 className="
                text-xl
                font-bold
              ">
                📋 All Tasks
              </h3>

              <p className="
                text-purple-100
                mt-2
              ">
                View and manage all employee tasks.
              </p>

            </button>


            {/* Employees */}

            <button
              className="
                bg-green-600
                hover:bg-green-700
                p-6
                rounded-2xl
                text-left
              "
            >

              <h3 className="
                text-xl
                font-bold
              ">
                👥 Employees
              </h3>

              <p className="
                text-green-100
                mt-2
              ">
                View all employees and their work.
              </p>

            </button>

          </div>

        </div>


        {/* Recent Tasks */}

        <div className="
          bg-[#1f2937]
          rounded-2xl
          p-6
        ">

          <div className="
            flex
            justify-between
            items-center
            mb-5
          ">

            <h2 className="
              text-2xl
              font-bold
            ">
              Recent Tasks
            </h2>


            <button
              onClick={() => setAdminPage("allTasks")}
              className="
                text-blue-400
                hover:text-blue-300
              "
            >
              View All
            </button>

          </div>



        </div>

        {allTasks.slice(-3).reverse().map((task) => {

  const employee = UserData.employees.find(
    (employee) =>
      employee.tasks.some(
        (employeeTask) =>
          employeeTask.taskNumber === task.taskNumber
      )
  );

  let status = "New";
  let statusStyle = "bg-blue-500/20 text-blue-400";

  if (task.completed) {
    status = "Completed";
    statusStyle = "bg-green-500/20 text-green-400";
  }
  else if (task.failed) {
    status = "Failed";
    statusStyle = "bg-red-500/20 text-red-400";
  }
  else if (task.accepted) {
    status = "Accepted";
    statusStyle = "bg-yellow-500/20 text-yellow-400";
  }

  return (
    <div
      key={`${employee?.id}-${task.taskNumber}`}
      className="
        bg-[#111827]
        p-4
        rounded-xl
        mb-3
        flex
        justify-between
        items-center
      "
    >

      <div>

        <h3 className="font-semibold">
          {task.taskTitle}
        </h3>

        <p className="
          text-sm
          text-gray-400
        ">
          Assigned to {employee?.name}
        </p>

      </div>

      <span
        className={`
          ${statusStyle}
          px-3
          py-1
          rounded-full
          text-sm
        `}
      >
        {status}
      </span>

    </div>
  );
})}

      </div>

    </div>
  )
}


export default AdminDeshboard