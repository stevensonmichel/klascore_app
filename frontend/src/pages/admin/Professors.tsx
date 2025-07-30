import React from 'react';

interface Professor {
  id: number;
  name: string;
  email: string;
}

const mockProfessors: Professor[] = [
  { id: 1, name: 'Jean Baptiste', email: 'jb@school.com' },
  { id: 2, name: 'Marie Claude', email: 'mc@school.com' },
  { id: 3, name: 'Daniel Lefèvre', email: 'dl@school.com' },
  { id: 4, name: 'Anne Moreau', email: 'am@school.com' },
];

// Uncomment this to test the "no professors" state
// const mockProfessors: Professor[] = [];

const Professors: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#4A4A8D] mb-6">👩‍🏫 Gestion des Professeurs</h1>

      {mockProfessors.length === 0 ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-yellow-700 rounded">
          <p className="text-lg font-medium">Aucun professeur enregistré pour le moment.</p>
          <p className="text-sm mt-1">Veuillez en ajouter pour pouvoir gérer les classes.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-[#4A4A8D]">
              <tr>
                <th className="text-left px-6 py-3 border-b">Nom</th>
                <th className="text-left px-6 py-3 border-b">Email</th>
              </tr>
            </thead>
            <tbody>
              {mockProfessors.map((prof) => (
                <tr
                  key={`${prof.id}-${prof.email}`} // Ensure unique key if data has duplicates
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 border-b text-gray-700">{prof.name}</td>
                  <td className="px-6 py-4 border-b text-gray-700">{prof.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Professors;
