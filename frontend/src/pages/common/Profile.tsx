import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Mon Profil</h2>
      <div className="space-y-2">
        <p><strong>Nom:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email || "Non renseigné"}</p>
        <p><strong>Téléphone:</strong> {user.phone || "Non renseigné"}</p>
        <p><strong>Rôle:</strong> {user.role}</p>
      </div>

      <button
        onClick={logout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Se déconnecter
      </button>
    </div>
  );
};

export default Profile;
