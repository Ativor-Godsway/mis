import React, { useState } from "react";

const CourseRegistration = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const courses = [
    "DCIT101 - Introduction to Computer Science",
    "DCIT103 - Office Productivity Tools",
    "DCIT105 - Mathematics for IT Professionals",
    "MATH121 - Algebra and Trigonometry",
    "STAT111 - Introduction to Statistics and Probability I",
    "UGRC150 - Critical Thinking and Practical Reasoning",
  ];

  const toggleCourse = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Registration Status Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-blue-800">Registration Open</h2>
        <p className="text-blue-600 text-sm">
          Select the courses you want to register for this semester
        </p>
      </div>

      {/* Courses Selection */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold mb-6">Available Courses</h3>

        <div className="grid md:grid-cols-2 gap-4">
          {courses.map((course, index) => (
            <label
              key={index}
              className={`
                flex items-center gap-4 p-4 rounded-xl cursor-pointer
                border transition
                ${
                  selectedCourses.includes(course)
                    ? "bg-blue-50 border-blue-300"
                    : "hover:bg-gray-50"
                }
              `}
            >
              <input
                type="checkbox"
                checked={selectedCourses.includes(course)}
                onChange={() => toggleCourse(course)}
                className="w-4 h-4"
              />

              <span className="text-sm text-slate-700">{course}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Selected Courses Summary */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold mb-4">
          Selected Courses ({selectedCourses.length})
        </h3>

        <ul className="text-sm text-gray-600 space-y-2">
          {selectedCourses.map((course, i) => (
            <li key={i} className="p-2 bg-gray-50 rounded-lg">
              {course}
            </li>
          ))}
        </ul>

        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
          Submit Registration
        </button>
      </div>
    </div>
  );
};

export default CourseRegistration;
