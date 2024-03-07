import React from "react";
import './css/footer.css';

import Apple from '../components/app-store-badge/128x128.png';
import Google from '../components/google-play-badge/128x128.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="first-part">
                <div className="download">
                    <button>
                        <img src={Apple} alt="Apple Download"></img>
                    </button>
                    <button className="google">
                        <img src={Google} alt="Google Download"></img>
                    </button>
                </div>
            </div>

            <div className="second-part">
                <div className="footer-column">
                    <h2>Watch</h2>
                    <ul>
                        <li><button>Spotlight</button></li>
                        <li><button>Movies</button></li>
                        <li><button>TV</button></li>
                        <li><button>Free</button></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h2>My Account</h2>
                    <ul>
                        <li><button>My Vudu</button></li>
                        <li><button>Account</button></li>
                        <li><button>Settings</button></li>
                        <li><button>Manage Devices</button></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h2>Features</h2>
                    <ul>
                        <li><button>Lists</button></li>
                        <li><button>Family</button></li>
                        <li><button>Disc to Digital</button></li>
                        <li><button>InstaWatch</button></li>
                        <li><button>Movies Anywhere</button></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h2>Help</h2>
                    <ul>
                        <li><button>About Us</button></li>
                        <li><button>Device</button></li>
                        <li><button>Support</button></li>
                        <li><button>Forums</button></li>
                        <li><button>Contact Us</button></li>
                        <li><button>Jobs</button></li>
                    </ul>
                </div>
            </div>

        </footer>
    
    );
};

export default Footer;
