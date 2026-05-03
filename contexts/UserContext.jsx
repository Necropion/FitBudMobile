import { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = async (email, password) => {

    }

    const register = async (email, password) => {
        try{

            const response = await fetch('https://fitbudbackend.onrender.com/api/user', {
                method: 'POST',
                body: JSON.stringify({
                    Name: email
                }),
                headers: {
                    "Content-Type":"application/json"
                }
            });

            const registeredUser = await response.json();

            if(!response.ok) {
                throw new Error("Something went wrong")
            }



        } catch(error) {
            console.log('Something went wrong when registering user:', error.message)
        }
    }

    const logout = async () => {
        
    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}