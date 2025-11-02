import React from "react";
import { LuDownload } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

const ExpenseList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">All Expenses</h5>

        <button className="card-btn" onClick={onDownload}>
          <LuDownload className="text-base" /> Download
        </button>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2">
        {transactions?.map((expense) => (
          
          <TransactionInfoCard
            key={expense._id}
            shopname={expense.shopname}
            title={expense.category}
            icon={expense.icon}
            date={moment(new Date(expense.date).toISOString()).format(
              "Do MMM YYYY"
            )}
            amount={expense.amount}
            type="expense"
            onDelete={() => onDelete(expense._id)}
          />
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {transactions?.map((expense) => {
          const formattedDate = moment
            .tz(
              moment.utc(expense.date).format("YYYY-MM-DD"),
              "YYYY-MM-DD",
              "America/Toronto"
            )
            .format("Do MMM YYYY");

          return (
            <TransactionInfoCard
              key={expense._id}
              title={expense.category}
              icon={expense.icon}
              date={formattedDate}
              amount={expense.amount}
              type="expense"
              onDelete={() => onDelete(expense._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseList;
