import React, { useState } from "react";

interface Grade {
  id: number;
  studentName: string;
  className: string;
  grade: number | null;
}

const mockGrades: Grade[] = [
  { id: 1, studentName: "Jean Baptiste", className: "Mathématiques 101", grade: 85 },
  { id: 2, studentName: "Marie Louise", className: "Mathématiques 101", grade: 90 },
  { id: 3, studentName: "Pierre Paul", className: "Mathématiques 101", grade: null }, // Not yet graded
];

const ManageGrades: React.FC = () => {
  const [grades, setGrades] = useState<Grade[]>(mockGrades);

  const handleGradeChange = (id: number, newGrade: number) => {
    setGrades((prev) =>
      prev.map((g) => (g.id === id ? { ...g, grade: newGrade } : g))
    );
  };

  const handleSubmit = () => {
    console.log("Grades submitted:", grades);
    alert("Les notes ont été enregistrées (simulation)");
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Gestion des Notes</h1>

      <table className="w-full border-collapse border mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Nom de l'Étudiant</th>
            <th className="border p-2 text-left">Classe</th>
            <th className="border p-2 text-left">Note</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((g) => (
            <tr key={g.id}>
              <td className="border p-2">{g.studentName}</td>
              <td className="border p-2">{g.className}</td>
              <td className="border p-2">
                <input
                  type="number"
                  value={g.grade !== null ? g.grade : ""}
                  onChange={(e) =>
                    handleGradeChange(g.id, Number(e.target.value))
                  }
                  className="w-20 border rounded px-2 py-1"
                  min="0"
                  max="100"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Enregistrer les Notes
      </button>
    </div>
  );
};

export default ManageGrades;
