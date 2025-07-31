import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import Professors from './pages/admin/Professors';
import Students from './pages/admin/Students';
import Classes from './pages/admin/Classes';
import Grades from './pages/admin/Grades';
import Complaints from './pages/admin/Complaints';
import Transcripts from './pages/admin/Transcripts';

// Professor Pages
import ProfessorDashboard from './pages/professor/ProfessorDashboard';
import MyClasses from './pages/professor/MyClasses';
import MyStudents from './pages/professor/MyStudents';
import ManageGrades from './pages/professor/ManageGrades';
import ProfessorComplaints from './pages/professor/ProfessorComplaints';

// Student Pages
import StudentDashboard from './pages/student/StudentDashboard';
import MyGrades from './pages/student/MyGrades';
import SubmitComplaint from './pages/student/SubmitComplaint';
import RequestTranscript from './pages/student/RequestTranscript';

// Common Pages
import Login from './auth/Login';
import Register from './auth/Register';
import Profile from './pages/common/Profile';
import Unauthorized from './pages/common/Unathorized';

// Layout
import AdminLayout from './layouts/AdminLayout';
import ProfessorLayout from './layouts/ProfessorLayout';
import StudentLayout from './layouts/StudentLayout';

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Admin Routes */}
      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/professors" element={<Professors />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/classes" element={<Classes />} />
          <Route path="/admin/grades" element={<Grades />} />
          <Route path="/admin/complaints" element={<Complaints />} />
          <Route path="/admin/transcripts" element={<Transcripts />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>

      {/* Professor Routes */}
      <Route element={<ProtectedRoute allowedRoles={['professor']} />}>
        <Route element={<ProfessorLayout />}>
          <Route path="/professor/dashboard" element={<ProfessorDashboard />} />
          <Route path="/professor/classes" element={<MyClasses />} />
          <Route path="/professor/students" element={<MyStudents />} />
          <Route path="/professor/grades" element={<ManageGrades />} />
          <Route path="/professor/complaints" element={<ProfessorComplaints />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>

      {/* Student Routes */}
      <Route element={<ProtectedRoute allowedRoles={['student']} />}>
        <Route element={<StudentLayout />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/my-grades" element={<MyGrades />} />
          <Route path="/student/complaint" element={<SubmitComplaint />} />
          <Route path="/student/request-transcript" element={<RequestTranscript />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>

      {/* Default route */}
      <Route path="*" element={<Navigate to={user ? `/${user.role}/dashboard` : '/login'} />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
