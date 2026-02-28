import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpenCheck,
  UserCircle,
  Wallet,
  Shield,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col p-6 shadow-sm">
      {/* Logo Section */}
      <div className="mb-12 flex flex-col items-center justify-center">
        <img
          src="data:image/jpeg;base64,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"
          alt="School Logo"
          className="w-10 h-10 "
        />
        <h1 className="text-2xl font-bold text-slate-800">MIS Web</h1>
        <p className="text-sm text-gray-500">Student Portal</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 flex-1">
        <NavLink
          to="/home"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
            ${
              isActive
                ? "bg-blue-50 text-blue-600 shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Home
        </NavLink>

        <NavLink
          to="/course-registration"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
            ${
              isActive
                ? "bg-blue-50 text-blue-600 shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <BookOpenCheck size={18} />
          Course Registration
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
            ${
              isActive
                ? "bg-blue-50 text-blue-600 shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <UserCircle size={18} />
          Profile
        </NavLink>

        <NavLink
          to="/finance"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
    ${
      isActive
        ? "bg-blue-50 text-blue-600 shadow-sm"
        : "text-gray-600 hover:bg-gray-100"
    }`
          }
        >
          <Wallet size={18} />
          Student Account
        </NavLink>
        <NavLink
          to="/rules"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
    ${
      isActive
        ? "bg-blue-50 text-blue-600 shadow-sm"
        : "text-gray-600 hover:bg-gray-100"
    }`
          }
        >
          <Shield size={18} />
          Rules & Regulations
        </NavLink>
      </nav>
    </aside>
  );
}
