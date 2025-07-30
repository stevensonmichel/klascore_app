import React, { useState } from "react";

interface Student {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

interface Class {
  id: number;
  name: string;
  students: Student[];
}

// Mock data
const classesData: Class[] = [
  {
    id: 1,
    name: "Math 101",
    students: [
      { id: 1, name: "Jean Pierre", email: "jean@example.com", phone: "50912345678" },
      { id: 2, name: "Marie Louis", email: "marie@example.com", phone: "50987654321" },
    ],
  },
  {
    id: 2,
    name: "History 201",
    students: [
      { id: 3, name: "Paul Bernard", email: "paul@example.com" },
      { id: 4, name: "Sophie Jacques", email: "sophie@example.com", phone: "50911223344" },
    ],
  },
];

const MyStudents: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Mes Élèves</h1>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Choisissez une classe:</label>
        <select
          onChange={(e) => {
            const classId = parseInt(e.target.value);
            const foundClass = classesData.find((cls) => cls.id === classId);
            setSelectedClass(foundClass || null);
          }}
          className="w-full p-2 border rounded"
          defaultValue=""
        >
          <option value="" disabled>
            -- Sélectionnez une classe --
          </option>
          {classesData.map((cls) => (
            <option key={cls.id} value={cls.id}>
              {cls.name}
            </option>
          ))}
        </select>
      </div>

      {selectedClass && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Élèves de {selectedClass.name}</h2>
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Nom</th>
                <th className="border p-2 text-left">Email</th>
                <th className="border p-2 text-left">Téléphone</th>
              </tr>
            </thead>
            <tbody>
              {selectedClass.students.map((student) => (
                <tr key={student.id}>
                  <td className="border p-2">{student.name}</td>
                  <td className="border p-2">{student.email}</td>
                  <td className="border p-2">{student.phone || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!selectedClass && (
        <p className="text-gray-600 mt-4">Veuillez sélectionner une classe pour voir les élèves.</p>
      )}
    </div>
  );
};

export default MyStudents;
