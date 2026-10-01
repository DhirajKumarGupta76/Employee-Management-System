
import React, { useState, useContext } from "react";

import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data }) => {

  const [tasks, setTasks] = useState(data.tasks);
  const { UserData, setUserData } = useContext(AuthContext);

  // Accept Task
 const handleAcceptTask = (taskNumber) => {

  const updatedTasks = tasks.map((task) => {

    if (task.taskNumber === taskNumber) {

      return {
        ...task,

        taskType: "Accepted",

        active: true,
        newTask: false,
        accepted: true,
        completed: false,
        failed: false,
      };
    }

    return task;
  });


  // Update TaskList UI
  setTasks(updatedTasks);


  // Find logged-in employee
  const updatedEmployees = UserData.employees.map((employee) => {

    if (employee.id === data.id) {

      return {
        ...employee,

        tasks: updatedTasks,

        taskNumbers: {
          ...employee.taskNumbers,

          newTask: Math.max(
            0,
            employee.taskNumbers.newTask - 1
          ),

          accepted:
            employee.taskNumbers.accepted + 1,
        },
      };
    }

    return employee;
  });


  // Update AuthContext
  const updatedUserData = {
    ...UserData,
    employees: updatedEmployees,
  };

  setUserData(updatedUserData);


  // Update localStorage
  localStorage.setItem(
    "employee",
    JSON.stringify(updatedEmployees)
  );
};

// Complete Task
const handleCompleteTask = (taskNumber) => {

  const updatedTasks = tasks.map((task) => {

    if (task.taskNumber === taskNumber) {

      return {
        ...task,

        taskType: "Completed",

        active: false,
        newTask: false,
        accepted: false,
        completed: true,
        failed: false,
      };
    }

    return task;
  });


  // Update TaskList UI
  setTasks(updatedTasks);


  // Update employee data
  const updatedEmployees = UserData.employees.map((employee) => {

    if (employee.id === data.id) {

      return {
        ...employee,

        tasks: updatedTasks,

        taskNumbers: {
          ...employee.taskNumbers,

          accepted: Math.max(
            0,
            employee.taskNumbers.accepted - 1
          ),

          completed:
            employee.taskNumbers.completed + 1,
        },
      };
    }

    return employee;
  });


  // Update AuthContext
  const updatedUserData = {
    ...UserData,
    employees: updatedEmployees,
  };

  setUserData(updatedUserData);


  // Update localStorage
  localStorage.setItem(
    "employee",
    JSON.stringify(updatedEmployees)
  );
};


// Failed Task
const handleFailTask = (taskNumber) => {

  const updatedTasks = tasks.map((task) => {

    if (task.taskNumber === taskNumber) {

      return {
        ...task,

        taskType: "Failed",

        active: false,
        newTask: false,
        accepted: false,
        completed: false,
        failed: true,
      };
    }

    return task;
  });


  // Update TaskList UI
  setTasks(updatedTasks);


  // Update employee data
  const updatedEmployees = UserData.employees.map((employee) => {

    if (employee.id === data.id) {

      return {
        ...employee,

        tasks: updatedTasks,

        taskNumbers: {
          ...employee.taskNumbers,

          accepted: Math.max(
            0,
            employee.taskNumbers.accepted - 1
          ),

          failed:
            employee.taskNumbers.failed + 1,
        },
      };
    }

    return employee;
  });


  // Update AuthContext
  const updatedUserData = {
    ...UserData,
    employees: updatedEmployees,
  };

  setUserData(updatedUserData);


  // Update localStorage
  localStorage.setItem(
    "employee",
    JSON.stringify(updatedEmployees)
  );
};

  return (
    <div
      className="
        w-full
        h-[300px]
        grid
        grid-cols-4
        overflow-y-auto
        gap-5
        p-3
      "
    >

      {tasks.map((task) => {

        switch (task.taskType) {

          case "New":
            return (
              <NewTask
                key={task.taskNumber}
                task={task}
                onAccept={handleAcceptTask}
              />
            );


          case "Accepted":
            return (
              <AcceptTask
  key={task.taskNumber}
  task={task}
  onComplete={handleCompleteTask}
  onFail={handleFailTask}
/>
            );


          case "Completed":
            return (
              <CompleteTask
                key={task.taskNumber}
                task={task}
              />
            );


          case "Failed":
            return (
              <FailedTask
                key={task.taskNumber}
                task={task}
              />
            );


          default:
            return null;
        }
      })}

    </div>
  );
};

export default TaskList;
