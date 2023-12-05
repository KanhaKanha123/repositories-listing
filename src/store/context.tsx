import { createContext, FC, ReactNode, useContext, useState } from "react";

type ContextProps = {
  children: ReactNode;
};

const RepositoriesContext = createContext<any>(null);

export const Context: FC<ContextProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <RepositoriesContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </RepositoriesContext.Provider>
  );
};

//hook which will provide state in whole application //TODO need to move from here
export const useRepositoriesAppState = () => useContext(RepositoriesContext);
