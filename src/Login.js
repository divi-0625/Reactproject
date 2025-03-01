 import React from 'react';
 import './Login.css'
 import  './Home'
 import logo from './logo.png'

const Login = () => {
  function signup(){
    window.location.replace("/home")
  }
  return (
    <div className='parent'>
      <div className='child'>
        <img  className='loginlogo'src={logo} alt=""/>
        <div>
          <h2 className='login'>LoginPage</h2>
          <input type='email' placeholder='Enter EmailId'></input>
        </div>
        <div>
          <input type="password" placeholder='Enter Password'></input>
        </div>
        <div className='loginbutton'>
          <button onClick={signup} type="submit" >Login</button>
        </div> 
      </div>
    </div>
  );
};


export default Login;