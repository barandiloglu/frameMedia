import React from "react";
import './css/registration.css';
import { AiOutlineClose } from 'react-icons/ai';

const Registration = ( {onClose} ) => {
    return (
        <div className="login-popup">
            <div className="login-content">
                <button className="close-button" onClick={onClose}><AiOutlineClose/></button>

                <h2>Create an Account</h2>
                <form>
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" placeholder="First Name" id="firstName" name="firstName" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Last Name" id="lastName" name="lastName" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="email" placeholder="Email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <input type="password" placeholder="Password" id="password" name="password" required />
                    </div>

                    <div className="form-buttons">
                        <button type="submit">Create an Account</button>
                        <button type="button" className="signUp">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
