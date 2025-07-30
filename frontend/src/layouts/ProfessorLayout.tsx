import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const ProfessorLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-purple-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Espace Professeur</h2>
        <nav className="space-y-4">
          <Link to="/dashboard" className="block hover:underline">Tableau de Bord</Link>
          <Link to="/classes" className="block hover:underline">Mes Classes</Link>
          <Link to="/students" className="block hover:underline">Mes Élèves</Link>
          <Link to="/grades" className="block hover:underline">Gestion des Notes</Link>
          <Link to="/complaints" className="block hover:underline">Réclamations</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default ProfessorLayout;
