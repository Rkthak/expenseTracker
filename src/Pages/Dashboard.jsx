import Balance from "../Components/Balance";
import Header from "../Components/Header";

const Dashboard = () => {
  return (
    <div className="p-4 bg-slate-50 min-h-screen">
      <Header />
      <Balance />
    </div>
  );
};

export default Dashboard;
