
import './App.css';
import a from './images/a.png';
import eye from './images/eye.png';
import f from './images/f.png';
import g from './images/g.png';

import React, { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      setErrors({ message: 'Please fill in all fields.' });
      setSuccessMessage('');
      return;
    }

    if (password !== confirmPassword) {
      setErrors({ message: 'Error: Please make sure your passwords and confirm passwords match!' });
      setSuccessMessage('');
      return;
    }

    if (errors.message) {
      setErrors({});
    }

    setSuccessMessage('Successfully Created!');
  };

  return (
    <div className='main'>
    
    <div className='left'>
<img src={a} alt=''></img>
    </div>

      
<div className='right'>
<div className='right_main'>
      <h1>Create Account</h1>
      <div className='logo_signUp'>
        <div className='google'>
        <img src={g} alt=''></img><span><a href='https://accounts.google.com/'>Sign up with Google</a></span>
        </div>
        <div className='facebook'>
        <img src={f} alt=''></img><span><a href='https://www.facebook.com/login/'>Sign up with Facebook</a> </span>
        </div>
      </div>
      <p>- OR -</p>
      <form onSubmit={handleSubmit}>
        <div className='input_div'>
       
          <input
            type="text"
            name="fullName"
            placeholder='Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className='input_div'>
          
          <input
            type="email"
            name="email"
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input_div'>
        
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img src={eye} alt=''></img>
        </div>
        <div className='input_div'>
         
          <input
            type="password"
            name="confirmPassword"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <img src={eye} alt=''></img>
        </div>
        <div className='submit-btn'>
          <button type="submit">Create Account</button>
        </div>
      </form>
      {errors.message && <div className='errors-message'>{errors.message}</div>}
      {successMessage && <div className='success-message' >{successMessage}</div>}
      </div>
</div>

      
    </div>
  );
}

export default App;
