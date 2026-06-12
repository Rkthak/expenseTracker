import { useContext, useState } from "react";
import { TransactionContext } from "../Store/TransactionContext";

const TransactionForm = () => {
  const expenseCategory = ["food", "shopping", "bills", "travels"];
  // const incomeCategory = ["salary", "freelance", "business", "investment"];
  const today = new Date().toISOString().split("T")[0];

  const [transaction, settransaction] = useState({
    id: "",
    amount: "",
    category: "food",
    date: today,
    note: "",
    transactionType: "expense",
  });

  const ipChange = (e) => {
    const { name, value } = e.target;

    // if (name === "transactionType") {
    //   settransaction((prev) => ({
    //     ...prev,
    //     transactionType: value,
    //     category: value === "expense" ? expenseCategory[0] : incomeCategory[0],
    //   }));
    //   return;
    // }

    settransaction({
      ...transaction,
      [name]: value,
      id: Date.now(),
    });
  };

  const { transactions, setTransactions } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, transaction]);
    settransaction({
      amount: "",
      category: "food",
      date: today,
      note: "",
      transactionType: "expense",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4" id="transactionForm">
      <h3 className="text-2xl font-semibold font-['poppins'] capitalize">
        Add {transaction.transactionType}
      </h3>
      <form className="" onSubmit={handleSubmit}>
        <div className="mt-6">
          <input
            type="number"
            name="amount"
            id="amount"
            value={transaction.amount}
            onChange={ipChange}
            placeholder="Add Amount"
            required
            className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl font-['lato'] bg-indigo-50"
          />
        </div>
        <div className="mt-6 flex gap-8">
          <select
            name="category"
            id="category"
            value={transaction.category}
            onChange={ipChange}
            className="w-full capitalize p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl font-['lato'] bg-indigo-50"
          >
            {(transaction.transactionType === "expense"
              ? expenseCategory
              : "incomeCategory"
            ).map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="date"
            name="date"
            id="date"
            value={transaction.date}
            onChange={ipChange}
            max={today}
            placeholder="Add Amount"
            required
            className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl font-['lato'] bg-indigo-50"
          />
        </div>

        <div className="mt-6">
          <input
            type="text"
            name="note"
            id="note"
            value={transaction.note}
            onChange={ipChange}
            placeholder="Add Note"
            required
            className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl font-['lato'] bg-indigo-50"
          />
        </div>
        <div className="mt-6">
          {/* <select
            name="transactionType"
            id="transactionType"
            value={transaction.transactionType}
            onChange={ipChange}
            className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl font-['lato'] bg-indigo-50"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select> */}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full p-2 bg-violet-600 rounded-xl font-['poppins'] font-semibold text-slate-50 cursor-pointer"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
