import React from 'react';

const mockComplaints = [
  { id: 1, student: 'Paul Jean', message: 'Problème avec la note de math' },
  { id: 2, student: 'Sophie Pierre', message: 'Erreur dans le bulletin' },
];

// Uncomment this to simulate no complaints
// const mockComplaints: any[] = [];

const Complaints: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#4A4A8D] mb-6">📣 Gestion des Réclamations</h1>

      {mockComplaints.length === 0 ? (
        <div className="bg-green-50 border-l-4 border-green-400 p-4 text-green-700 rounded">
          <p className="text-lg font-medium">Aucune réclamation en attente.</p>
          <p className="text-sm mt-1">Les étudiants n'ont soumis aucune réclamation.</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {mockComplaints.map((comp) => (
            <li
              key={comp.id}
              className="bg-white border-l-4 border-yellow-400 shadow-md p-5 rounded-lg"
            >
              <p className="text-gray-700">
                <span className="font-semibold text-[#4A4A8D]">{comp.student}</span> a soumis une réclamation :
              </p>
              <p className="mt-2 italic text-gray-600">"{comp.message}"</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Complaints;
