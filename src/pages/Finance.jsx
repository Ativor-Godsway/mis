import React from "react";

const transactions = [
  { date: "11-Dec-2025", desc: "Direct Deposit", credit: 3362 },
  { date: "16-Dec-2025", desc: "Telecel Data", debit: 312 },
  { date: "16-Dec-2025", desc: "SRC Scholarship Scheme", debit: 10 },
  { date: "16-Dec-2025", desc: "Library Fee", debit: 200 },
  { date: "16-Dec-2025", desc: "Matriculation", debit: 55 },
  { date: "16-Dec-2025", desc: "Medical Examination", debit: 246 },
  { date: "16-Dec-2025", desc: "Physical Dev't Levy", debit: 193 },
  { date: "14-Jan-2026", desc: "Direct Deposit", credit: 2500 },
];

const schoolFees = 5124;
const totalPaid = 5862;
const balance = -738;

const Finance = () => {
  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="text-gray-500 text-sm">Total School Fees</p>
          <h2 className="text-2xl font-bold text-slate-800">
            GHS {schoolFees.toFixed(2)}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="text-gray-500 text-sm">Total Paid</p>
          <h2 className="text-2xl font-bold text-green-600">
            GHS {totalPaid.toFixed(2)}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="text-gray-500 text-sm">Outstanding Balance</p>
          <h2 className="text-2xl font-bold text-red-600">
            GHS {balance.toFixed(2)}
          </h2>
        </div>
      </div>

      {/* Fee Breakdown Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* School Fees Breakdown */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="font-semibold mb-4">School Fees Breakdown</h3>

          <div className="space-y-3 text-sm">
            <p>🎓 Tuition & Academic Fees</p>
            <p>📚 Academic Support Fees</p>
            <p>🧪 Laboratory & Course Materials</p>
            <p>🏫 SRC & Academic Levies</p>
          </div>
        </div>

        {/* Residential Fees */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="font-semibold mb-4">Residential Fees — Legon Hall</h3>

          <div className="text-sm space-y-2">
            <p>
              🏠 Hall: <b>Legon Hall</b>
            </p>
            <p>💰 Residence Payment: GHS 1250.00</p>
            <p>📍 Campus: Main Campus</p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <h3 className="font-semibold mb-6">Payment & Transaction History</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="text-left py-3">Date</th>
                <th className="text-left py-3">Description</th>
                <th className="text-right py-3">Debit</th>
                <th className="text-right py-3">Credit</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3">{tx.date}</td>
                  <td>{tx.desc}</td>

                  <td className="text-right text-red-600">
                    {tx.debit && `GHS ${tx.debit.toFixed(2)}`}
                  </td>

                  <td className="text-right text-green-600">
                    {tx.credit && `GHS ${tx.credit.toFixed(2)}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Finance;
