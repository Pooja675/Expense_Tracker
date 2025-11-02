import React from "react";
import EXPENSES from "../../assets/images/expenses.jpg";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Left Section (Form Side) */}
      <div className="flex flex-col justify-center w-full h-screen md:w-[60vw] px-8 md:px-16 py-10 relative overflow-y-auto">
        <div className="flex items-center space-x-3 mb-6">
          <img
            src="/expense66.png"
            alt="expense-logo"
            className="w-10 h-10 rounded-full shadow-sm"
          />
          {/* Logo / Heading */}
          <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
            Expense Tracker
          </h2>
        </div>

        {/* Form or Auth Content */}
        <div className="flex-1">{children}</div>

        {/* Subtle Footer (Optional) */}
        <p className="text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} Expense Tracker. All rights reserved.
        </p>
      </div>

      {/* Right Section (Visual Side) */}
      <div className="hidden md:flex w-[40vw] h-screen relative bg-gradient-to-br from-violet-100 via-fuchsia-100 to-purple-200 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute w-56 h-56 rounded-[40px] bg-gradient-to-br from-purple-500 to-fuchsia-600 opacity-90 blur-2xl -top-10 -left-10" />
        <div className="absolute w-48 h-60 rounded-[40px] border-[20px] border-fuchsia-400 opacity-70 top-[30%] -right-10 blur-sm" />
        <div className="absolute w-52 h-52 rounded-[40px] bg-gradient-to-tr from-violet-400 to-purple-500 opacity-90 blur-xl -bottom-8 -left-6" />

        {/* Main content overlay */}
        <div className="relative z-20 flex flex-col justify-between p-12 w-full">
          <div>
            <StatsInfoCard
              icon={<LuTrendingUpDown />}
              label="Track your Income & Expenses"
              value="430,000"
              color="bg-primary"
            />
          </div>

          <img
            src={EXPENSES}
            alt="Expense illustration"
            className="w-72 lg:w-[90%] rounded-xl mx-auto shadow-2xl shadow-violet-500/30 border border-white/20 backdrop-blur-sm"
          />
        </div>

        {/* Overlay gradient for subtle depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10 backdrop-blur-sm"></div>
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-6 rounded-lg shadow-md shadow-purple-400/10 border border-gray-200/10 z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">${value}</span>
      </div>
    </div>
  );
};
