import { useContext } from "react";
import { TransactionContext } from "../Store/TransactionContext";

const DisplayTransactions = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <div className="bg-white h-full rounded-2xl shadow-xl p-4">
      <div className="">
        <h3 className="text-xl font-semibold font-['poppins'] capitalize">
          Recent transactions
        </h3>

        <div className="gap-2 flex flex-1 flex-col md:flex-row mt-2">
          <input
            type="text"
            placeholder="Search Transaction"
            className=" p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl font-['lato'] bg-indigo-50"
          />
          <select
            name=""
            id=""
            className=" p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl font-['lato'] bg-indigo-50"
          >
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="shopping">Shopping</option>
            <option value="bills">Bills</option>
            <option value="travels">Travels</option>
          </select>
          <select
            name=""
            id=""
            className=" p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl font-['lato'] bg-indigo-50"
          >
            <option value="latest">Latest</option>
            <option value="highest">Highest</option>
          </select>
          <input
            type="date"
            className="p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl font-['lato'] bg-indigo-50"
          />
        </div>
      </div>

      {transactions.length > 0 ? (
        <div className="px-2 py-1 mt-2 max-h-80 lg:max-h-70 overflow-auto">
          {transactions.map((item) => {
            return (
              <div
                className="bg-violet-50 mt-2 rounded-2xl p-2 flex justify-between items-center"
                key={item.id}
              >
                <div className="">
                  <p className="capitalize font['lato'] font-medium text-md">
                    {item.note}{" "}
                  </p>
                  <span className="text-sm"> {item.category} </span>
                  <span className="text-sm">● {item.date} </span>
                </div>
                <div className="flex gap-4 items-center">
                  <p className="text-lg font-['lato'] font-semibold text-red-500">
                    <i className="fa-solid fa-indian-rupee-sign text-md"></i>
                    {item.amount}
                  </p>
                  <button className="bg-red-500 text-violet-50 px-4 py-1 rounded text-sm font-['poppins']">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-slate-500 text-center py-6 font-['lato']">
          No expenses added yet
        </p>
      )}
    </div>
  );
};

export default DisplayTransactions;
