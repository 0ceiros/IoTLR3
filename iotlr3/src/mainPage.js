import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Thermometer from 'react-thermometer-chart';

export default function MainPage() {
    /*
    var mqtt    = require('mqtt');
    var options = {
        clientId: 'clientId-WCSn1Q482q',
        port: 1883,
        connectTimeout: 5000,
        path: '/mqtt'
    };

    //var client = mqtt.connect('mqtt://broker.mqttdashboard.com', options);
    //var client = mqtt.connect('ws://test.mosquitto.org:8080');

    
    var client = mqtt.connect('ws://127.0.0.1:1883');
    client.subscribe('Датчик 1');

    var note;
    client.on('message', function (topic, message) {
        note = message.toString();
        console.log(note);
        client.end();
    });
    */

    const [loggedOut, setLoggedOut] = useState(false);
    const [temp, setTemp] = useState(-55);
    const [humidity, setHumidity] = useState(67);

    const [id, setId] = useState('');
    const [maxTemp, setMaxTemp] = useState('');
    const [minTemp, setMinTemp] = useState('');
    const [maxHumidity, setMaxHumidity] = useState('');
    const [minHumidity, setMinHumidity] = useState('');

    const [fetchedData, setFetchedData] = useState(false);

    if (!fetchedData) {
        setFetchedData(true);

        if (localStorage.getItem("id") != null) {
            setId(localStorage.getItem("id"));
        }
        if (localStorage.getItem("minTemp") != null) {
            setMinTemp(localStorage.getItem("minTemp"));
        }
        if (localStorage.getItem("maxTemp") != null) {
            setMaxTemp(localStorage.getItem("maxTemp"));
        }
        if (localStorage.getItem("minHumidity") != null) {
            setMinHumidity(localStorage.getItem("minHumidity"));
        }
        if (localStorage.getItem("maxHumidity") != null) {
            setMaxHumidity(localStorage.getItem("maxHumidity"));
        }
    }

    return( 
        <div className='main-div'>
            <p className='main-header'>Панель Управления</p>
            <input value={id} onChange={(e)=>{setId(e.target.value)}} id='id' className='main-input1' placeholder='Идентификатор'></input>
            <button onClick={()=>{ localStorage.setItem("id", id);}} className='top-button'>Назначить</button>
            <button className='top-button' style={{marginLeft:'195px'}} onClick={()=>{setLoggedOut(true);}}>Выйти</button>
            <div className='row'>
                <div className='column'>
                    <p className='row-header-text'>Температура</p>
                    <p className='row-text'>Минимальная пороговая температура</p>
                    <input value={minTemp} onChange={(e)=>{setMinTemp(e.target.value)}} id='minTemp' className='row-input' placeholder='Минимальная пороговая температура'></input>
                    <button onClick={()=>{localStorage.setItem("minTemp", minTemp);}} className='row-button'>Назначить</button>
                    <p className='row-text'>Максимальная пороговая температура</p>
                    <input value={maxTemp} onChange={(e)=>{setMaxTemp(e.target.value)}} id='maxTemp' className='row-input' placeholder='Максимальная пороговая температура'></input>
                    <button onClick={()=>{localStorage.setItem("maxTemp", maxTemp);}} className='row-button'>Назначить</button>
                    <p className='display-text'>{temp}°C</p>
                    <div style={{display: 'inline-block', width: '200px', position:'relative', left: '200px', top:'-220px'}}>
                        <Thermometer
                            width="200px" height="500px" steps={10} minValue={-100} maxValue={100} currentValue={temp+100}> 
                        </Thermometer>
                    </div>
                    
                </div>
                <div className='column'>
                    <p className='row-header-text'>Влажность</p>
                    <p id='minHumidity' className='row-text'>Минимальная пороговая влажность</p>
                    <input value={minHumidity} onChange={(e)=>{setMinHumidity(e.target.value)}} className='row-input' placeholder='Минимальная пороговая влажность'></input>
                    <button onClick={()=>{localStorage.setItem("minHumidity", minHumidity);}} className='row-button'>Назначить</button>
                    <p className='row-text'>Максимальная пороговая влажность</p>
                    <input value={maxHumidity} onChange={(e)=>{setMaxHumidity(e.target.value)}} id='maxHumidity' className='row-input' placeholder='Максимальная пороговая влажность'></input>
                    <button onClick={()=>{localStorage.setItem("maxHumidity", maxHumidity);}} className='row-button'>Назначить</button>
                    <p className='display-text'>{humidity}%</p>
                    <div style={{display: 'inline-block', width: '200px', position:'relative', left: '250px', top:'-220px'}}>
                        <div className="progress vertical">
                            <div style={{ height: `${humidity}%` }} className="progress-bar">
                                    <span className="sr-only"></span>
                                </div>
                            </div>
                    </div>                    
                </div>
            </div>
            <p>Графики</p>
            
            {loggedOut ? (<Redirect push to='/' />) : null}
        </div>
    );
}