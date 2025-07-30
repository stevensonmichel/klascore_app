import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  role: 'admin' | 'student' | 'professor';
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const commonLinks = [
    { label: '🏠 Accueil', path: '/' },
  ];

  const adminLinks = [
    { label: '👩‍🏫 Professeurs', path: '/admin/professors' },
    { label: '👨‍🎓 Étudiants', path: '/admin/students' },
    { label: '🏫 Classes', path: '/admin/classes' },
    { label: '📚 Cours', path: '/admin/courses' },
    { label: '📄 Relevés', path: '/admin/transcripts' },
    { label: '🛠 Réclamations', path: '/admin/complaints' },
  ];

  const studentLinks = [
    { label: '📄 Mes Relevés', path: '/student/transcripts' },
    { label: '🛠 Réclamations', path: '/student/complaints' },
    { label: '📚 Cours', path: '/student/courses' },
  ];

  const professorLinks = [
    { label: '📚 Mes Cours', path: '/professor/courses' },
    { label: '✏️ Notes', path: '/professor/grades' },
    { label: '📊 Statistiques', path: '/professor/analytics' },
  ];

  const roleLinks =
    role === 'admin' ? adminLinks :
    role === 'student' ? studentLinks :
    professorLinks;

  return (
    <aside className="w-64 bg-[#4A4A8D] text-white h-screen p-6 space-y-4 fixed">
      <h2 className="text-2xl font-bold mb-4">Klascore</h2>
      <nav>
        {[...commonLinks, ...roleLinks].map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            className="block py-2 px-3 rounded hover:bg-[#3A3A6D] transition"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
