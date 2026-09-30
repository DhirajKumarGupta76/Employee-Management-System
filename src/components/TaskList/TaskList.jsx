import React, { useState } from "react";

import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {

  const [tasks, setTasks] = useState(data.tasks);

  // Accept Task
  const handleAcceptTask = (taskNumber) => {

    setTasks((prevTasks) =>
      prevTasks.map((task) => {

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
      })
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
