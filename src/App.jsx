import { Outlet } from "react-router-dom";
import Sidebar from "./components/SIdebar";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
