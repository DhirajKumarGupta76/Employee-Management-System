// localStorage.clear()
const Employees = [
  {
    id: 1,
    name: "Dhiraj",
    email: "employee1@gmail.com",
    password: "123",

    taskNumbers: {
      newTask: 2,
      completed: 1,
      accepted: 1,
      failed: 1
    },

    tasks: [
      {
        taskNumber: 101,
        taskType: "New",
        active: true,
        newTask: true,
        completed: false,
        accepted: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription:
          "Create a responsive login page with email and password fields.",
        taskDate: "2026-09-24",
        category: "Development"
      },
      {
        taskNumber: 102,
        taskType: "Completed",
        active: false,
        newTask: false,
        completed: true,
        accepted: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDescription:
          "Create the initial dashboard UI design for the application.",
        taskDate: "2026-09-22",
        category: "Design"
      },
      {
        taskNumber: 103,
        taskType: "Accepted",
        active: true,
        newTask: false,
        completed: false,
        accepted: true,
        failed: false,
        taskTitle: "Fix API Bug",
        taskDescription:
          "Fix the authentication API response issue.",
        taskDate: "2026-09-24",
        category: "Backend"
      },
      {
        taskNumber: 104,
        taskType: "Failed",
        active: false,
        newTask: false,
        completed: false,
        accepted: false,
        failed: true,
        taskTitle: "Database Migration",
        taskDescription:
          "Migrate the existing employee data to the new database.",
        taskDate: "2026-09-20",
        category: "Database"
      },
      {
        taskNumber: 105,
        taskType: "New",
        active: true,
        newTask: true,
        completed: false,
        accepted: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription:
          "Prepare documentation for the authentication module.",
        taskDate: "2026-09-25",
        category: "Documentation"
      }
    ]
  },

  {
    id: 2,
    name: "Priya",
    email: "employee2@gmail.com",
    password: "123",

    taskNumbers: {
      newTask: 2,
      completed: 1,
      accepted: 1,
      failed: 1
    },

    tasks: [
      {
        taskNumber: 201,
        taskType: "New",
        active: true,
        newTask: true,
        completed: false,
        accepted: false,
        failed: false,
        taskTitle: "Create Product Component",
        taskDescription:
          "Develop a reusable product card component using React.",
        taskDate: "2026-09-24",
        category: "Frontend"
      },
      {
        taskNumber: 202,
        taskType: "Completed",
        active: false,
        newTask: false,
        completed: true,
        accepted: false,
        failed: false,
        taskTitle: "Update Navbar",
        taskDescription:
          "Improve the navigation bar and add responsive menu support.",
        taskDate: "2026-09-21",
        category: "Frontend"
      },
      {
        taskNumber: 203,
        taskType: "Accepted",
        active: true,
        newTask: false,
        completed: false,
        accepted: true,
        failed: false,
        taskTitle: "Test User API",
        taskDescription:
          "Test all user-related API endpoints using Postman.",
        taskDate: "2026-09-24",
        category: "Testing"
      },
      {
        taskNumber: 204,
        taskType: "Failed",
        active: false,
        newTask: false,
        completed: false,
        accepted: false,
        failed: true,
        taskTitle: "Deploy Application",
        taskDescription:
          "Deploy the latest application build to the production server.",
        taskDate: "2026-09-19",
        category: "Deployment"
      },
      {
        taskNumber: 205,
        taskType: "New",
        active: true,
        newTask: true,
        completed: false,
        accepted: false,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription:
          "Compress application images to improve page loading speed.",
        taskDate: "2026-09-26",
        category: "Performance"
      }
    ]
  },

  {
    id: 3,
    name: "Amit",
    email: "employee3@gmail.com",
    password: "123",

    taskNumbers: {
      newTask: 1,
      completed: 2,
      accepted: 1,
      failed: 1
    },

    tasks: [
      {
        taskNumber: 301,
        taskType: "New",
        active: true,
        newTask: true,
        completed: false,
        accepted: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription:
          "Add search functionality for employee records.",
        taskDate: "2026-09-24",
        category: "Development"
      },
      {
        taskNumber: 302,
        taskType: "Completed",
        active: false,
        newTask: false,
        completed: true,
        accepted: false,
        failed: false,
        taskTitle: "Create Employee Model",
        taskDescription:
          "Create the database model for employee information.",
        taskDate: "2026-09-20",
        category: "Database"
      },
      {
        taskNumber: 303,
        taskType: "Accepted",
        active: true,
        newTask: false,
        completed: false,
        accepted: true,
        failed: false,
        taskTitle: "Add Form Validation",
        taskDescription:
          "Add client-side validation to the employee registration form.",
        taskDate: "2026-09-25",
        category: "Frontend"
      },
      {
        taskNumber: 304,
        taskType: "Completed",
        active: false,
        newTask: false,
        completed: true,
        accepted: false,
        failed: false,
        taskTitle: "Fix Responsive Issues",
        taskDescription:
          "Fix layout issues on mobile and tablet screen sizes.",
        taskDate: "2026-09-22",
        category: "UI/UX"
      },
      {
        taskNumber: 305,
        taskType: "Failed",
        active: false,
        newTask: false,
        completed: false,
        accepted: false,
        failed: true,
        taskTitle: "Setup Email Service",
        taskDescription:
          "Configure the email service for sending notifications.",
        taskDate: "2026-09-18",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    name: "Sneha",
    email: "employee4@gmail.com",
    password: "123",

    taskNumbers: {
      newTask: 1,
      completed: 2,
      accepted: 1,
      failed: 1
    },

    tasks: [
      {
        taskNumber: 401,
        taskType: "New",
        active: true,
        newTask: true,
        completed: false,
        accepted: false,
        failed: false,
        taskTitle: "Create Admin Panel",
        taskDescription:
          "Develop the admin panel for managing employees and tasks.",
        taskDate: "2026-09-24",
        category: "Development"
      },
      {
        taskNumber: 402,
        taskType: "Completed",
        active: false,
        newTask: false,
        completed: true,
        accepted: false,
        failed: false,
        taskTitle: "Add Logout Feature",
        taskDescription:
          "Implement logout functionality and clear authentication data.",
        taskDate: "2026-09-21",
        category: "Authentication"
      },
      {
        taskNumber: 403,
        taskType: "Accepted",
        active: true,
        newTask: false,
        completed: false,
        accepted: true,
        failed: false,
        taskTitle: "Create Task API",
        taskDescription:
          "Create APIs for adding, updating, and deleting tasks.",
        taskDate: "2026-09-25",
        category: "Backend"
      },
      {
        taskNumber: 404,
        taskType: "Completed",
        active: false,
        newTask: false,
        completed: true,
        accepted: false,
        failed: false,
        taskTitle: "Update Database",
        taskDescription:
          "Add task-related fields to the employee database.",
        taskDate: "2026-09-20",
        category: "Database"
      },
      {
        taskNumber: 405,
        taskType: "Failed",
        active: false,
        newTask: false,
        completed: false,
        accepted: false,
        failed: true,
        taskTitle: "Server Configuration",
        taskDescription:
          "Configure the application server for deployment.",
        taskDate: "2026-09-17",
        category: "DevOps"
      }
    ]
  },

  {
    id: 5,
    name: "Vikash",
    email: "employee5@gmail.com",
    password: "123",

    taskNumbers: {
      newTask: 1,
      completed: 2,
      accepted: 1,
      failed: 1
    },

    tasks: [
      {
        taskNumber: 501,
        taskType: "New",
        active: true,
        newTask: true,
        completed: false,
        accepted: false,
        failed: false,
        taskTitle: "Build Profile Page",
        taskDescription:
          "Create an employee profile page displaying personal information.",
        taskDate: "2026-09-24",
        category: "Frontend"
      },
      {
        taskNumber: 502,
        taskType: "Completed",
        active: false,
        newTask: false,
        completed: true,
        accepted: false,
        failed: false,
        taskTitle: "Create User API",
        taskDescription:
          "Develop API endpoints for creating and retrieving users.",
        taskDate: "2026-09-21",
        category: "Backend"
      },
      {
        taskNumber: 503,
        taskType: "Accepted",
        active: true,
        newTask: false,
        completed: false,
        accepted: true,
        failed: false,
        taskTitle: "Implement Authentication",
        taskDescription:
          "Implement login authentication using email and password.",
        taskDate: "2026-09-25",
        category: "Authentication"
      },
      {
        taskNumber: 504,
        taskType: "Completed",
        active: false,
        newTask: false,
        completed: true,
        accepted: false,
        failed: false,
        taskTitle: "Test Login System",
        taskDescription:
          "Test login functionality with valid and invalid credentials.",
        taskDate: "2026-09-22",
        category: "Testing"
      },
      {
        taskNumber: 505,
        taskType: "Failed",
        active: false,
        newTask: false,
        completed: false,
        accepted: false,
        failed: true,
        taskTitle: "Fix UI Bug",
        taskDescription:
          "Fix alignment and spacing issues in the employee dashboard.",
        taskDate: "2026-09-19",
        category: "UI/UX"
      }
    ]
  }
];

const Admin = [
  {
    id: 100,
    name: "Rakesh",
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(Employees));
  localStorage.setItem("admin", JSON.stringify(Admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employee"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
 

