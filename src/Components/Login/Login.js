import React from 'react';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [data, setData] = useContext(UserContext)
    var provider = new firebase.auth.GoogleAuthProvider();
    const GoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const newData = { ...data, email: user.email }
                setData(newData)
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
        <section >
            <div className="container">
                <div className="row m-1 m-md-0 d-flex height justify-content-center align-items-center">
                    <div className="text-center col-md-6 py-5 bg">
                        <div className="pb-5">
                            <h3 className="text-uppercase fw-bold">
                                Log In
                            </h3>
                        </div>
                        <div>
                            <button onClick={GoogleSignIn} className='btn btn-outline-light rounded-pill btn-lg fw-bold'><FcGoogle className='fs-1' /> <span className='px-3 px-md-5'>With Google</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;