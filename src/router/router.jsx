// src/router.jsx
import { createBrowserRouter } from "react-router-dom"; // Import createBrowserRouter
import App from "../App";
import Home from "../pages/Home";
import CourseRegistration from "../pages/CourseRegistration";
import Profile from "../pages/Profile";
import Finance from "../pages/Finance";
import Rules from "../pages/Rules";
import Login from "../pages/Login";
import AuthLayout from "../AuthLayout";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [{ path: "/", element: <Login /> }],
  },
  {
    element: <App />, // This will be the layout wrapper
    children: [
      { path: "/home", element: <Home /> }, // Home page
      { path: "/course-registration", element: <CourseRegistration /> }, // Course Registration page
      { path: "/profile", element: <Profile /> }, // Profile page (placeholder)
      { path: "/finance", element: <Finance /> },
      { path: "/rules", element: <Rules /> },

      //   // 🔐 Protected Routes
      //   {
      //     element: <ProtectedRoute />,
      //     children: [
      //       { path: "home", element: <HomePage /> },
      //       { path: "profile", element: <ProfilePage /> },
      //       // { path: "profile/:id", element: <ProfilePage /> },
      //     ],
      //   },
    ],
  },
]);

export default router; // Export the router for use in main.jsx
