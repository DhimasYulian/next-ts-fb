import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyChl6GapjI40AxgL2kq9U_JQ7RLINqdCOw",
    authDomain: "next-ts-fb.firebaseapp.com",
    projectId: "next-ts-fb",
    storageBucket: "next-ts-fb.appspot.com",
    messagingSenderId: "1062116551906",
    appId: "1:1062116551906:web:364d86d1e91ccba00a42bb"
};

const app = firebase.apps.length <= 0 ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = app.firestore()
const storage = firebase.storage()

export {db, storage}