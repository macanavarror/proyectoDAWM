import axios from 'axios'

const REST_ENDPOINT = 'http://localhost:8000/'
const AUTH_TOKEN_KEY = 'authToken'



export function logoutUser() {
    clearAuthToken()
}

export function clearAuthToken() {
    axios.defaults.headers.common['Authorization'] = ''
    localStorage.removeItem(AUTH_TOKEN_KEY)
}

export function isLoggedIn() {
    if(localStorage.token != null){
        return true
    }else{
        console.log('adfwefwef')
        return false
    }
}
