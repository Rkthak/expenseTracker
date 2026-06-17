import { useContext, useState } from "react";
import { TransactionContext } from "../Store/TransactionContext";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DisplayTransactions = () => {
  const { transactions, setTransactions } = useContext(TransactionContext);

  const [category, setCategory] = useState("all");
  const [date, setDate] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [sortVal, setSortVal] = useState("");

  const filterdTransactions = transactions
    .filter((item) => {
      // category search
      const categorySearch =
        category === "all" ? true : item.category === category;

      const note = item.note.toLowerCase();
      const categories = item.category.toLowerCase();

      const searched =
        searchVal === ""
          ? true
          : note.includes(searchVal.toLocaleLowerCase()) ||
            categories.includes(searchVal.toLocaleLowerCase()) ||
            item.amount.includes(searchVal);

      const dateFilter = date === "" ? true : item.date === date;

      return categorySearch && searched && dateFilter;
    })
    .sort((a, b) =>
      sortVal === "latest"
        ? new Date(b.date) - new Date(a.date)
        : b.amount - a.amount,
    );

  const handledelete = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white h-full rounded-2xl shadow-xl p-4">
      <div className="">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold font-['poppins'] capitalize">
            Recent transactions
          </h3>
          <button
            type="button"
            onClick={() => {
              setDate("");
              setCategory("all");
              setSearchVal("");
              setSortVal("");
            }}
            className="px-3 py-2 ml-2 font-['poppins'] font-semibold text-slate-50 bg-black cursor-pointer rounded-xl"
          >
            Clear filters
          </button>
        </div>
        <div className="gap-2 flex flex-1 flex-col md:flex-row mt-2">
          <input
            type="text"
            placeholder="Search Transaction"
            name="search"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className=" p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl font-['lato'] bg-indigo-50"
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            className=" p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl font-['lato'] bg-indigo-50"
          >
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="shopping">Shopping</option>
            <option value="bills">Bills</option>
            <option value="travels">Travels</option>
          </select>
          <select
            name="sort"
            id="sort"
            value={sortVal}
            onChange={(e) => setSortVal(e.target.value)}
            className=" p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl font-['lato'] bg-indigo-50"
          >
            <option value="">Sort By</option>
            <option value="latest">Latest</option>
            <option value="highest">Highest</option>
          </select>
          <Flatpickr
            options={{
              dateFormat: "Y-m-d",
              maxDate: "today",
              disableMobile: true,
            }}
            name="date"
            id="date"
            value={date}
            placeholder="filter by date"
            onChange={(selectedDates, dateStr) => {
              setDate(dateStr);
            }}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-xl font-['lato'] bg-indigo-50"
          />
        </div>
      </div>

      {filterdTransactions.length > 0 ? (
        <div className=" py-1 mt-2 max-h-80 lg:max-h-70 overflow-auto">
          {filterdTransactions.map((item) => {
            return (
              <div
                className="bg-violet-50 mt-2 rounded-2xl px-4 py-2 flex flex-col md:flex-row gap-2 justify-between  md:items-center"
                key={item.id}
              >
                <div className="">
                  <p className="capitalize font['lato'] font-medium text-md">
                    {item.note}
                  </p>
                  <span className="text-sm">
                    {item.category} ● {item.date}
                  </span>
                </div>
                <div className="flex gap-4 items-center justify-between">
                  <p className="text-lg font-['lato'] font-semibold text-red-500">
                    <i className="fa-solid fa-indian-rupee-sign text-md"></i>
                    {Number(item.amount).toString().includes("e")
                      ? Number(item.amount).toExponential(2)
                      : Number(item.amount)}
                  </p>
                  <button
                    className="bg-red-500 text-violet-50 px-4 py-1 rounded text-sm font-['poppins']"
                    onClick={() => handledelete(item.id)}
                  >
                    <span className="hidden md:block">Delete</span>

                    <span className="md:hidden">
                      <i className="fa-solid fa-trash"></i>
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-slate-500 text-center py-6 font-['lato']">
          No transaction found
        </p>
      )}
    </div>
  );
};

export default DisplayTransactions;
