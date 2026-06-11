const Btnsec = () => {
  const goToTransactionForm = () => {
    const TransactionForm = document.getElementById("transactionForm");
    TransactionForm.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      <button className="cursor-pointer px-4 py-2 rounded-2xl bg-slate-900 text-slate-50 font-['poppins'] font-semibold md:mx-8 mr-8">
        Dark
      </button>
      <button
        className="cursor-pointer px-4 py-2 rounded-2xl bg-indigo-600 text-slate-50 font-['poppins'] font-semibold hover:scale-110 transition-transform"
        onClick={goToTransactionForm}
      >
        + Add Expense
      </button>
    </div>
  );
};

export default Btnsec;
