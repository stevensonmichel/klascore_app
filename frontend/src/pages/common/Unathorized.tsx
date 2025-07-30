import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Accès Refusé</h1>
      <p className="text-lg mb-6">Vous n'avez pas les permissions pour accéder à cette page.</p>
      
      <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Retour à la Connexion
      </Link>
    </div>
  );
};

export default Unauthorized;
