import React, { useState } from 'react';

export const UserContext = React.createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(false);
   const [show,setShow]=useState(false)
  return (
    <UserContext.Provider value={{user,setUser,show,setShow}} >
      {children}
    </UserContext.Provider>
  );
}
