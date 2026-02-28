import React from "react";

const subjects = [
  {
    code: "DCIT101",
    name: "Introduction to Computer Science",
    result: "Pending",
  },
  { code: "DCIT103", name: "Office Productivity Tools", result: "Pending" },
  {
    code: "DCIT105",
    name: "Mathematics for IT Professionals",
    result: "Pending",
  },
  { code: "MATH121", name: "Algebra and Trigonometry", result: "Pending" },
  {
    code: "STAT111",
    name: "Introduction to Statistics and Probability I",
    result: "Pending",
  },
  {
    code: "UGRC150",
    name: "Critical Thinking and Practical Reasoning",
    result: "Pending",
  },
];

const Home = () => {
  return (
    <div className="space-y-8">
      {/* PROFILE + QUALIFICATION CARD */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center gap-6">
          <img
            src="me.jpeg"
            alt="Student"
            className="w-24 h-24 rounded-full object-cover border "
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800">John Doe</h2>

            <p className="text-gray-500">Student No: 22467813</p>

            <p className="text-gray-600 mt-2 font-medium">
              BACHELOR OF SCIENCE IN INFORMATION TECH.
            </p>

            <p className="text-sm text-gray-500">
              PSCIT3 | Level 100 | First Semester
            </p>
          </div>
        </div>
      </div>

      {/* ACADEMIC CONTEXT */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">
          Academic Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-gray-500">Faculty</p>
            <p className="font-medium">
              School of Physical & Mathematical Sciences
            </p>
          </div>

          <div>
            <p className="text-gray-500">Department</p>
            <p className="font-medium">Department of Computer Science</p>
          </div>

          <div>
            <p className="text-gray-500">Registration Year</p>
            <p className="font-medium">2026</p>
          </div>

          <div>
            <p className="text-gray-500">Registration Period</p>
            <p className="font-medium">01-Sep-2025 to 30-May-2026</p>
          </div>
        </div>
      </div>

      {/* RESULTS SECTION (PRIMARY FOCUS) */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-slate-700 mb-6">
          First Semester Results
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="pb-3">Code</th>
                <th className="pb-3">Subject</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {subjects.map((subject, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-50 transition"
                >
                  <td className="py-4 font-medium text-slate-700">
                    {subject.code}
                  </td>
                  <td className="py-4 text-gray-600">{subject.name}</td>
                  <td className="py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                      {subject.result}
                    </span>
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

export default Home;
