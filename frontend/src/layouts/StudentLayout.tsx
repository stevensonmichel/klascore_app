import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const StudentLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-green-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Espace Étudiant</h2>
        <nav className="space-y-4">
          <Link to="/dashboard" className="block hover:underline">Tableau de Bord</Link>
          <Link to="/my-grades" className="block hover:underline">Mes Notes</Link>
          <Link to="/complaint" className="block hover:underline">Soumettre Réclamation</Link>
          <Link to="/request-transcript" className="block hover:underline">Demander Relevé</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;
