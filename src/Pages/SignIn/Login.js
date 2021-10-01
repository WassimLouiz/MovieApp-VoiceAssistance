import React from "react";
import "../../style.scss";
import "./Login.scss";
import { Link } from 'react-router-dom';
import loginImg from "./login.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class Login extends React.Component{
    login() {
        const auth = getAuth();

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        if (email != '' & password !=''){
        signInWithEmailAndPassword(auth, email, password)
          .then((u) => {
            console.log('Successfully Logged In');
          })
          .catch((err) => {
            console.log('Error: ' + err.toString());
            alert('Error: ' + err.toString());
          })
        }else{
            console.log('Stop');
            alert('No input was registered');
        }
      }

      render(){
        return (
            <div className="base-container" >
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input id="email" type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Link to='/' type="button" onClick={this.login} className="btn">
                        Login
                    </Link>
                </div>
            </div>
        );
    }
}
export default Login ;