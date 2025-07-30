import React from 'react';

const mockGrades = [
  { id: 1, student: 'Paul Jean', subject: 'Mathématiques', grade: 85, class: '9e AF' },
  { id: 2, student: 'Sophie Pierre', subject: 'Mathématiques', grade: 95, class: 'Philo' },
  { id: 3, student: 'Paul Jean', subject: 'Physique', grade: 75, class: '9e AF' },
  { id: 4, student: 'Sophie Pierre', subject: 'Physique', grade: 92, class: 'Philo' },
];

// Calculate average grades per subject
const calculateAverages = () => {
  const subjectMap: { [subject: string]: number[] } = {};

  mockGrades.forEach(({ subject, grade }) => {
    if (!subjectMap[subject]) {
      subjectMap[subject] = [];
    }
    subjectMap[subject].push(grade);
  });

  return Object.entries(subjectMap).map(([subject, grades]) => {
    const average = grades.reduce((sum, g) => sum + g, 0) / grades.length;
    return { subject, average: Math.round(average * 10) / 10 };
  });
};

const Grades: React.FC = () => {
  const averages = calculateAverages();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#4A4A8D] mb-6">📚 Gestion des Notes</h1>

      {/* Average summary */}
      <div className="mb-6 bg-gray-50 p-4 rounded shadow-sm">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">📈 Moyennes par Matière</h2>
        <ul className="list-disc ml-6 text-gray-600">
          {averages.map(({ subject, average }) => (
            <li key={subject}>
              {subject}: <span className="font-semibold">{average}</span> / 100
            </li>
          ))}
        </ul>
      </div>

      {/* Grade Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-[#4A4A8D]">
            <tr>
              <th className="text-left px-6 py-3 border-b">Étudiant</th>
              <th className="text-left px-6 py-3 border-b">Classe</th>
              <th className="text-left px-6 py-3 border-b">Matière</th>
              <th className="text-left px-6 py-3 border-b">Note</th>
            </tr>
          </thead>
          <tbody>
            {mockGrades.map((grade) => (
              <tr
                key={grade.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 border-b text-gray-700">{grade.student}</td>
                <td className="px-6 py-4 border-b text-gray-700">{grade.class}</td>
                <td className="px-6 py-4 border-b text-gray-700">{grade.subject}</td>
                <td className="px-6 py-4 border-b text-gray-700">{grade.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
