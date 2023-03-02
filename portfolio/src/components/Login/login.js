import React from "react"
import './login.css'

const Login = () => {
    return(
        <div className="login">
            <div className="i-left">
                <div className="i-name">
                <form onSubmit={handleSubmit}>
                        <p>Login</p>
                            <input 
                            type="text" 
                            onChange={handleUsername}
                            placeholder="Username"
                            className="login-name"
                            />
                            
                            <input 
                            type="password" 
                            onChange={handlePassword}
                            placeholder="Password"
                            className="login-password"
                            
                            />
                        <button className="l-btn">LOGIN</button>
                        
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Login