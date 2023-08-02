import React from 'react'
import './login.css';
export default function Login() {
    return (
        <div className="login_signup_page">
            <div className='login'>
                <div className="sign_up_header">
                    <img src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png" alt="" srcset="" />
                    <form action="">
                        <div className="form_elements">

                            <label htmlFor="email">E-Mail  </label>
                            <input type="email" name="email" id="" />
                        </div>
                        <div className="form_elements">
                            <label htmlFor="password">Password  </label>
                            <input type="password" name="password" id="" />
                        </div>
                        <div className="form_elements">

                            <button type="submit"> Log in </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="signup_section">
                <div className="left">
                    <img src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png" alt="" srcset="" />
                    <h1>Connect Network Grow</h1>
                </div>
                <div className="signup">
                    <h1>Sign Up Now!</h1>
                    <form action="">
                        <div className="SignUp_elements">
                            <label htmlFor="firstName"> First Name</label>
                            <input type="text" id='firstName' />
                        </div>
                        <div className="SignUp_elements">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id='lastName' />
                        </div>
                        <div className="SignUp_elements">
                            <label htmlFor="email">E-Mail</label>
                            <input type="email" id='email' />
                        </div>
                        <div className="SignUp_elements">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' />
                        </div>
                        <button type="button">Sign Up</button>
                    </form>
                </div>
            </div>
            <div className="footer">

                <h1>Make The Most of Your Professional Life</h1>
            </div>
        </div>
    )
}
