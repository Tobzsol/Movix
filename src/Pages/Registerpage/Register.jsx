import React from 'react';

function Register(props) {
    return (
        <div>
            <h1>Hi, Welcome</h1>
            <p>Please sign-in to your account and start your experience</p>
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type="submit">Register</button>
            <p>Already have an account?</p>
            <a href="">Login</a>
        </div>
    );
}

export default Register;