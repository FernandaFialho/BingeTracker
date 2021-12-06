import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [userdata, setUserData] = useState (null)
    const [userid, setUserId] = useState (null)

    async function login (username, password) {
        const response = await axios.post('http://localhost:8089/auth/token', {username, password})
        console.log(response.data)
        setUserData(response.data)

        const tokenresponse = await axios.get(`http://localhost:8089/auth/token/${response.data.token}`)
        setUserId (tokenresponse.data.id)
        console.log(tokenresponse.data)
        
        return (true)
    }
    
    async function register (username, password) {
        const response = await axios.post('http://localhost:8089/auth/token', {username, password})
        console.log(response.data)
        setUserData(response.data)

        const tokenresponse = await axios.get(`http://localhost:8089/auth/token/${response.data.token}`)
        setUserId (tokenresponse.data.id)
        console.log(tokenresponse.data)
        
        return (true)
    }


    return (
        <AuthContext.Provider value={{
            userdata, userid, login
        }}>
            
            { children }
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}