import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdfdr1ClUEp-_PHVNrp1eYMj3qSmveRos",
    authDomain: "venta-online-ca3b4.firebaseapp.com",
    projectId: "venta-online-ca3b4",
    storageBucket: "venta-online-ca3b4.appspot.com",
    messagingSenderId: "887184854691",
    appId: "1:887184854691:web:22bf5b3786a2940864b916"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
})

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


const db = getFirestore();

//Insertar usuario en la base de datos
export const createUserDocumentFormAuth = async (uid, name, email) => {

    const userDoc = doc(db, "user", uid)
    const getUserDoc = await getDoc(userDoc)

    if (!getUserDoc.exists()) {
        const createdAt = new Date();

        try {
            await setDoc(userDoc, {
                name,
                email,
                createdAt
            })

        } catch (error) {
            console.log(error.message)
        }
    }
}

//Crea un usuario para autenticarlo en el firebase auth
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (email && password) {
        return await createUserWithEmailAndPassword(auth, email, password)
    }
}

//Autenticar usuario ya creado
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

//Desautenticar usuario
export const signOutUsser = async () => await signOut(auth)

//Observer

export const onAuthStateChangedListener = (funcion) => {
    onAuthStateChanged(auth, funcion)
}

