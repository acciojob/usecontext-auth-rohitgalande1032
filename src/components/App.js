import React, { useState } from "react";
import './../styles/App.css';
import Auth from "./Auth";
import { createContext } from "react";

export const AuthContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
    <div>
        <h1>click on the checkbox to get authenticated</h1>
        
        <Auth  />
    </div>
    </AuthContext.Provider>
  )
}

export default App
