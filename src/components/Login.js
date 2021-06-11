import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import { blue } from '@material-ui/core/colors';


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <form action="">
        <h2>Log In</h2>
        <label for="email">Email</label>
        <input type="text" name="email" required />
        <div className="email error"></div>
        
        <label for="password">Password</label>
        <input type="password" name="password" required />
        <div className="password error"></div>
        <button>Log In</button>
        </form>
    )
}

export default Login
