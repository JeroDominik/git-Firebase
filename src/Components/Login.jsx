import e from 'express';
import React, { useState } from 'react';
import {auth} from '../firebaseconfig';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const registrarUsuario = (e) => {
        e.preventDefault()
        try {
            auth.createUserWithEmailAndPassword(email, pass)
            alert('Usuario Registrado')
        } catch(e) {
            console.log(e)
        }
    }


    return (
        <div className='row mt-5'>
            <div className='col'></div>
            <div className='col'>
                <form onSubmit={registrarUsuario} className='form-group'>
                    <input 
                        onChange={ (e) => {setEmail(e.target.value)} }
                        className="form-control"
                        type="text" 
                        placeholder="Introduce el Email"
                    />
                    <input 
                        onChange={ (e) => {setPass(e.target.value)} }
                        className="form-control"
                        type="password" 
                        placeholder="Introduce la Password"
                    />
                    <input 
                        className=" btn btn-dark btn-block mt-2"
                        type="submit"
                        value="Registrar Usuario"
                    />
                </form>
            </div>
            <div className='col'></div>
        </div>
    )
}

export default Login;