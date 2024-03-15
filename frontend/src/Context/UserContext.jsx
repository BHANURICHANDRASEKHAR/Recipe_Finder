import React, { useState } from 'react';

export const UserContext = React.createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(false);

  return (
    <UserContext.Provider value={{user,setUser}} >
      {children}
    </UserContext.Provider>
  );
}
