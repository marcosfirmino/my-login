import React, { useState, useContext } from 'react';
import './styles.css'
import { AuthContext } from '../../contexts/auth';

import Logo from '../../assets/full.gif'


const LoginPage = () => {
  const { authenticated, login } = useContext
  (AuthContext);


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit", {email, password})

    login(email, password); //integração com o meu contexto / api
  }


  return (
    <div className='logiin' id="login">
      <div className='container-img'>
        <img className='img-logo' src={Logo} alt="logo"/>
      </div>
      {/* <p>{String(authenticated)}</p> */}
      <form className='form' onSubmit={handleSubmit}>
        <h1 className='title'>Login do Sistema</h1>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="field">
          <label htmlFor="password">Senha</label>
          <input type="password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div className="actions">
            <button type="submit">Entrar</button>
          </div>
        </div>
      </form>
    </div>
  )
}


export default LoginPage;