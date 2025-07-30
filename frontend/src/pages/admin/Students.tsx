import React from 'react';

interface Student {
  id: number;
  name: string;
  class: string;
}

const mockStudents: Student[] = [
  { id: 1, name: 'Paul Jean', class: '9e AF' },
  { id: 2, name: 'Sophie Pierre', class: 'Philo' },
  { id: 3, name: 'Mikael Dupont', class: 'Seconde C' },
  { id: 4, name: 'Aline Bernard', class: 'Rhéto' },
];

// Uncomment to simulate no students
// const mockStudents: Student[] = [];

const Students: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#4A4A8D] mb-6">👨‍🎓 Gestion des Étudiants</h1>

      {mockStudents.length === 0 ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-yellow-700 rounded">
          <p className="text-lg font-medium">Aucun étudiant trouvé.</p>
          <p className="text-sm mt-1">Ajoutez des étudiants pour les afficher ici.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-[#4A4A8D]">
              <tr>
                <th className="text-left px-6 py-3 border-b">Nom</th>
                <th className="text-left px-6 py-3 border-b">Classe</th>
              </tr>
            </thead>
            <tbody>
              {mockStudents.map((student, index) => (
                <tr
                  key={`${student.id}-${index}`} // use unique composite key
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 border-b text-gray-700">{student.name}</td>
                  <td className="px-6 py-4 border-b text-gray-700">{student.class}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Students;
