import { auth } from "./firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,GoogleAuthProvider} from "firebase/auth";

export const deCreateUserWithEmailAndPassword = async (email , password)=> {
    return createUserWithEmailAndPassword (auth , email ,password);
    // راح استعدي بيها الكرييت يوزر وباسورد من ال auth
};

export const doSignInWithEmailAndPassword =  (email ,password) => {
    return signInWithEmailAndPassword(auth , email,password);
};

export const doSignInWithGoogle = async () => {
    const Provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,Provider)

    return result
};

export const doSignOut = () => {
    return auth.signOut();
};