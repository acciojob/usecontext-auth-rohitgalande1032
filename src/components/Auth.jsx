import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './App';

const Auth = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const handleClick = () => {
        setIsAuthenticated(!isAuthenticated);
    }

  return (
    <div>
        <p className='authText'>
            {isAuthenticated ? "You are now authenticated, you can proceed" : "you are not authenticated"}
        </p>
        <input value={isAuthenticated} onChange={handleClick} type="checkbox" id="checkbox"/><label>I'm not a robot</label>
    </div>
  )
}

export default Auth