import React, { useState } from "react";

interface Complaint {
  id: number;
  studentName: string;
  message: string;
  date: string;
  status: "Pending" | "Resolved";
}

const mockComplaints: Complaint[] = [
  {
    id: 1,
    studentName: "Jean Pierre",
    message: "Je ne vois pas ma note pour le devoir 2.",
    date: "2025-07-15",
    status: "Pending",
  },
  {
    id: 2,
    studentName: "Marie Louis",
    message: "Erreur dans ma note de mathématiques.",
    date: "2025-07-14",
    status: "Resolved",
  },
  {
    id: 3,
    studentName: "Joseph Andre",
    message: "Problème d’accès au portail.",
    date: "2025-07-13",
    status: "Pending",
  },
];

const ProfessorComplaints: React.FC = () => {
  const [complaints, setComplaints] = useState(mockComplaints);

  const handleResolve = (id: number) => {
    setComplaints((prev) =>
      prev.map((complaint) =>
        complaint.id === id ? { ...complaint, status: "Resolved" } : complaint
      )
    );
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Plaintes des Élèves</h1>

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="p-3 border-b">Élève</th>
            <th className="p-3 border-b">Message</th>
            <th className="p-3 border-b">Date</th>
            <th className="p-3 border-b">Statut</th>
            <th className="p-3 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.id} className="text-center">
              <td className="p-3 border-b">{complaint.studentName}</td>
              <td className="p-3 border-b">{complaint.message}</td>
              <td className="p-3 border-b">{complaint.date}</td>
              <td className={`p-3 border-b ${complaint.status === "Resolved" ? "text-green-600" : "text-red-600"}`}>
                {complaint.status}
              </td>
              <td className="p-3 border-b">
                {complaint.status === "Pending" ? (
                  <button
                    onClick={() => handleResolve(complaint.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Marquer Résolu
                  </button>
                ) : (
                  <span className="text-gray-400">Aucune Action</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessorComplaints;
