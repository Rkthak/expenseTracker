const Balance = () => {
  return    <div className="grid md:grid-cols-3 gap-8 mt-6">
        <div className="flex justify-between items-center bg-white p-4 rounded-2xl">
          <div className="">
            <p className="text-xs text-slate-500 mb-1 font-['poppins']">
              Total Balance
            </p>
            <h2 className="font-bold text-slate-900 text-2xl font-['lato']">
              <i className="fa-solid fa-indian-rupee-sign"></i>0
            </h2>
          </div>
          <div className="flex justify-between items-center bg-indigo-600 p-4 rounded-xl">
            <i className="fa-solid fa-indian-rupee-sign text-slate-50 font-['lato']"></i>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white p-4 rounded-2xl">
          <div className="">
            <p className="text-xs text-slate-500 mb-1 font-['poppins']">
              Income
            </p>
            <h2 className="font-bold text-green-500 text-2xl font-['lato']">
              <i className="fa-solid fa-indian-rupee-sign"></i>0
            </h2>
          </div>
          <div className="flex justify-between items-center bg-green-500 p-4 rounded-xl">
            <i className="fa-solid fa-plus text-slate-50 font-['lato']"></i>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white p-4 rounded-2xl">
          <div className="">
            <p className="text-xs text-slate-500 mb-1 font-['poppins']">
              Expenses
            </p>
            <h2 className="font-bold text-red-500 text-2xl font-['lato']">
              <i className="fa-solid fa-indian-rupee-sign"></i>0
            </h2>
          </div>
          <div className="flex justify-between items-center bg-red-500 p-4 rounded-xl">
            <i className="fa-solid fa-minus text-slate-50 font-['lato']"></i>
          </div>
        </div>
      </div>;
};

export default Balance;
