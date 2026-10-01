import React from 'react'
import Header from '../others/Header'


const AdminDeshboard = ({
  setAdminPage,
  handleLogout
}) => {

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
              24
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
              8
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
              12
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
              4
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


          {/* Task 1 */}

          <div className="
            bg-[#111827]
            p-4
            rounded-xl
            mb-3
            flex
            justify-between
            items-center
          ">

            <div>

              <h3 className="font-semibold">
                Website Design
              </h3>

              <p className="
                text-sm
                text-gray-400
              ">
                Assigned to Dhiraj
              </p>

            </div>

            <span className="
              bg-blue-500/20
              text-blue-400
              px-3
              py-1
              rounded-full
              text-sm
            ">
              New
            </span>

          </div>


          {/* Task 2 */}

          <div className="
            bg-[#111827]
            p-4
            rounded-xl
            mb-3
            flex
            justify-between
            items-center
          ">

            <div>

              <h3 className="font-semibold">
                API Integration
              </h3>

              <p className="
                text-sm
                text-gray-400
              ">
                Assigned to Sarthak
              </p>

            </div>

            <span className="
              bg-yellow-500/20
              text-yellow-400
              px-3
              py-1
              rounded-full
              text-sm
            ">
              Accepted
            </span>

          </div>


          {/* Task 3 */}

          <div className="
            bg-[#111827]
            p-4
            rounded-xl
            flex
            justify-between
            items-center
          ">

            <div>

              <h3 className="font-semibold">
                Testing
              </h3>

              <p className="
                text-sm
                text-gray-400
              ">
                Assigned to Rahul
              </p>

            </div>

            <span className="
              bg-green-500/20
              text-green-400
              px-3
              py-1
              rounded-full
              text-sm
            ">
              Completed
            </span>

          </div>

        </div>

      </div>

    </div>
  )
}


export default AdminDeshboard