import React from "react";

const rules = [
  "Students must register courses within the registration period.",
  "Outstanding fees must be cleared before registration.",
  "Respect academic integrity and avoid malpractice.",
  "Keep login credentials confidential.",
  "Follow university accommodation rules if resident.",
  "Report system errors immediately through complaints tab.",
];

const Rules = () => {
  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl">
        <h1 className="text-2xl font-bold text-blue-800">
          Rules & Regulations
        </h1>

        <p className="text-blue-600 mt-2 text-sm">
          Please read and follow all institutional policies carefully.
        </p>
      </div>

      {/* Rules Cards */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <h2 className="text-lg font-semibold mb-6">Student Guidelines</h2>

        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
            >
              <span className="font-bold text-blue-600">{index + 1}.</span>

              <p className="text-gray-700 text-sm">{rule}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Acceptance Notice */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <p className="text-sm text-gray-600">
          By using this system, you agree to abide by all university policies
          and academic regulations.
        </p>
      </div>
    </div>
  );
};

export default Rules;
