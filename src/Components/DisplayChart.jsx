import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useContext } from "react";

import { Pie } from "react-chartjs-2";
import { TransactionContext } from "../Store/TransactionContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const DisplayChart = () => {
  const { transactions } = useContext(TransactionContext);

  // lables for chart
  const categories = transactions.map((item) => item.category);
  const uniqueCategories = [...new Set(categories)];

  // data for chart
  const foods = transactions
    .filter((item) => item.category === "food")
    .reduce((acc, curr) => {
      return acc + Number(curr.amount);
    }, 0);
  const shoppinglist = transactions
    .filter((item) => item.category === "shopping")
    .reduce((acc, curr) => {
      return acc + Number(curr.amount);
    }, 0);
  const bills = transactions
    .filter((item) => item.category === "bills")
    .reduce((acc, curr) => {
      return acc + Number(curr.amount);
    }, 0);
  const travels = transactions
    .filter((item) => item.category === "travels")
    .reduce((acc, curr) => {
      return acc + Number(curr.amount);
    }, 0);

  const total = foods + shoppinglist + bills + travels;

  const data = {
    labels: uniqueCategories,
    datasets: [
      {
        label: "Expense",
        data: [foods, shoppinglist, bills, travels],
        backgroundColor: ["#4F46E5", "#EC4899", "#10B981", "#F59E0B"],
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            const percentage = ((value / total) * 100).toFixed(1);

            return `${context.label}: ₹${value.toLocaleString(
              "en-IN",
            )} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="mt-6 bg-white h-full rounded-2xl shadow-xl p-4">
      <h3 className="text-xl font-semibold font-['poppins'] capitalize">
        Category-wise Expenses
      </h3>

      <div className="max-h-87 grid place-content-center">
        <Pie data={data} options={options} />
      </div>

      <p className="text-slate-500 font-medium font-['poppins']">
        Total = <i className="fa-solid fa-indian-rupee-sign text-md"></i>
        {total}
      </p>
    </div>
  );
};

export default DisplayChart;
