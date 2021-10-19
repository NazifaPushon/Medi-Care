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

// this hook is for firebase authentication
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [isLoading,setIsLoading] = useState(true)
    const [user, setUser] = useState({});

    //update user on state change
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

    //function for sign in with google
    const signInWithGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    };

    //function for sign Up
    const signUp = (email, password) => {
        setIsLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
    }

    // this function update username
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

    // this function is for sign in
    const signIn = (email, password) => {
        setIsLoading(true)
        return  signInWithEmailAndPassword(auth, email, password)
    }

    // this function is for log out
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
