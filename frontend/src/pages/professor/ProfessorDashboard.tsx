import React from "react";

const ProfessorDashboard: React.FC = () => {
  // Mock summary data
  const summary = {
    classes: 3,
    students: 75,
    pendingGrades: 8,
    complaints: 2,
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Tableau de Bord du Professeur</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-500 text-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Mes Classes</h2>
          <p className="text-3xl">{summary.classes}</p>
        </div>

        <div className="bg-green-500 text-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Mes Élèves</h2>
          <p className="text-3xl">{summary.students}</p>
        </div>

        <div className="bg-yellow-500 text-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Notes à Soumettre</h2>
          <p className="text-3xl">{summary.pendingGrades}</p>
        </div>

        <div className="bg-red-500 text-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Plaintes Reçues</h2>
          <p className="text-3xl">{summary.complaints}</p>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Actions Rapides</h2>
        <ul className="list-disc list-inside">
          <li>Vérifier mes classes</li>
          <li>Gérer les notes</li>
          <li>Consulter les plaintes</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfessorDashboard;
