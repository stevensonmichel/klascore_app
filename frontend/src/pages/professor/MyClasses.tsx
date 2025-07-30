import React from "react";

interface Class {
  id: number;
  name: string;
  code: string;
  schedule: string;
  room: string;
}

const mockClasses: Class[] = [
  { id: 1, name: "Mathématiques 101", code: "MATH101", schedule: "Lundi & Mercredi 8:00-10:00", room: "Salle A1" },
  { id: 2, name: "Histoire 201", code: "HIST201", schedule: "Mardi & Jeudi 10:00-12:00", room: "Salle B3" },
  { id: 3, name: "Physique 102", code: "PHY102", schedule: "Vendredi 14:00-16:00", room: "Salle C2" },
];

const MyClasses: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#4A4A8D] mb-6">📚 Mes Classes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockClasses.map((cls) => (
          <div
            key={cls.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-[#4A4A8D] mb-2">{cls.name}</h2>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Code:</strong> {cls.code}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Horaire:</strong> {cls.schedule}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Salle:</strong> {cls.room}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
