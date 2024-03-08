import React, {useState} from "react";
import './css/login.css';
import { AiOutlineClose } from 'react-icons/ai';

import Registration from './registration.js';

const Login = ( {onClose} ) => {
    const [showRegistration, setShowRegistration] = useState(false);

    const toggleRegistration = () => {
        setShowRegistration(true); 
    };

    const closeRegistration = () => {
        setShowRegistration(false);
    };

    return (
        <div className="login-popup">
            <div className="login-content">
                
                <button className="close-button" onClick={onClose}><AiOutlineClose/></button>

                <h2>Sign in to Frame</h2>
                <form>
                    <div className="form-group">
                        <input type="email" placeholder="Email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <input type="password" placeholder="Password" id="password" name="password" required />
                    </div>

                    <div className="forgotPassword">
                        <button type="button" className="forgotPassword?">Forgot your Password?</button>
                    </div>

                    <div className="form-buttons">
                        <button type="submit">Sign In</button>
                        <button 
                            type="button" 
                            className="signUp" 
                            onClick={() => {
                                toggleRegistration(); 
                            }}>
                                Create an Account
                        </button>
                    </div>
                </form>
            </div>
            
            {showRegistration && <Registration onClose={closeRegistration}/>}
        </div>
    );
};

export default Login;
