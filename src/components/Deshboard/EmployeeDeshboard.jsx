import React from 'react'

import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDeshboard = () => {
  return (
     <div className="bg-[#1f1f1f] min-h-screen text-white p-0 flex flex-col gap-8">

      {/* Header */}
      <Header />

      {/* Task Numbers */}
      <div className="mt-5 ">
        <TaskListNumber />
      </div>

      {/* Task List */}
      <div className="mt-5">
        <TaskList />
      </div>

    </div>
  )
}

export default EmployeeDeshboard