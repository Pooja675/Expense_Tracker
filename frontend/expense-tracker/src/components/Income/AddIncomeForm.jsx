import React, { useState } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
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



      <label className="block mb-4">
        <span className="text-gray-700 font-medium mb-2 block">
          Monthly Income:
        </span>
        <select
          value={income.source}
          onChange={({ target }) => handleChange("source", target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500  bg-white text-gray-700"
        >
          <option value="">Select Category</option>
          <option value="Full-time Job Salary">Full-time Job Salary</option>
          <option value="Part-time Job / Freelancing">Part-time Job / Freelancing</option>
          <option value="Bonuses">Bonuses</option>
          <option value="Commissions">Commissions</option>
          <option value="Overtime Pay">Overtime Pay</option>
        </select>
      </label>

      <Input
        value={income.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        palceholder=""
        type="text"
      />

      <Input
        value={income.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        palceholder=""
        type="date"
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="add-btn add-btn-fill"
          onClick={() => onAddIncome(income)}
        >
          Add Income
        </button>
      </div>
    </div>
  );
};

export default AddIncomeForm;
