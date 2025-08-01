import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminLayoutProvider, useAdminLayout } from '../context/AdminLayoutContext';

const AdminLayoutContent: React.FC = () => {
  const { pageTitle, actions } = useAdminLayout();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-4">
          <a href="/admin/dashboard" className="block hover:underline">Dashboard</a>
          <a href="/admin/professors" className="block hover:underline">Professeurs</a>
          <a href="/admin/students" className="block hover:underline">Étudiants</a>
          <a href="/admin/classes" className="block hover:underline">Classes</a>
          <a href="/admin/grades" className="block hover:underline">Notes</a>
          <a href="/admin/complaints" className="block hover:underline">Réclamations</a>
          <a href="/admin/transcripts" className="block hover:underline">Relevés</a>
        </nav>
      </aside>

      <main className="flex-1 p-8 bg-gray-100">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#4A4A8D]">{pageTitle}</h1>
          <div className="flex gap-3">{actions}</div>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

const AdminLayout: React.FC = () => (
  <AdminLayoutProvider>
    <AdminLayoutContent />
  </AdminLayoutProvider>
);

export default AdminLayout;
