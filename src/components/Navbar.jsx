import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  BookOpenCheck,
  UserCircle,
  Wallet,
  Shield,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/home", label: "Home", icon: <LayoutDashboard size={18} /> },
    {
      to: "/course-registration",
      label: "Course Registration",
      icon: <BookOpenCheck size={18} />,
    },
    { to: "/profile", label: "Profile", icon: <UserCircle size={18} /> },
    { to: "/finance", label: "Student Account", icon: <Wallet size={18} /> },
    { to: "/rules", label: "Rules & Regulations", icon: <Shield size={18} /> },
  ];

  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-slate-800">MIS Web</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium transition
                ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 text-sm font-medium
                ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
