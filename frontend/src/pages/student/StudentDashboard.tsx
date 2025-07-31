import React from 'react';

// Define possible status values as a union of string literals
type TranscriptStatus = 'En cours' | 'Traité' | 'Refusé' | 'Aucune demande';

// Define upcoming exams and complaints data
const upcomingExams = [
  { course: 'Mathématiques', date: '2025-08-02', type: 'Examen Final' },
  { course: 'Physique', date: '2025-08-05', type: 'Test de Chapitre' },
];

const transcriptStatus: TranscriptStatus = 'En cours'; // Use the TranscriptStatus type here

const recentComplaints = [
  { course: 'Chimie', exam: 'Examen Mi-Semestre', status: 'En attente' },
  { course: 'Histoire', exam: 'Test 1', status: 'Résolu' },
];

const StudentDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#4A4A8D] mb-2">Tableau de Bord Étudiant</h1>
        <p className="text-gray-700">Bienvenue ! Vous pouvez consulter vos notes, soumettre des réclamations ou demander un relevé.</p>
      </div>

      {/* Upcoming Exams */}
      <div className="bg-white shadow p-4 rounded">
        <h2 className="text-xl font-semibold text-[#4A4A8D] mb-2">📅 Examens à venir</h2>
        {upcomingExams.length > 0 ? (
          <ul className="list-disc pl-5 text-gray-800 space-y-1">
            {upcomingExams.map((exam, idx) => (
              <li key={idx}>
                <strong>{exam.course}</strong> – {exam.type} le <span className="text-blue-600">{exam.date}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Aucun examen à venir.</p>
        )}
      </div>

      {/* Transcript Request */}
      {/* <div className="bg-white shadow p-4 rounded">
        <h2 className="text-xl font-semibold text-[#4A4A8D] mb-2">📄 Statut de votre Relevé de Notes</h2>
        {transcriptStatus === 'Aucune demande' ? (
          <p className="text-gray-600">Vous n'avez soumis aucune demande de relevé.</p>
        ) : (
          <p className="text-gray-800">Votre dernière demande est <span className="font-semibold text-green-600">{transcriptStatus}</span>.</p>
        )}
      </div> */}

      {/* Recent Complaints */}
      <div className="bg-white shadow p-4 rounded">
        <h2 className="text-xl font-semibold text-[#4A4A8D] mb-2">📢 Réclamations Récentes</h2>
        {recentComplaints.length > 0 ? (
          <table className="w-full text-left text-sm border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Cours</th>
                <th className="p-2 border">Examen</th>
                <th className="p-2 border">Statut</th>
              </tr>
            </thead>
            <tbody>
              {recentComplaints.map((c, idx) => (
                <tr key={idx}>
                  <td className="p-2 border">{c.course}</td>
                  <td className="p-2 border">{c.exam}</td>
                  <td className={`p-2 border ${c.status === 'Résolu' ? 'text-green-600' : 'text-yellow-600'}`}>{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">Aucune réclamation récente.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
