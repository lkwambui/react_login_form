import React , {useState}from "react";
import "./loginform.css";


const Loginform = () => {

    
  const [popupStyle, showPopup] = useState ("hide")

  const popup = () =>  {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)

  }
    return ( 
        <div className="cover">
            <h1>Login</h1>
            <input type="text"  placeholder="username"/>
            <input type="password" placeholder="password" />
            <div className="login-btn" onClick={popup}>
                Login
            </div>
            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook" > 
                </div>
                <div className="google">

                </div>
            </div>
            <div>
    </div>
    <div className={popupStyle}>
        <h3>Login failed</h3>
        <p>Your Usename or password is incorrect</p>

    </div>
        </div>
     );
}
 
export default Loginform;