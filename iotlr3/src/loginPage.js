import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function LoginPage() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function tryLogin() {
        if (login === password && login !== '') {
            setLoggedIn(true);
        }
    }

    return( 
        <div className='login-div'>
            <input value={login} onChange={(e)=>{setLogin(e.target.value)}} className='login-input' style={{marginTop:'40px'}} placeholder='Логин'></input>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='login-input' placeholder='Пароль'></input>
            <button className='login-button' onClick={tryLogin}>Войти</button>
        
            {loggedIn ? (<Redirect push to='/main' />) : null}
        </div>
    );
}