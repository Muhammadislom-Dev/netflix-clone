// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJQhoDTmhrJWgyrscXFdVUWdJsuINcqqQ",
    authDomain: "netflix-clone-9258f.firebaseapp.com",
    projectId: "netflix-clone-9258f",
    storageBucket: "netflix-clone-9258f.appspot.com",
    messagingSenderId: "23856759349",
    appId: "1:23856759349:web:777bf19f6d08d776a9e77c"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }