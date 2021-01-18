import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function MainPage() {

    const [loggedOut, setLoggedOut] = useState(false);

    return( 
        <div className='main-div'>
            <p className='main-header'>Панель Управления</p>
            <input className='main-input1' placeholder='Идентификатор'></input>
            <button className='top-button'>Назначить</button>
            <button className='top-button' style={{marginLeft:'195px'}} onClick={()=>{setLoggedOut(true);}}>Выйти</button>
            <div className='row'>
                <div className='column'>
                    <input className='row-input' placeholder='Минимальная пороговая температура'></input>
                    <button className='row-button'>Назначить</button>
                    <input className='row-input' placeholder='Максимальная пороговая температура'></input>
                    <button className='row-button'>Назначить</button>
                </div>
                <div className='column'>
                    <input className='row-input' placeholder='Минимальная пороговая влажность'></input>
                    <button className='row-button'>Назначить</button>
                    <input className='row-input' placeholder='Максимальная пороговая влажность'></input>
                    <button className='row-button'>Назначить</button>
                </div>
            </div>
            <p>Графики</p>

            {loggedOut ? (<Redirect push to='/' />) : null}
        </div>
    );
}