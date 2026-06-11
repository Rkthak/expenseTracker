import Balance from "../Components/Balance";
import Header from "../Components/Header";
import TransactionForm from "../Components/TransactionForm";

const Dashboard = () => {
  return (
    <div className="p-4 bg-slate-50 min-h-screen">
      <Header />
      <Balance />
      <div className="mt-6">
        <TransactionForm />
      </div>
    </div>
  );
};

export default Dashboard;
