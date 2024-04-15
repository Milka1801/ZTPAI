import React from 'react'
import './Login.css'

const LoginPage = () => {
    return (

    <div className="registration">
        <div className="registerForm">
            <div className="borrowbuddy">
                <h1>BorrowBuddy</h1>
            </div>
            
            <div className="loginForm">
                <form action="login" method="POST">
                    <input name="name" type="text" placeholder="Name" />
                    <input name="surname" type="text" placeholder="Surname" />
                    <input name="email" type="email" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />



                    <button type="submit">Sign Up!</button>
                </form>
            </div>
        </div>
    </div>

    )
}

export default LoginPage