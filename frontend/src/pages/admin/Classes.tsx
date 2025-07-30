import React from 'react';

interface Class {
  id: number;
  name: string;
  professor: string;
}

const mockClasses: Class[] = [
  { id: 1, name: '9e AF', professor: 'Jean Baptiste' },
  { id: 2, name: 'Philo', professor: 'Marie Claude' },
  { id: 3, name: 'Seconde C', professor: 'Patrick Jean' },
  { id: 4, name: 'Rhéto', professor: 'Elisabeth Dorsin' },
];

// Uncomment the next line to simulate an empty list
// const mockClasses: Class[] = [];

const Classes: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#4A4A8D] mb-6">🏫 Gestion des Classes</h1>

      {mockClasses.length === 0 ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-yellow-700 rounded">
          <p className="text-lg font-medium">Aucune classe n'a encore été créée.</p>
          <p className="text-sm mt-1">Veuillez ajouter une classe pour l'afficher ici.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockClasses.map((cls, index) => (
            <div
              key={`${cls.id}-${index}`} // handle potential duplicate IDs
              className="bg-white rounded-lg shadow-md border border-gray-200 p-5 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-[#4A4A8D] mb-2">{cls.name}</h2>
              <p className="text-gray-700">
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
