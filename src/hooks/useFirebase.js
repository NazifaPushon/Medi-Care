import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, [auth]);

    const signUp = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Great Job',
                        text: 'Account has been Created',
                    })
                })
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Some thing went wrong',
                    text: `${error.message}`,
                })
            })
    };

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome Back !',
                    text: 'Signed In Successfully ',
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Some thing went wrong',
                    text: `${error.message}`,
                })
            });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
            Swal.fire({
                icon: 'success',
                title: 'Logged Out !',
                text: 'Logged Out Successfully',
            })
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Some thing went wrong',
                text: `${error.message}`,
            })
        });
    }

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
               setUser(result.user)
               Swal.fire({
                icon: 'success',
                title: 'Welcome  !',
                text: 'Signed In Successfully ',
            })
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Some thing went wrong',
                    text: `${error.message}`,
                })
            });

    }

    return {
        signUp,
        user,
        signIn,
        logOut,
        signInWithGoogle
    }
};

export default useFirebase;
