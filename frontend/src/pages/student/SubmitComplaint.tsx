import React, { useState } from 'react';

const mockCourses = [
  {
    id: 1,
    name: 'Mathématiques',
    exams: ['Examen 1', 'Examen 2'],
  },
  {
    id: 2,
    name: 'Physique',
    exams: ['Devoir 1', 'Projet Final'],
  },
  {
    id: 3,
    name: 'Histoire',
    exams: ['Midterm', 'Final'],
  },
];

const initialComplaints = [
  {
    id: 1,
    course: 'Mathématiques',
    exam: 'Examen 1',
    message: 'Je pense que ma note n’est pas correcte.',
    status: 'En attente',
  },
  {
    id: 2,
    course: 'Physique',
    exam: 'Projet Final',
    message: 'Le barème n’a pas été respecté.',
    status: 'Résolu',
  },
];

const SubmitComplaint: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [selectedExam, setSelectedExam] = useState('');
  const [message, setMessage] = useState('');
  const [complaints, setComplaints] = useState(initialComplaints);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const course = mockCourses.find(c => c.id === selectedCourseId);
    if (!course || !selectedExam || !message.trim()) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const newComplaint = {
      id: complaints.length + 1,
      course: course.name,
      exam: selectedExam,
      message,
      status: 'En attente',
    };

    setComplaints([newComplaint, ...complaints]);
    setMessage('');
    setSelectedCourseId(null);
    setSelectedExam('');
  };

  const exams = selectedCourseId
    ? mockCourses.find(c => c.id === selectedCourseId)?.exams || []
    : [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#4A4A8D]">Soumettre une Réclamation</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded-lg mb-8">
        <div>
          <label className="block text-gray-700 mb-1">Cours</label>
          <select
            className="w-full border p-2 rounded"
            value={selectedCourseId ?? ''}
            onChange={(e) => {
              setSelectedCourseId(Number(e.target.value));
              setSelectedExam('');
            }}
          >
            <option value="" disabled>Choisissez un cours</option>
            {mockCourses.map(course => (
              <option key={course.id} value={course.id}>{course.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Examen</label>
          <select
            className="w-full border p-2 rounded"
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            disabled={!exams.length}
          >
            <option value="" disabled>Choisissez un examen</option>
            {exams.map((exam, index) => (
              <option key={index} value={exam}>{exam}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            className="w-full border p-2 rounded"
            placeholder="Décrivez votre réclamation ici..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="bg-[#A0A8ED] text-white px-4 py-2 rounded hover:bg-[#8a91d8] transition"
        >
          Envoyer
        </button>
      </form>

      <h2 className="text-xl font-semibold text-[#4A4A8D] mb-4">Mes Réclamations</h2>
      <div className="bg-white p-4 shadow rounded">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Cours</th>
              <th className="p-2 border">Examen</th>
              <th className="p-2 border">Message</th>
              <th className="p-2 border">Statut</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((comp) => (
              <tr key={comp.id}>
                <td className="p-2 border">{comp.course}</td>
                <td className="p-2 border">{comp.exam}</td>
                <td className="p-2 border">{comp.message}</td>
                <td className="p-2 border">{comp.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmitComplaint;
