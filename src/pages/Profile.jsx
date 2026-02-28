import React, { useState } from "react";
import { Lock, MessageCircle, FileText, BookOpen, LogOut } from "lucide-react";
import Modal from "./Modal";

const Profile = () => {
  const [activeModal, setActiveModal] = useState(null);

  const settingsCards = [
    {
      title: "Change Password",
      icon: <Lock size={18} />,
      key: "password",
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "File a Complaint",
      icon: <MessageCircle size={18} />,
      key: "complaint",
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Academic Records",
      icon: <BookOpen size={18} />,
      key: "records",
      color: "text-green-600 bg-green-50",
    },
    {
      title: "Documents & Forms",
      icon: <FileText size={18} />,
      key: "documents",
      color: "text-orange-600 bg-orange-50",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Profile Summary */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src="/me.jpeg" className="w-28 h-28 rounded-full object-cover" />

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              GODSWAY KWABLA ATIVOR
            </h2>

            <p className="text-gray-500 text-sm">Student Number: 22467813</p>

            <p className="text-gray-500 text-sm">
              Bachelor of Science in Information Technology
            </p>
          </div>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {settingsCards.map((card, index) => (
          <div
            key={index}
            onClick={() => setActiveModal(card.key)}
            className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${card.color}`}>{card.icon}</div>

              <h3 className="font-medium text-slate-700">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <button className="flex items-center gap-3 text-red-600 font-medium">
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Modals */}

      {activeModal === "password" && (
        <Modal title="Change Password" onClose={() => setActiveModal(null)}>
          <div className="space-y-4">
            <input
              placeholder="Current Password"
              className="w-full p-3 border rounded-lg"
            />

            <input
              placeholder="New Password"
              className="w-full p-3 border rounded-lg"
            />

            <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
              Update Password
            </button>
          </div>
        </Modal>
      )}

      {activeModal === "complaint" && (
        <Modal title="Submit Complaint" onClose={() => setActiveModal(null)}>
          <textarea
            placeholder="Describe your complaint..."
            className="w-full p-3 border rounded-lg h-40"
          />

          <button className="mt-4 w-full bg-purple-600 text-white p-3 rounded-lg">
            Submit Complaint
          </button>
        </Modal>
      )}

      {activeModal === "records" && (
        <Modal title="Academic Records" onClose={() => setActiveModal(null)}>
          <p className="text-sm text-gray-600">
            Academic records are securely managed by the registrar's office.
          </p>
        </Modal>
      )}

      {activeModal === "documents" && (
        <Modal title="Documents & Forms" onClose={() => setActiveModal(null)}>
          <p className="text-sm text-gray-600">
            Download official student documents and forms here.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Profile;
