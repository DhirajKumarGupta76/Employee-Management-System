import React, { useContext, useState } from "react";

import { AuthContext } from "../../context/AuthProvider";


const CreateTask = ({ setAdminPage }) => {

  // -----------------------------------------
  // GET DATA FROM AUTH CONTEXT
  // -----------------------------------------

  const {
    UserData,
    setUserData
  } = useContext(AuthContext);


  // -----------------------------------------
  // FORM STATES
  // -----------------------------------------

  const [taskTitle, setTaskTitle] = useState("");

  const [taskDate, setTaskDate] = useState("");

  const [taskDescription, setTaskDescription] = useState("");

  const [selectedEmployee, setSelectedEmployee] = useState("");

  const [category, setCategory] = useState("");

  const [priority, setPriority] = useState("High");


  // -----------------------------------------
  // SUBMIT TASK
  // -----------------------------------------

  const submitHandler = (e) => {

    e.preventDefault();


    // ---------------------------------------
    // CHECK FORM
    // ---------------------------------------

    if (
      !taskTitle ||
      !taskDate ||
      !taskDescription ||
      !selectedEmployee ||
      !category ||
      !priority
    ) {

      alert("Please fill all fields");

      return;

    }


    // ---------------------------------------
    // CHECK USER DATA
    // ---------------------------------------

    if (
      !UserData ||
      !UserData.employees
    ) {

      alert("Employee data not found");

      return;

    }


    // ---------------------------------------
    // FIND SELECTED EMPLOYEE
    // ---------------------------------------

    const employee = UserData.employees.find(
      (employee) =>
        employee.id === Number(selectedEmployee)
    );


    if (!employee) {

      alert("Employee not found");

      return;

    }


    // ---------------------------------------
    // GENERATE TASK NUMBER
    // ---------------------------------------

// Find the selected employee
// const employee = UserData.employees.find(
//   (employee) =>
//     employee.id === Number(selectedEmployee)
// );


// Find the highest task number
// of this employee only
let highestTaskNumber = employee.id * 100;

employee.tasks.forEach((task) => {

  if (task.taskNumber > highestTaskNumber) {

    highestTaskNumber = task.taskNumber;

  }

});


// Create next task number
const newTaskNumber =
  highestTaskNumber + 1;


    // ---------------------------------------
    // CREATE NEW TASK
    // ---------------------------------------

    const newTask = {

      taskNumber: newTaskNumber,

      taskType: "New",

      active: true,

      newTask: true,

      completed: false,

      accepted: false,

      failed: false,

      taskTitle: taskTitle,

      taskDescription: taskDescription,

      taskDate: taskDate,

      category: category,

      priority: priority

    };


    console.log(
      "New Task:",
      newTask
    );


    // ---------------------------------------
    // UPDATE EMPLOYEE
    // ---------------------------------------

    const updatedEmployees =
      UserData.employees.map(
        (employee) => {

          // Selected employee
          if (
            employee.id ===
            Number(selectedEmployee)
          ) {

            return {

              ...employee,

              // Add new task
              tasks: [
                ...employee.tasks,
                newTask
              ],

              // Increase new task count
              taskNumbers: {

                ...employee.taskNumbers,

                newTask:
                  employee.taskNumbers.newTask + 1

              }

            };

          }


          // Other employees remain unchanged
          return employee;

        }
      );


    // ---------------------------------------
    // CREATE UPDATED USER DATA
    // ---------------------------------------

    const updatedUserData = {

      ...UserData,

      employees: updatedEmployees

    };


    // ---------------------------------------
    // UPDATE AUTH CONTEXT
    // ---------------------------------------

    setUserData(updatedUserData);


    // ---------------------------------------
    // UPDATE LOCAL STORAGE
    // ---------------------------------------

    localStorage.setItem(
      "employee",
      JSON.stringify(updatedEmployees)
    );


    // ---------------------------------------
    // SUCCESS
    // ---------------------------------------

    console.log(
      "Updated Employees:",
      updatedEmployees
    );


    alert(
      `Task created successfully for ${employee.name}`
    );


    // ---------------------------------------
    // CLEAR FORM
    // ---------------------------------------

    setTaskTitle("");

    setTaskDate("");

    setTaskDescription("");

    setSelectedEmployee("");

    setCategory("");

    setPriority("High");


    // ---------------------------------------
    // GO TO ALL TASKS
    // ---------------------------------------

    setAdminPage("allTasks");

  };


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
          Loading employee data...
        </h1>

      </div>

    );

  }


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
            Create Task
          </h1>

          <p className="
            text-gray-400
            mt-2
          ">
            Create and assign a new task.
          </p>

        </div>


        {/* BACK */}

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
          "
        >
          ← Back
        </button>

      </div>


      {/* -------------------------------- */}
      {/* FORM */}
      {/* -------------------------------- */}

      <form
        onSubmit={submitHandler}
        className="
          max-w-4xl
          mx-auto
          bg-[#1f2937]
          p-8
          rounded-2xl
          border
          border-gray-700
        "
      >


        {/* -------------------------------- */}
        {/* TASK TITLE */}
        {/* -------------------------------- */}

        <div className="mb-5">

          <label className="
            block
            mb-2
            font-semibold
          ">
            Task Title
          </label>


          <input
            type="text"
            value={taskTitle}
            onChange={(e) =>
              setTaskTitle(e.target.value)
            }
            placeholder="Enter task title"
            className="
              w-full
              bg-[#111827]
              border
              border-gray-600
              rounded-lg
              p-3
              outline-none
              focus:border-blue-500
            "
          />

        </div>


        {/* -------------------------------- */}
        {/* DATE */}
        {/* -------------------------------- */}

        <div className="mb-5">

          <label className="
            block
            mb-2
            font-semibold
          ">
            Due Date
          </label>


          <input
            type="date"
            value={taskDate}
            onChange={(e) =>
              setTaskDate(e.target.value)
            }
            className="
              w-full
              bg-[#111827]
              border
              border-gray-600
              rounded-lg
              p-3
              outline-none
              focus:border-blue-500
            "
          />

        </div>


        {/* -------------------------------- */}
        {/* DESCRIPTION */}
        {/* -------------------------------- */}

        <div className="mb-5">

          <label className="
            block
            mb-2
            font-semibold
          ">
            Description
          </label>


          <textarea
            rows="5"
            value={taskDescription}
            onChange={(e) =>
              setTaskDescription(e.target.value)
            }
            placeholder="Enter task description"
            className="
              w-full
              bg-[#111827]
              border
              border-gray-600
              rounded-lg
              p-3
              outline-none
              focus:border-blue-500
              resize-none
            "
          />

        </div>


        {/* -------------------------------- */}
        {/* EMPLOYEE */}
        {/* -------------------------------- */}

        <div className="mb-5">

          <label className="
            block
            mb-2
            font-semibold
          ">
            Assign Employee
          </label>


          <select
            value={selectedEmployee}
            onChange={(e) =>
              setSelectedEmployee(e.target.value)
            }
            className="
              w-full
              bg-[#111827]
              border
              border-gray-600
              rounded-lg
              p-3
              outline-none
              focus:border-blue-500
            "
          >

            <option value="">
              Select Employee
            </option>


            {UserData.employees.map(
              (employee) => (

                <option
                  key={employee.id}
                  value={employee.id}
                >
                  {employee.name}
                </option>

              )
            )}

          </select>

        </div>


        {/* -------------------------------- */}
        {/* CATEGORY */}
        {/* -------------------------------- */}

        <div className="mb-5">

          <label className="
            block
            mb-2
            font-semibold
          ">
            Category
          </label>


          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="
              w-full
              bg-[#111827]
              border
              border-gray-600
              rounded-lg
              p-3
              outline-none
              focus:border-blue-500
            "
          >

            <option value="">
              Select Category
            </option>

            <option value="Design">
              Design
            </option>

            <option value="Development">
              Development
            </option>

            <option value="Testing">
              Testing
            </option>

            <option value="Documentation">
              Documentation
            </option>

            <option value="Frontend">
              Frontend
            </option>

            <option value="Backend">
              Backend
            </option>

            <option value="Database">
              Database
            </option>

            <option value="UI/UX">
              UI/UX
            </option>

          </select>

        </div>


        {/* -------------------------------- */}
        {/* PRIORITY */}
        {/* -------------------------------- */}

        <div className="mb-7">

          <label className="
            block
            mb-3
            font-semibold
          ">
            Priority
          </label>


          <div className="
            flex
            gap-6
          ">


            {/* LOW */}

            <label className="
              flex
              items-center
              gap-2
              cursor-pointer
            ">

              <input
                type="radio"
                name="priority"
                value="Low"
                checked={
                  priority === "Low"
                }
                onChange={(e) =>
                  setPriority(e.target.value)
                }
              />

              Low

            </label>


            {/* MEDIUM */}

            <label className="
              flex
              items-center
              gap-2
              cursor-pointer
            ">

              <input
                type="radio"
                name="priority"
                value="Medium"
                checked={
                  priority === "Medium"
                }
                onChange={(e) =>
                  setPriority(e.target.value)
                }
              />

              Medium

            </label>


            {/* HIGH */}

            <label className="
              flex
              items-center
              gap-2
              cursor-pointer
            ">

              <input
                type="radio"
                name="priority"
                value="High"
                checked={
                  priority === "High"
                }
                onChange={(e) =>
                  setPriority(e.target.value)
                }
              />

              High

            </label>

          </div>

        </div>


        {/* -------------------------------- */}
        {/* CREATE BUTTON */}
        {/* -------------------------------- */}

        <button
          type="submit"
          className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            py-3
            rounded-lg
            font-bold
            transition
          "
        >
          Create Task
        </button>

      </form>

    </div>

  );

};


export default CreateTask;