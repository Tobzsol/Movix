import React from 'react';


function Login(props) {
    return (
        <div className='login-details'>
            <img src="/public/Image/Logo.png" alt="" />
            <h1>Hi, Welcome</h1>
            <p>Please sign-up to start your experience</p>
            <div className='login-input'>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button className='login-button' type="submit">Login</button>
            </div>
            <div className='login-alternative'>
            <p>Don't have an account?</p>
            <a className='register-link' href="">Register</a>
            </div>
        </div>
    );
}

export default Login;