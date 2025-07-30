import React, { useState } from 'react';

const RequestTranscript: React.FC = () => {
  const [requested, setRequested] = useState(false);

  const handleRequest = () => {
    setRequested(true);
    alert('Demande de relevé envoyée');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Demander un Relevé de Notes</h1>
      {requested ? (
        <p className="text-green-600">Votre demande a été soumise. Un administrateur la traitera bientôt.</p>
      ) : (
        <button onClick={handleRequest} className="bg-green-500 text-white px-4 py-2 rounded">
          Demander un Relevé
        </button>
      )}
    </div>
  );
};

export default RequestTranscript;
