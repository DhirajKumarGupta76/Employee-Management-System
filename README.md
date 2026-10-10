# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


## How to Login

### Admin
Use the following demo account:

- Email: `admin@gmail.com`
- Password: `123`

Admin can:
- Create tasks
- Assign tasks to employees
- View all tasks
- Monitor task statistics

### Employee
Use the following demo account:

- Email: `employee1@gmail.com`
- Password: `123`

Employee can:
- View assigned tasks
- Accept tasks
- Complete tasks
- Mark tasks as failed

## FLOW OF This Project
                    App.jsx
                       |
                       |
                AuthProvider
                       |
                  AuthContext
                       |
              ┌────────┴────────┐
              |                 |
           Login.jsx         Logged In
                                |
                    ┌───────────┴───────────┐
                    |                       |
                  Admin                 Employee
                    |                       |
                    ↓                       ↓
           AdminDashboard          EmployeeDashboard
                                            |
                                            ↓
                                         Header
                                            |
                                            ↓
                                      TaskListNumber
                                            |
                                            ↓
                                         TaskList
                                            |
                          ┌─────────────────┼─────────────────┐
                          ↓                 ↓                 ↓
                       NewTask          AcceptTask       CompleteTask
                                                                |
                                                                ↓
                                                            FailedTask

##  AuthData provide 
authData
   |
   └── UserData
          |
          ├── employees
          |
          └── admin

## Functionality
Current completed functionality
✅ Admin Dashboard navigation
✅ Create Task
✅ Store created task
✅ Show task in All Tasks
✅ Assign task to employee
✅ Employee task workflow
New → Accept
Accept → Complete
Accept → Failed
✅ Admin statistics update dynamically
✅ Recent Tasks update dynamically
✅ Data persists in localStorage
✅ Employee remains logged in after refresh

work at  http://localhost:5174/


## Employees System Management

                 EMPLOYEE MANAGEMENT SYSTEM
                          │
             ┌────────────┴────────────┐
             │                         │
           ADMIN                    EMPLOYEE
             │                         │
      Create/View Tasks          View/Manage Tasks
             │                         │
             └────────────┬────────────┘
                          │
                    AuthContext
                          │
                     localStorage

##  Contains file && Folder
  src/
│
├── App.jsx
│
├── context/
│   └── AuthProvider.jsx
│
├── utils/
│   └── LocalStorage.js
│
├── components/
│   │
│   ├── Auth/
│   │   └── Login.jsx
│   │
│   ├── Deshboard/
│   │   ├── AdminDeshboard.jsx
│   │   └── EmployeeDeshboard.jsx
│   │
│   ├── TaskList/
│   │   ├── TaskList.jsx
│   │   ├── NewTask.jsx
│   │   ├── CompleteTask.jsx
│   │   ├── AcceptedTask.jsx
│   │   └── FailedTask.jsx
│   │
│   └── others/
│       ├── CreateTask.jsx
│       ├── AllTask.jsx
│       ├── Header.jsx
│       └── TaskListNumber.jsx
│
└── main.jsx 

## Context ->rapping a App components which recive all Componets of app By import Without Propt receive UserData fron AuthContext

<AuthProvider>
    <App />
</AuthProvider>

AuthProvider
      │
      └── App
           │
           ├── Login
           ├── AdminDashboard
           └── EmployeeDashboard




6. AuthProvider becomes the central data store    

stores all employees + admin inside the UserData state.

   const [UserData, setUserData] = useState(null);
     {
  employees: [...],
  admin: [...]
}

AuthProvider
    │
    └── children = <App />

    is simply receiving <App /> as a prop.

┌─────────────────────────────┐
│        AuthProvider         │
│                             │
│   UserData                  │
│   setUserData               │
│                             │
│   ┌─────────────────────┐   │
│   │        App          │   │ ← children
│   └─────────────────────┘   │
│                             │
└─────────────────────────────┘

AuthProvider
    │
    └── App
         ├── AdminDashboard     → UserData ->stores all employees + admin inside the UserData state.
         ├── CreateTask         → UserData
         ├── AllTask            → UserData
         └── EmployeeDashboard  → UserData
              └── TaskList      → UserData


## Flow of UpdateEmployee Data 

return { updated employee }
          ↓
       map()
          ↓
updatedEmployees
          ↓
updatedUserData
          ↓
setUserData(updatedUserData)
          ↓
React Context
          ↓
All components using UserData

## Role of Local Stoarge

In our current Employee Management System, we are using **browser `localStorage`** to store employee, admin, and task data. This means the data is stored **inside the specific browser and origin** where we run the application. For example, if we create a task in Chrome on `localhost:5174`, that updated task is stored in Chrome's localStorage.

If we open the same project in another browser, such as Edge, it will have its **own localStorage**, so it will not automatically see the changes made in Chrome. Similarly, `localhost:5173` and `localhost:5174` are treated as different origins, so they can also have separate localStorage data.

When our application starts, `setLocalStorage()` checks whether employee and admin data already exists in that browser. If it doesn't exist, it stores the initial employee and admin data there. After that, `getLocalStorage()` reads that data and `setUserData(data)` puts the complete data into our React Context.

Therefore, our current project is **not using a shared database**. The data is local to each browser/origin. If we want multiple users or different browsers to see the **same tasks, employees, and updates**, we would need a **backend and database**, such as Node.js/Express with MongoDB. Then all browsers would communicate with the backend, and the backend would store and provide the common data.

# Employee Management System

## How to Use

## How to Login
 ## Add Dicription
React-based Employee Management System with admin and employee roles. Admins can create, assign, and monitor tasks, while employees can accept, complete, or fail tasks. Built with React, JavaScript, Tailwind CSS, Context API, and LocalStorage. Includes demo login credentials for both roles.