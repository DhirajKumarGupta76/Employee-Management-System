import React from "react";
import Header from "../others/Header";

const CreateTask = () => {
  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Task Created");
  };

  return (
    <>
    <Header />
    

     {/* // Main Page */}
    <div className="min-h-screen w-full bg-[#0f0f0f] text-white flex items-center justify-center p-8 flex-col m-0">

       

      {/* ================= CREATE TASK CARD ================= */}
      <div
        className="
          w-full
          max-w-4xl
          bg-[#1231]
          border
          border-gray-700
          rounded-2xl
          shadow-2xl
          p-8
          md:p-10
        "
      >

        {/* ================= HEADER ================= */}
        <div className="flex items-center gap-4 mb-8">

          {/* Back Button */}
          <button
            type="button"
            className="
              w-10
              h-10
              rounded-full
              border
              border-gray-500
              flex
              items-center
              justify-center
              text-xl
              hover:bg-white
              hover:text-black
              transition
              duration-300
            "
          >
            ←
          </button>

          {/* Heading */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Create Task
            </h1>

            <p className="text-gray-400 mt-1">
              Assign a new task to an employee
            </p>
          </div>

        </div>


        {/* ================= FORM ================= */}
        <form
          onSubmit={submitHandler}
          className="space-y-6"
        >

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Task Title */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Task Title
              </label>

              <input
                type="text"
                required
                placeholder="Make a UI design"
                className="
                  w-full
                  bg-[#292929]
                  border
                  border-gray-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  placeholder-gray-500
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/20
                  transition
                "
              />
            </div>


            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Due Date
              </label>

              <input
                type="date"
                required
                className="
                  w-full
                  bg-[#292929]
                  border
                  border-gray-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/20
                  transition
                "
              />
            </div>

          </div>


          {/* ================= DESCRIPTION ================= */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>

            <textarea
              required
              rows="5"
              placeholder="Write a detailed description of the task (Max 500 words)"
              className="
                w-full
                bg-[#292929]
                border
                border-gray-700
                rounded-xl
                px-4
                py-3
                text-white
                placeholder-gray-500
                resize-none
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20
                transition
              "
            ></textarea>

            {/* Character information */}
            <p className="text-xs text-gray-500 mt-2">
              Maximum 500 words
            </p>
          </div>


          {/* ================= SECOND ROW ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Assign Employee */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Assign To
              </label>

              <select
                required
                className="
                  w-full
                  bg-[#292929]
                  border
                  border-gray-700
                  rounded-xl
                  px-4
                  py-3
                  text-gray-300
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/20
                  transition
                "
              >
                <option value="">
                  Select Employee
                </option>

                <option value="dhiraj">
                  Dhiraj Kumar
                </option>

                <option value="sarthak">
                  Sarthak
                </option>

                <option value="rahul">
                  Rahul
                </option>
              </select>
            </div>


            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category
              </label>

              <select
                required
                className="
                  w-full
                  bg-[#292929]
                  border
                  border-gray-700
                  rounded-xl
                  px-4
                  py-3
                  text-gray-300
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/20
                  transition
                "
              >
                <option value="">
                  Select Category
                </option>

                <option value="design">
                  Design
                </option>

                <option value="development">
                  Development
                </option>

                <option value="testing">
                  Testing
                </option>

                <option value="documentation">
                  Documentation
                </option>
              </select>
            </div>

          </div>


          {/* ================= PRIORITY ================= */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Priority
            </label>

            <div className="flex flex-wrap gap-3">

              {/* Low */}
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="priority"
                  value="low"
                  className="peer hidden"
                />

                <span
                  className="
                    inline-block
                    px-5
                    py-2
                    rounded-lg
                    bg-[#292929]
                    border
                    border-gray-700
                    text-gray-400
                    peer-checked:bg-green-600
                    peer-checked:text-white
                    peer-checked:border-green-500
                    transition
                  "
                >
                  Low
                </span>
              </label>


              {/* Medium */}
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="priority"
                  value="medium"
                  className="peer hidden"
                />

                <span
                  className="
                    inline-block
                    px-5
                    py-2
                    rounded-lg
                    bg-[#292929]
                    border
                    border-gray-700
                    text-gray-400
                    peer-checked:bg-yellow-600
                    peer-checked:text-white
                    peer-checked:border-yellow-500
                    transition
                  "
                >
                  Medium
                </span>
              </label>


              {/* High */}
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="priority"
                  value="high"
                  defaultChecked
                  className="peer hidden"
                />

                <span
                  className="
                    inline-block
                    px-5
                    py-2
                    rounded-lg
                    bg-[#292929]
                    border
                    border-gray-700
                    text-gray-400
                    peer-checked:bg-red-600
                    peer-checked:text-white
                    peer-checked:border-red-500
                    transition
                  "
                >
                  High
                </span>
              </label>

            </div>
          </div>


          {/* ================= CREATE BUTTON ================= */}
          <button
            type="submit"
            className="
              w-full
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              hover:from-blue-700
              hover:to-indigo-700
              text-white
              font-semibold
              py-3.5
              rounded-xl
              shadow-lg
              shadow-blue-500/20
              hover:shadow-blue-500/40
              hover:scale-[1.01]
              transition
              duration-300
            "
          >
            Create Task
          </button>

        </form>

      </div>

    </div>



    </>
   

   
  );
};

export default CreateTask;