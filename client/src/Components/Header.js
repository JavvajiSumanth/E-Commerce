import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../assets/logo.png'
import ReactCountryFlag from "react-country-flag";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';


const Header = () => {

    let currency = "US Dollar";
    let compareCount = 0;

    const [showLoginForm, setShowLoginForm] = useState(false);

    const [showShoppingPopUp, setShoppingPopUp] = useState(false);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginDetails = {email, password};

        const response = await fetch('http://localhost:4000/user',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(loginDetails)
    })
        // }).then(() => {
        //     console.log("Login ")
        // }).catch((error) => {
        //     console.log("POST API error",error);
        // })
        const data = await response.json();
        if (data.status==='OK') {

            alert('Login successful')
            //console.log(data)
            
        } else {
            alert('Please check your username and password')
        }
    }


    const handlePersonIconClick = () => {
        setShowLoginForm(!showLoginForm);
    };

    const handleShoopingCart = () => {
        setShoppingPopUp(!showShoppingPopUp)
    };

    return (
        <div className="header">
            <div className="nav-1">
                <div className="header-nav-one">
                    <div className="list-group">
                        Call Us: (800) 060-0730
                        <Link to="/about" className='list-group-item'>About Us</Link>
                        <Link to="/contact" className='list-group-item'>Contacts</Link>
                        <Link to="/track-order" className='list-group-item'>Track Order</Link>
                    </div>
                </div>
                <div className="header-nav-two">
                    <p className="logo-slogan">AUTO PARTS FOR CARS, TRUCKS AND MOTORCYCLES</p>
                </div>
                <div className="header-nav-three">
                    <div className="list-groups">
                        <Link to="/" className="list-groups-items">Comapre : {compareCount}</Link>
                        <Link to="/" className="list-groups-items">Currency : {
                            <select name="select" id="select" defaultValue={currency}>
                                <option value="EUR">Euro</option>
                                <option value="GBP">Pound Sterling</option>
                                <option value="USD">US Dollar</option>
                                <option value="RUB">Russian Ruble</option>
                            </select>
                        }</Link>

                        <Link to="/" className="list-groups-items">Language : {<select name="language" id="language">
                            <option><ReactCountryFlag countryCode="US" />English</option>
                            <option><ReactCountryFlag countryCode="RUB" />Russian</option>
                            <option>RTL</option>
                        </select>
                        }</Link>

                    </div>
                </div>
            </div>
            <div className="nav-second-line">
                <div className="nav-menu">
                    <a href="#" className="nav-menu-items-menu">Menu</a>
                    <a href="#" className="nav-menu-items">Home</a>
                    <a href="#" className="nav-menu-items">Shop</a>
                    <a href="#" className="nav-menu-items">Blog</a>
                    <a href="#" className="nav-menu-items">Account</a>
                    <a href="#" className="nav-menu-items">Pages</a>
                </div>
                <div className="logo">
                    <Link to="/"><img src={logo} className="app-logo"></img></Link>
                </div>
                <div className="account">
                    <div className="heart">
                        <i className="bi bi-suit-heart" style={{ width: '32px', height: '32px' }}></i>
                    </div>
                    <div>
                        <Link to="/">
                            <i className="bi bi-person" onClick={handlePersonIconClick}></i>
                        </Link>
                        {showLoginForm && (
                            <div className="login-form">
                                <form className="form-details" onSubmit={handleSubmit}>
                                    <h3>Log In To Your Account</h3>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="auto-parts@example.com" className="login-form-input-items"/>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Passsword" className="login-form-input-items"/>
                                    <a href="#">Forgot Password</a>
                                    <button className="login-submit">Login</button>
                                    <p>Create An Account</p>
                                </form>
                            </div>
                        )}
                    </div>
                    <div className="shopping-cart">
                        <i className="bi bi-cart" onClick={handleShoopingCart}></i>
                        {
                            showShoppingPopUp && (
                                <div>
                                    <p>Your Shopping Cart is Empty!</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;