import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the role type
type Role = 'admin' | 'professor' | 'student';

// Define the User interface
interface User {
  id: number;
  username: string;  // This should match the field you're using in the Profile component
  role: Role;
  email?: string;    // Optional, depending on your backend response
  phone?: string;    // Optional, depending on your backend response
  token: string;
}

// Define the AuthContextType interface
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// Create AuthContext with undefined as default
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // loading state to prevent rendering before authentication is determined

  // Login function to store user in state and local storage
  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage
  };

  // Logout function to remove user from state and local storage
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user from localStorage
  };

  // On component mount, check localStorage for a user and set state accordingly
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      setUser(parsedUser); // Set user from localStorage
    }
    setLoading(false); // Set loading to false after checking localStorage
  }, []);

  if (loading) return <div>Loading...</div>; // Optionally render a loading message or spinner

  // Render children once the user is loaded
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
