
import React from "react";
import { useState } from "react";

const Login = () => {
    // we are geeting email && password
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log({email})
    console.log({password})

    // Afetr submitting form wll Blanks;
    setemail('')
    setpassword("")
  };

  return (
    // Main page
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center p-5">

      {/* Main Login Card */}
      <div className="
        w-full
        max-w-5xl
        min-h-[600px]
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        rounded-3xl
        shadow-2xl
        overflow-hidden
        flex
        flex-col
        md:flex-row
      ">

        {/* ================= LEFT SIDE ================= */}

        <div className="
          w-full
          md:w-1/2
          bg-white
          flex
          items-center
          justify-center
          p-8
          md:p-12
        ">

          {/* Form Container */}
          <div className="w-full max-w-md">

            {/* Heading */}
            <div className="mb-8">

              <h1 className="text-4xl font-bold text-gray-900">
                Welcome Back 👋
              </h1>

              <p className="text-gray-500 mt-2">
                Login to your account and continue your journey.
              </p>

            </div>

            {/* Login Form */}
            <form
              onSubmit={submitHandler}
              className="flex flex-col gap-5"
            >

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                value={email}
                onChange={(e)=>{
                    // console.log("is changing")
                    // console.log(e.target.value)
                    setemail(e.target.value)
                    // console.log({email})
                }}
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-300
                    bg-gray-50
                    text-gray-900
                    outline-none
                    transition
                    focus:border-purple-600
                    focus:ring-2
                    focus:ring-purple-200
                  "
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>

                <input
                value={password}
                onChange={(e)=>{
                    // console.log("is changing")
                    // console.log(e.target.value)
                    setpassword(e.target.value)
                    // console.log({password})
                }}
                  required
                  type="password"
                  placeholder="Enter your password"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-300
                    bg-gray-50
                    text-gray-900
                    outline-none
                    transition
                    focus:border-purple-600
                    focus:ring-2
                    focus:ring-purple-200
                  "
                />
              </div>

              {/* Remember Me + Forgot Password */}
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-gray-600 cursor-pointer">

                  <input
                    type="checkbox"
                    className="
                      w-4
                      h-4
                      accent-purple-600
                      cursor-pointer
                    "
                  />

                  Remember me
                </label>

                <button
                  type="button"
                  className="
                    text-purple-600
                    font-medium
                    hover:text-purple-800
                    hover:underline
                  "
                >
                  Forgot Password?
                </button>

              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="
                  w-full
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-600
                  to-indigo-600
                  text-white
                  font-semibold
                  shadow-lg
                  shadow-purple-500/30
                  hover:from-purple-700
                  hover:to-indigo-700
                  hover:scale-[1.01]
                  transition
                  duration-300
                "
              >
                Sign In
              </button>

              {/* OR Divider */}

              <div className="flex items-center gap-3 my-1">

                <div className="h-px bg-gray-300 flex-1"></div>

                <span className="text-gray-400 text-sm">
                  OR
                </span>

                <div className="h-px bg-gray-300 flex-1"></div>

              </div>

              {/* Google Login */}
              <button
                type="button"
                className="
                  w-full
                  py-3
                  rounded-xl
                  border
                  border-gray-300
                  bg-white
                  text-gray-700
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:bg-gray-50
                  hover:shadow-md
                  transition
                "
              >

                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="w-5 h-5"
                />

                Continue with Google

              </button>

              {/* Sign Up */}
              <p className="text-center text-sm text-gray-500 mt-3">

                Don't have an account?

                <button
                  type="button"
                  className="
                    ml-1
                    text-purple-600
                    font-semibold
                    hover:underline
                  "
                >
                  Sign Up
                </button>

              </p>

            </form>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="
          hidden
          md:flex
          md:w-1/2
          relative
          items-center
          justify-center
          overflow-hidden
        ">

          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=1000&auto=format&fit=crop&q=80"
            alt="Sports"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          {/* Dark Overlay */}
          <div className="
            absolute
            inset-0
            bg-gradient-to-br
            from-purple-900/80
            via-indigo-900/60
            to-black/70
          "></div>

          {/* Right Side Content */}
          <div className="
            relative
            z-10
            text-white
            p-12
            max-w-lg
          ">

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-white/20
              backdrop-blur-md
              flex
              items-center
              justify-center
              text-2xl
              mb-6
            ">
              ⚡
            </div>

            <h2 className="
              text-4xl
              font-bold
              leading-tight
              mb-5
            ">
              Build Your Future.
              <br />
              Start Today.
            </h2>

            <p className="
              text-white/80
              text-lg
              leading-relaxed
            ">
              Welcome to your personalized dashboard.
              Login to access your account, manage your
              profile and explore everything we have to offer.
            </p>

            {/* Small Features */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">
                  ✓
                </span>

                <span className="text-white/90">
                  Secure authentication
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">
                  ✓
                </span>

                <span className="text-white/90">
                  Fast and easy access
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">
                  ✓
                </span>

                <span className="text-white/90">
                  Modern user experience
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;


