import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'


const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('jwt') ? jwt_decode(localStorage.getItem('jwt')) : null)
    let [loading, setLoading] = useState(true)

    // Redirect
    const history = useHistory()

    const cookies = new Cookies();

    // UseContext Login
    const loginUser = async (e )=> {
        e.preventDefault()
        const response = await fetch('http://localhost:8000/api/login/', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        });

        const data = await response.json();
        
        if (data.status != 200) {
            alert("Login Gagal")
            return("Login gagal")
        }
        
        
        console.log("access :", data.access)
        console.log("refresh :", data.refresh)
        console.log(data)

        setAuthTokens(data) // Isi Data
        localStorage.setItem('jwt', JSON.stringify(data))
        console.log(jwt_decode(localStorage.getItem('jwt')).access)
        setUser(jwt_decode(data.access)) // Isi Data
        history.push('/') // Redirect
    }

    const register = async (e )=> {
        e.preventDefault()
        console.log("cuy")
        const response = await fetch('http://localhost:8000/api/register/', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        });
        
        const data = await response.json();

        if (data.status === 200) {
            console.log("Registrasi terkirim redirect login")
        }
        history.push('/login') // Redirect
    }

    // UseContext Logout
    let logoutUser = () => {
        setAuthTokens(null) // Kosongkan
        setUser(null) // Kosongkan
        localStorage.removeItem('jwt') // Hapus JWT
        history.push('/login') // Redirect
        console.log('Logout Berhasil')
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        setUser:setUser,
        loginUser:loginUser,
        logoutUser:logoutUser,
        register:register
    }

    useEffect(()=> {
        if(authTokens){
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)
    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
