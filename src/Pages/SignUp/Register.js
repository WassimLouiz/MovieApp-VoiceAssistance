import React from "react";
import "../../style.scss";
import loginImg from "./login.svg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class Register extends React.Component{

    signUp() {

        const auth = getAuth();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        if (email !='' & password!=''){
        createUserWithEmailAndPassword(auth ,email, password)
          .then((u) => {
            console.log('Successfully Signed Up');
            
          })
          .catch((err) => {
            console.log('Error: ' + err.toString());
            alert('Error: ' + err.toString());
          })}else{
            console.log('Stop');
            alert('No input was registered');
          }
      }
   
      render(){
        return (
            <div className="base-container" >
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id ="email" type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <a href='/' onClick={this.signUp,()=>{this.props.onConnected(true)}} type="button"  className="btn">
                        Register
                    </a>
                </div>
            </div>
        );
    }
}
export default Register ;