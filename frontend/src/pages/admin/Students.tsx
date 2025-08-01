import React, { useEffect, useState } from 'react';
import { useAdminLayout } from '../../context/AdminLayoutContext';

interface Student {
  id: number;
  name: string;
  class: string;
}

const Students: React.FC = () => {
  const { setPageTitle, setActions } = useAdminLayout();

  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: 'Paul Jean', class: '9e AF' },
    { id: 2, name: 'Sophie Pierre', class: 'Philo' },
    { id: 3, name: 'Mikael Dupont', class: 'Seconde C' },
    { id: 4, name: 'Aline Bernard', class: 'Rhéto' },
  ]);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    setPageTitle('👨‍🎓 Gestion des Étudiants');
    setActions(
      <>
        <button
          onClick={handleAddStudent}
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

  const toggleSelection = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleAddStudent = () => {
    const newStudent: Student = {
      id: Date.now(),
      name: 'Nouvel Élève',
      class: 'Classe X',
    };
    setStudents([...students, newStudent]);
  };

  const handleDeleteSelected = () => {
    setStudents((prev) => prev.filter((student) => !selectedIds.includes(student.id)));
    setSelectedIds([]);
  };

  const isSelected = (id: number) => selectedIds.includes(id);

  return (
    <div className="p-0">
      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-[#4A4A8D]">
          <tr>
            <th className="px-4 py-3 border-b"></th>
            <th className="text-left px-6 py-3 border-b">Nom</th>
            <th className="text-left px-6 py-3 border-b">Classe</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className={`hover:bg-gray-50 transition-colors duration-200 ${
                isSelected(student.id) ? 'bg-blue-50' : ''
              }`}
            >
              <td className="px-4 py-4 border-b text-center">
                <input
                  type="checkbox"
                  checked={isSelected(student.id)}
                  onChange={() => toggleSelection(student.id)}
                  className="w-4 h-4"
                />
              </td>
              <td className="px-6 py-4 border-b text-gray-700">{student.name}</td>
              <td className="px-6 py-4 border-b text-gray-700">{student.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
