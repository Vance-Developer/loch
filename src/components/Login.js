import React, {useState} from 'react'
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleClick = (e) => {
    e.preventDefault()
     // Basic email validation
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (emailRegex.test(email)) {
       // Email is valid
       setIsValid(true);
       // Redirect to google.com
       window.location.href = 'https://app.loch.one/welcome';
     } else {
       // Email is not valid
       setIsValid(false);
     }
  }
  return (
    <form >
      <div className='login-page'>
        <div className='box'>
          <p className='headings'> Sign up for <br /> exclusive access.</p>
          <input className='input' type='email' placeholder='Your email address' onChange={(e) => {
            setEmail(e.target.value);
            setIsValid(true); // Reset validation on input change
          }} style={{ borderColor: isValid ? 'initial' : 'red' }} />
          <button onClick={handleClick} className='button'>Get Started</button>
          <h5>You’ll receive an email with an invite link to join.</h5>
        </div>
      </div>
    </form>
  )
}

export default Login