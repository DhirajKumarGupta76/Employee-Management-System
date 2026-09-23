
import React from "react";

const Header = () => {
  return (
    <div
      className="
        w-full
        bg-slate-900
        text-white
        flex
        items-center
        justify-between
        px-6
        py-2
        shadow-lg
      "
    >
      {/* Employee Greeting */}
      <h1 className="text-2xl font-bold">
        Hello,
        <br />

        <span className="text-3xl text-blue-400">
          Dhiraj 👋
        </span>
      </h1>

      {/* Logout Button */}
      <button
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

