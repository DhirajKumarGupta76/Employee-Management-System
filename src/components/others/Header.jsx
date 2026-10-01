import React from "react";

const Header = ({ data }) => {
  console.log(data);

  const logOutUser = () => {
    // Remove logged-in user from localStorage
    localStorage.removeItem("loggedInUser");

    // Reload the page
    window.location.reload();
  };

  return (
    <div
      className="
        w-full
        bg-slate-900
        text-white
        flex
        items-center
        justify-between
        shadow-lg
      "
    >
      {/* Employee Greeting */}

      <div className="flex flex-col items-center justify-center text-center py-7">

        {/* Employee ID */}
        <div className="text-6xl font-extrabold text-gray-800 mb-2 text-white">
          {data?.id}
        </div>

        {/* Greeting */}
        <p className="text-2xl font-medium text-gray-500">
          Hello,
        </p>

        {/* Employee Name */}
        <h1 className="text-4xl font-bold text-blue-500 mt-1">
          {data?.name} <span className="inline-block">👋</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-400 mt-2">
          Welcome back! Ready to get things done today?
        </p>

      </div>

      {/* Logout Button */}
      <button
        onClick={logOutUser}
        className="
          bg-blue-600
          text-white
          px-5
          py-2
          rounded-xl
          font-semibold
          hover:bg-blue-700
          transition
          duration-300
        "
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
