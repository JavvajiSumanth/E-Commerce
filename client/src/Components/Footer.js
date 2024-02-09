import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {FaTwitter} from 'react-icons/fa';
import {SocialIcon} from 'react-social-icons';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="box">
                <div className="contact-us">
                    <p className="heading-color">Contact Us</p>
                    <p className="text-color">Hi, we are always open for cooperation and suggestions, contact us in one of the ways below:</p>
                </div>
                <div className="information">
                    <p className="heading-color">Information</p>
                    <a href="#">About US</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Brands</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Returns</a>
                    <a href="#">Site Map</a>
                </div>
                <div className="my-account">
                    <p className="heading-color">My Account</p>
                    <a href="#">Store Location</a>
                    <a href="#">Order History</a>
                    <a href="#">Wish List</a>
                    <a href="#">NewsLetter</a>
                    <a href="#">Special Offers</a>
                    <a href="#">Gift Certificates</a>
                    <a href="#">Affiliates</a>
                </div>
                <div className="news-letter">
                    <p className="heading-color">News Letter</p>
                    <p className="text-color">Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.</p>
                    <form>
                        <input type="email" placeholder="user@example.com" className="input-style"></input>
                        <button className="subscribe">Subscribe</button>
                    </form>
                    <p className="text-color">Follow us on social media netwroks</p>
                    {/* <FaTwitter/> */}
                    <div className="social-icons">
                    <   SocialIcon url="https://www.facebook.com" className="icons"></SocialIcon>
                        <SocialIcon url="https://twitter.com" className="icons"></SocialIcon>
                        <SocialIcon url="https://www.youtube.com" className="icons"></SocialIcon>
                        <SocialIcon url="https://www.instagram.com" className="icons"></SocialIcon>
                    </div>
                </div>
            </div>
            {/* <div className="box-1">
                <p>Powered by React / Next.js — Designed by Kos</p>
            </div> */}
        </div>
     );
}
 
export default Footer;
