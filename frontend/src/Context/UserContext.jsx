import React, { useState } from 'react';

export const UserContext = React.createContext();

export default function UserContextProvider({ children }) {
  // Define your state or context logic here
  const [user, setUser] = useState(null);
  console.log("hello");

  return (
    <UserContext.Provider value={{ user, setUser }} >
      {children}
    </UserContext.Provider>
  );
}
