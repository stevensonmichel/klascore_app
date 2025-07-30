import React from 'react';

const mockTranscripts = [
  { id: 1, student: 'Paul Jean', status: 'En attente' },
  { id: 2, student: 'Sophie Pierre', status: 'Traitée' },
];

// To simulate an empty list for testing:
// const mockTranscripts: any[] = [];

const statusColor = {
  'En attente': 'bg-yellow-100 text-yellow-800',
  'Traitée': 'bg-green-100 text-green-800',
};

const Transcripts: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#4A4A8D] mb-6">📄 Demandes de Relevé de Notes</h1>

      {mockTranscripts.length === 0 ? (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 text-blue-700 rounded">
          <p className="text-lg font-medium">Aucune demande enregistrée.</p>
          <p className="text-sm mt-1">Les étudiants n'ont encore soumis aucune demande de relevé de notes.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-[#4A4A8D]">
              <tr>
                <th className="text-left px-6 py-3 border-b">Étudiant</th>
                <th className="text-left px-6 py-3 border-b">Statut</th>
              </tr>
            </thead>
            <tbody>
              {mockTranscripts.map((req, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 border-b text-gray-700">{req.student}</td>
                  <td className="px-6 py-4 border-b">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[req.status as keyof typeof statusColor]}`}
                    >
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Transcripts;
