import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [school, setSchool] = useState<any>(null);
  const [availableSchools, setAvailableSchools] = useState<any[]>([]);
  const [selectedSchoolId, setSelectedSchoolId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch user info and school
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/users/me');
        setUser(response.data);
        setSchool(response.data.school);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Fetch list of available schools
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('/api/schools/');
        setAvailableSchools(response.data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchSchools();
  }, []);

  const handleSelectSchool = async () => {
    if (!selectedSchoolId) return;

    setIsLoading(true);
    try {
      // PATCH the user's school (or use a custom endpoint if needed)
      await axios.patch('/api/users/me/', { school_id: selectedSchoolId });
      const updatedUser = await axios.get('/api/users/me');
      setUser(updatedUser.data);
      setSchool(updatedUser.data.school);
      alert('École assignée avec succès !');
    } catch (error) {
      console.error('Error assigning school:', error);
      alert("Une erreur s'est produite lors de l'association de l'école.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-[#4A4A8D]">🎓 Tableau de Bord Administrateur</h1>
      <p className="mb-4">Bienvenue ! Gérez les professeurs, étudiants, classes et notes de votre école.</p>

      {!school ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <p className="mb-3">Vous n'êtes affilié à aucune école. Sélectionnez-en une ci-dessous :</p>

          <select
            className="w-full p-2 border rounded mb-4"
            value={selectedSchoolId || ''}
            onChange={(e) => setSelectedSchoolId(Number(e.target.value))}
          >
            <option value="">-- Choisir une école --</option>
            {availableSchools.map((school) => (
              <option key={school.id} value={school.id}>
                {school.name} ({school.type})
              </option>
            ))}
          </select>

          <button
            onClick={handleSelectSchool}
            disabled={!selectedSchoolId || isLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {isLoading ? 'Assignation...' : "S'affilier à cette école"}
          </button>
        </div>
      ) : (
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-md">
          <p className="text-green-700 font-semibold">
            ✅ Vous êtes affilié à <strong>{school.name}</strong> ({school.type})
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
