import axios from 'axios';


const api = axios.create({ //.create() method is used to create a new instance of axios with a custom configuration.
    baseURL:'http://localhost:3000',
    withCredentials:true
});

export async function register({ username, email, password }) {
    try {
        const response = await api.post("/api/auth/register",{
            username,email,password
        })

        return response.data
    } catch (err) {
        console.log(err);
    }
}

export async function login({email,password}){
    try {
        const response = await api.post("/api/auth/login",{
            email,password
        })

        return response.data
    } catch (err) {
        console.log(err)
    }
}

export async function logout(){
    try {
        const response = await api.get("/api/auth.logout")
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function getMe(){
    try {
        const response = await api.get('/api/auth/get-me')

        return response.data;
    } catch (err) {
        console.log(err);
    }
}