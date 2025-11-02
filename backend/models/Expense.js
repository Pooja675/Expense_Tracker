const { default: mongoose } = require("mongoose")
const monggose = require("mongoose")

const ExpenseSchema = new monggose.Schema({
    userId: {type: monggose.Schema.Types.ObjectId, ref: "User", required: true},
    icon: {type: String},
    category: {type: String, required:true}, //Example: Food, Rent, Groceries
    amount: {type: Number, reuired: true},
    date: {type: Date, default: Date.now}

}, {timestamps: true}
)

module.exports = mongoose.model("Expense", ExpenseSchema)