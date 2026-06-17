import { useContext } from "react";
import Balance from "../Components/Balance";
import DisplayChart from "../Components/DisplayChart";
import Header from "../Components/Header";
import TransactionForm from "../Components/TransactionForm";
import DisplayTransactions from "../Sections/DisplayTransactions";
import { ThemeContext } from "../Store/ThemeContext";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme}  p-4 bg-slate-50 min-h-screen dark:bg-slate-900 transition-colors duration-1000`}
    >
      <Header />
      <Balance />
      <div className="mt-6 grid lg:grid-cols-[1.5fr_0.85fr] gap-6">
        <DisplayTransactions />
        <TransactionForm />
      </div>
      <DisplayChart />
    </div>
  );
};

export default Dashboard;
