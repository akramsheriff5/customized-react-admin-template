
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
// react-router components
import { useNavigate , useLocation } from "react-router-dom";
// firebase
import {app} from "./firebaseAuh"
const auth = getAuth();

export const createUser = (email,password) =>{
   return createUserWithEmailAndPassword(auth, email, password)
    
}

export const signinUser = (email,password) =>{
   return signInWithEmailAndPassword(auth, email, password)
    
}


export const setAuthToken = (token) =>{
    
    sessionStorage.setItem('Auth Token', token)
    let authToken = sessionStorage.getItem('Auth Token')
    if (!authToken &&pathname != '/authentication/sign-in' && pathname != '/authentication/sign-up') {
      
    }

}

