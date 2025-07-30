import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="block hover:underline">Dashboard</Link>
          <Link to="/admin/professors" className="block hover:underline">Professeurs</Link>
          <Link to="/admin/students" className="block hover:underline">Étudiants</Link>
          <Link to="/admin/classes" className="block hover:underline">Classes</Link>
          <Link to="/admin/grades" className="block hover:underline">Notes</Link>
          <Link to="/admin/complaints" className="block hover:underline">Réclamations</Link>
          <Link to="/admin/transcripts" className="block hover:underline">Relevés</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
