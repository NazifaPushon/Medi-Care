import {
    createUserWithEmailAndPassword,
    getAuth, GoogleAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "@firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [isLoading,setIsLoading] = useState(true)
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser("");
            }
            setIsLoading(false)
        });
    }, [auth, user , isLoading]);

    const signInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    };

    const signUp = (email, password) => {
        setIsLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            setUser({...auth.currentUser,displayName:name})
            Swal.fire({
                icon: 'success',
                title: 'Greate Job',
                text: 'Account Created Successfully',
            })
          }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Something Went Wrong',
                text: error.message,
            })
          });
    }

    const signIn = (email, password) => {
        setIsLoading(true)
        return  signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
            Swal.fire({
                icon: 'success',
                title: 'Logged Out',
                text: 'Yor Logged Out Successfully',
            })
          }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Something Went Wrong',
                text: error.message,
            })
          }).finally(() => {
            setIsLoading(false)
          });
          
    }
    return {
        user,
        setUser,
        signInWithGoogle,
        signUp,
        signIn,
        logOut,
        isLoading,
        profileUpdate,
        setIsLoading
    }
};

export default useFirebase;
