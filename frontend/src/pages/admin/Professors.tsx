import React, { useEffect, useState } from 'react';
import { useAdminLayout } from '../../context/AdminLayoutContext';

interface Professor {
  id: number;
  name: string;
  email: string;
}

const Professors: React.FC = () => {
  const { setPageTitle, setActions } = useAdminLayout();

  const [professors, setProfessors] = useState<Professor[]>([
    { id: 1, name: 'Jean Baptiste', email: 'jb@school.com' },
    { id: 2, name: 'Marie Claude', email: 'mc@school.com' },
    { id: 3, name: 'Daniel Lefèvre', email: 'dl@school.com' },
    { id: 4, name: 'Anne Moreau', email: 'am@school.com' },
    { id: 1, name: 'Jean Baptiste', email: 'jb@school.com' },
    { id: 2, name: 'Marie Claude', email: 'mc@school.com' },
    { id: 3, name: 'Daniel Lefèvre', email: 'dl@school.com' },
    { id: 4, name: 'Anne Moreau', email: 'am@school.com' },
    { id: 1, name: 'Jean Baptiste', email: 'jb@school.com' },
    { id: 2, name: 'Marie Claude', email: 'mc@school.com' },
    { id: 3, name: 'Daniel Lefèvre', email: 'dl@school.com' },
    { id: 4, name: 'Anne Moreau', email: 'am@school.com' },
  ]);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // Actions that will be shown in the AdminLayout top bar
  useEffect(() => {
    setPageTitle('👩‍🏫 Gestion des Professeurs');
    setActions(
      <>
        <button
          onClick={handleAddProfessor}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ➕ Ajouter
        </button>
        <button
          disabled
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          ✏️ Modifier
        </button>
        <button
          onClick={handleDeleteSelected}
          disabled={selectedIds.length === 0}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          🗑️ Supprimer
        </button>
      </>
    );
  }, [selectedIds]);

  const handleAddProfessor = () => {
    const newProfessor: Professor = {
      id: Date.now(),
      name: `Nouveau Professeur ${professors.length + 1}`,
      email: `new${professors.length + 1}@school.com`,
    };
    setProfessors([...professors, newProfessor]);
  };

  const handleDeleteSelected = () => {
    setProfessors((prev) => prev.filter((prof) => !selectedIds.includes(prof.id)));
    setSelectedIds([]);
  };

  const toggleSelection = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const isSelected = (id: number) => selectedIds.includes(id);

  return (
    <div className="p-0">
      {professors.length === 0 ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-yellow-700 rounded">
          <p className="text-lg font-medium">Aucun professeur enregistré pour le moment.</p>
          <p className="text-sm mt-1">Veuillez en ajouter pour pouvoir gérer les classes.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-[#4A4A8D]">
              <tr>
                <th className="px-4 py-3 border-b"></th>
                <th className="text-left px-6 py-3 border-b">Nom</th>
                <th className="text-left px-6 py-3 border-b">Email</th>
              </tr>
            </thead>
            <tbody>
              {professors.map((prof) => (
                <tr
                  key={prof.id}
                  className={`hover:bg-gray-50 transition-colors duration-200 ${
                    isSelected(prof.id) ? 'bg-blue-50' : ''
                  }`}
                >
                  <td className="px-4 py-4 border-b text-center">
                    <input
                      type="checkbox"
                      checked={isSelected(prof.id)}
                      onChange={() => toggleSelection(prof.id)}
                      className="w-4 h-4"
                    />
                  </td>
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
