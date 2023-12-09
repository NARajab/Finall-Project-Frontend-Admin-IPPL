import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardMainLayout from "./components/dashboard-components/DashboardMainLayout";

import "./App.css";
import Home from "./pages/admin-page/dashboard-pages/Home";
import CourseManagement from "./pages/admin-page/dashboard-pages/CourseManagement";
import LoginPage from "./pages/admin-page/login-pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardMainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="class-management">
            <Route index={true} element={<CourseManagement />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
