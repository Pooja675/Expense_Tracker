import React, { useState } from "react";
import EmojiPickerPopup from "../EmojiPickerPopup";
import Input from "../Inputs/Input";

const AddExpenseForm = ({ onAddExpense }) => {
  const [income, setIncome] = useState({
    category: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => setIncome({ ...income, [key]: value });
  return (
    <div>
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      {/* <Input
        value={income.shopname}
        onChange={({ target }) => handleChange("shopname", target.value)}
        label="Shop Name"
        placeholder=""
        type="text"
      /> */}

      <label className="block mb-4">
        <span className="text-gray-700 font-medium mb-2 block">Category:</span>
        <select
          value={income.category}
          onChange={({ target }) => handleChange("category", target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500  bg-white text-gray-700"
        >
          <option value="">Select Category</option>
          <option value="Home Maintenance">Home Maintenance</option>
          <option value="Utilities">Utilities</option>
          <option value="Grocery">Grocery</option>
          <option value="Rent / Mortgage">Rent / Mortgage</option>
          <option value="Travel">Travel</option>
          <option value="Electricity">Electricity</option>
          <option value="Healthcare / Doctor">Healthcare / Doctor</option>
          <option value="Personal Care">Personal Care</option>

        </select>
      </label>

      <Input
        value={income.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        placeholder=""
        type="number"
      />

      <Input
        value={income.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        placeholder=""
        type="date"
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="add-btn add-btn-fill"
          onClick={() => onAddExpense(income)}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddExpenseForm;
