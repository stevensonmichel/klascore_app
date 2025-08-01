import React, { createContext, useContext, useState, ReactNode } from 'react';

type AdminLayoutContextType = {
  pageTitle: string;
  setPageTitle: (title: string) => void;
  actions: ReactNode;
  setActions: (actions: ReactNode) => void;
};

const AdminLayoutContext = createContext<AdminLayoutContextType | undefined>(undefined);

export const useAdminLayout = () => {
  const context = useContext(AdminLayoutContext);
  if (!context) {
    throw new Error("useAdminLayout must be used inside AdminLayoutProvider");
  }
  return context;
};

export const AdminLayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('');
  const [actions, setActions] = useState<ReactNode>(null);

  return (
    <AdminLayoutContext.Provider value={{ pageTitle, setPageTitle, actions, setActions }}>
      {children}
    </AdminLayoutContext.Provider>
  );
};
