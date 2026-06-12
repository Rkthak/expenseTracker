import Balance from "../Components/Balance";
import Header from "../Components/Header";
import TransactionForm from "../Components/TransactionForm";
import DisplayTransactions from "../Sections/DisplayTransactions";

const Dashboard = () => {
  return (
    <div className="p-4 bg-slate-50 min-h-screen">
      <Header />
      <Balance />
      <div className="mt-6 grid lg:grid-cols-[1.5fr_0.85fr] gap-6">
        <DisplayTransactions />
        <TransactionForm />
      </div>
    </div>
  );
};

export default Dashboard;
