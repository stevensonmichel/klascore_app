import React, { useEffect, useState } from 'react';
import { useAdminLayout } from '../../context/AdminLayoutContext';

interface Class {
  id: number;
  name: string;
  professor: string;
}

const Classes: React.FC = () => {
  const { setPageTitle, setActions } = useAdminLayout();

  const [classes, setClasses] = useState<Class[]>([
    { id: 1, name: '9e AF', professor: 'Jean Baptiste' },
    { id: 2, name: 'Philo', professor: 'Marie Claude' },
    { id: 3, name: 'Seconde C', professor: 'Patrick Jean' },
    { id: 4, name: 'Rhéto', professor: 'Elisabeth Dorsin' },
  ]);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    setPageTitle('🏫 Gestion des Classes');
    setActions(
      <>
        <button
          onClick={handleAddClass}
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

  const handleAddClass = () => {
    const newClass: Class = {
      id: Date.now(),
      name: `Nouvelle Classe ${classes.length + 1}`,
      professor: 'Professeur X',
    };
    setClasses([...classes, newClass]);
  };

  const handleDeleteSelected = () => {
    setClasses((prev) => prev.filter((cls) => !selectedIds.includes(cls.id)));
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
      {classes.length === 0 ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-yellow-700 rounded">
          <p className="text-lg font-medium">Aucune classe n'a encore été créée.</p>
          <p className="text-sm mt-1">Veuillez ajouter une classe pour l'afficher ici.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div
              key={cls.id}
              className={`bg-white rounded-lg shadow-md border border-gray-200 p-5 hover:shadow-lg transition-shadow relative ${
                isSelected(cls.id) ? 'ring-2 ring-blue-400' : ''
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected(cls.id)}
                onChange={() => toggleSelection(cls.id)}
                className="absolute top-3 left-3 w-4 h-4"
              />
              <h2 className="text-xl font-semibold text-[#4A4A8D] mb-2 pl-6">{cls.name}</h2>
              <p className="text-gray-700 pl-6">
                <strong>Professeur Responsable:</strong> {cls.professor}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Classes;
