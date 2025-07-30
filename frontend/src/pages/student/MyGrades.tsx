import React, { useState } from 'react';

type Exam = {
  id: number;
  title: string;
  score: number;
};

type Course = {
  id: number;
  name: string;
  exams: Exam[];
};

const mockCourses: Course[] = [
  {
    id: 1,
    name: 'Mathématiques',
    exams: [
      { id: 1, title: 'Devoir 1', score: 85 },
      { id: 2, title: 'Examen Mi-Semestre', score: 78 },
      { id: 3, title: 'Projet Final', score: 90 },
    ],
  },
  {
    id: 2,
    name: 'Physique',
    exams: [
      { id: 4, title: 'TP 1', score: 88 },
      { id: 5, title: 'Examen Final', score: 92 },
    ],
  },
  {
    id: 3,
    name: 'Histoire',
    exams: [
      { id: 6, title: 'Quiz 1', score: 70 },
      { id: 7, title: 'Projet', score: 86 },
    ],
  },
];

const calculateAverage = (exams: Exam[]): number => {
  const total = exams.reduce((sum, exam) => sum + exam.score, 0);
  return exams.length ? Math.round(total / exams.length) : 0;
};

const MyGrades: React.FC = () => {
  const [expandedCourseId, setExpandedCourseId] = useState<number | null>(null);

  const toggleExpand = (courseId: number) => {
    setExpandedCourseId((prev) => (prev === courseId ? null : courseId));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#4a4a4a] mb-6">Mes Notes</h1>

      {mockCourses.map((course) => {
        const average = calculateAverage(course.exams);

        return (
          <div
            key={course.id}
            className="mb-4 border border-gray-300 rounded shadow hover:shadow-md transition-shadow"
          >
            <div
              onClick={() => toggleExpand(course.id)}
              className="flex justify-between items-center px-4 py-3 bg-[#A0A8ED] text-white font-semibold cursor-pointer rounded-t"
            >
              <div>
                {course.name}
                <span className="ml-4 text-sm bg-white text-[#A0A8ED] px-2 py-1 rounded-full font-medium">
                  Moyenne: {average}%
                </span>
              </div>
              <span>{expandedCourseId === course.id ? '−' : '+'}</span>
            </div>

            {expandedCourseId === course.id && (
              <table className="w-full text-left bg-white">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="p-3">Examen</th>
                    <th className="p-3">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {course.exams.map((exam) => (
                    <tr key={exam.id} className="border-b">
                      <td className="p-3">{exam.title}</td>
                      <td className="p-3">{exam.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MyGrades;
