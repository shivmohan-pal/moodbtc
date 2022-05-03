import '../Css/SignUp.css';
import {useState} from 'react';


function SignUp(){
  const [visible, setVsibility] = useState(false); 
function visibleOnOff(){
  setVsibility((visible)=> visible? false: true);
}
return (
        <div className="signup-page">
          <h1 id='title' className="title">moodBTC</h1>
          <div className='glass'>
           <p className="welcome">Welcome Back</p>
           <h2>Login into your Account</h2>
              <form>
                  <label htmlFor='email'>Email</label>
                  <input type='email' name='email' id ='eamil' />
                  <label htmlFor='pass' className='pass'>Password<span className="forgot"><a href='/reset-password'>Forgot Password ?</a></span></label>
                  <div className='passblock'>
                   <i className='material-icons eye' onClick={visibleOnOff}>{visible?"visibility":"visibility_off"}</i>
                   <input type={visible? 'text':'password'} name='pass' id='pass'/>
                  </div>
                  <button type='submit'>Login</button>
              </form>
              <p className="regOrNot">Not Registered yet?<a href='/register' className="reg">Register</a></p>
          </div>   
        </div> 

);
}
export default SignUp;

