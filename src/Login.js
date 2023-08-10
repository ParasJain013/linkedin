import React, { useState } from 'react'
import { auth } from './firebase'
import './login.css';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                dispatch(login({
                    email: user.email,
                    uid: user.uid,
                    displayName: name,
                }))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`${errorCode} AND Let's Goooo   ${errorMessage}`)
            });

    }
    const register = async () => {
        console.log(user)
        if (!firstName || !lastName) {
            return alert("Enter Full Name");
        }
        // await setName(firstName + ' ' + lastName);
        // console.log(name);
        createUserWithEmailAndPassword(auth, email, password)

            .then((result) => {

                // console.log("42 Before UPDATE resutl.user" + JSON.stringify(result.user) + "NAME  " + name + " FIRST " + firstName)
                // console.log(name);
                return updateProfile(result.user, {
                    displayName: name,
                })
                console.log("43 Before UPDATE auth.crrentuser" + JSON.stringify(auth.currentUser))
            })
            .then(() => {
                const user = auth.currentUser;
                // console.log(auth.currentUser)
                dispatch(login({
                    email: user.email,
                    uid: user.uid,
                    displayName: name,
                }))
                // console.log(user.email, user.uid, user.displayName);

            })
            .then(() => {
                console.log(((JSON.stringify(user))))
            })


            // .then(() => {
            //     console.log('auth Current USER' + JSON.stringify(auth.currentUser) + "NAME   " + name + " FIRST " + firstName)
            // })

            .catch((error) => {
                alert(error)
                console.log(error)
            })
        // await setDisplayName();


        // console.log("AFTER EVRYTHING" + JSON.stringify(auth.currentUser) + "NAME" + name + " FIRST " + firstName);

    }

    return (
        <div className="login_signup_page">
            <div className='login'>
                <div className="sign_up_header">
                    <img src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png" alt="" srcSet="" />
                    <form action="">
                        <div className="form_elements">

                            <label htmlFor="email">E-Mail  </label>
                            <input type="email" name="email" id="login_email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form_elements">
                            <label htmlFor="password">Password  </label>
                            <input type="password" name="password" id="login_password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form_elements">
                            <button type="submit" onClick={loginToApp}> Log in </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="signup_section">
                <div className="left">
                    <img src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png" alt="" srcSet="" />
                    <h1>Connect Network Grow</h1>
                </div>
                <div className="signup">
                    <h1>Sign Up Now!</h1>
                    <form action="">
                        <div className="SignUp_elements">
                            <label htmlFor="firstName"> First Name</label>
                            <input type="text" id='firstName' onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="SignUp_elements">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id='lastName' onChange={(e) => {
                                setName(firstName + e.target.value)
                                setLastName(e.target.value)
                                console.log(lastName)
                            }
                            } />
                        </div>
                        <div className="SignUp_elements">
                            <label htmlFor="email">E-Mail</label>
                            <input type="email" id='Signup_email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="SignUp_elements">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} id='signup_password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="SignUp_elements">
                            <button type="button" onClick={register}>Sign Up</button>
                        </div>

                    </form>
                </div>
            </div>
            <div className="footer">
                <h1>Make The Most of Your Professional Life</h1>
            </div>
        </div>
    )
}
