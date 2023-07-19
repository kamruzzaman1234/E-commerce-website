import React from 'react';
import {HiOutlineLogin} from 'react-icons/hi';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {AiFillGithub, AiFillFacebook,AiFillTwitterCircle,AiFillLinkedin,AiOutlineInstagram} 
from 'react-icons/ai';


const Footer = ()=>{
    return(
        <>
          <footer className="py-4">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-5">
                        <div className="footer-top-data d-flex align-items-center ga-30">
                             <HiOutlineLogin className="fs-3 text-white mx-2"/>
                            <h2 className="text-white mb-0">Sign Up for News Letter</h2>
                        </div>
                    </div>
                    <div className="col-7">
                    <InputGroup className="mb-3">
        <Form.Control className="form-control py-1"
          placeholder="Your Email Address"
          aria-label="Your Email Address"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2" className="search p-2 bg-dark text-light">
        Subscribe
        </InputGroup.Text>
      </InputGroup>
                    </div>
                </div>
            </div>
          </footer>
          <footer className="py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-4">
                        <h4 className="text-white mb-4">Contact Us</h4>
                        <div>
                            <address className="text-white">
                                Ashulia,Dhaka <br/> House no : 112,road -7 <br/>
                                pincode : 112-21
                            </address>
                            <a href="tel +91 84847773733" className="mt-2 d-block mb-2 text-decoration-none text-white">84847773733</a>
                            <a href="miliokamruzzamancse22@gmail.com" className="mt-2 d-block mb-2
                            text-decoration-none text-white">
                                kamruzzamancse22@gmail.com
                            </a>
                        </div>
                        <div className="social-icon d-flex align-items-center gap-30 mt-4">
                         <a href="/" className="text-white"><AiFillFacebook className="fs-4"/></a>
                        <a href="/" className="text-white"><AiFillGithub className="fs-4"/></a>
                        <a href="/" className="text-white"><AiFillTwitterCircle className="fs-4"/></a>
                        <a href="/" className="text-white"><AiFillLinkedin className="fs-4"/></a>
                        <a href="/" className="text-white"><AiOutlineInstagram className="fs-4"/></a>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className="text-white mb-4">Imformation</h4>
                        <div className="footer-link d-flex flex-column">
                            <Link to="/privacy-policy"
                             className="text-white py-2 mb-1 text-decoration-none">Privacy Policy</Link>
                            <Link to="/refund-policy" 
                            className="text-white py-2 mb-1 text-decoration-none">Refound Policy</Link>
                            <Link to="/shipping-policy" 
                            className="text-white py-2 mb-1 text-decoration-none">Shipping Policy</Link>
                            <Link to="/term-condition" 
                            className="text-white py-2 mb-1 text-decoration-none">Terms & Conditions</Link>
                            <Link className="text-white py-2 mb-1 text-decoration-none">Blogs</Link>
                        </div>
                    </div>
                    <div className="col-3">
                    <h4 className="text-white mb-4">Account</h4>
                    <div className="footer-link d-flex flex-column">
                            <Link className="text-white py-2 mb-1 text-decoration-none">About Us</Link>
                            <Link className="text-white py-2 mb-1 text-decoration-none">Faq</Link>
                            <Link className="text-white py-2 mb-1 text-decoration-none">Contact</Link>
                            
                        </div>
                    </div>
                    <div className="col-2">
                    <h4 className="text-white mb-4">Quick Links</h4>
                        <div className="footer-link d-flex flex-column">
                            <Link className="text-white py-2 mb-1 text-decoration-none">Laptops</Link>
                            <Link className="text-white py-2 mb-1 text-decoration-none">Headphons</Link>
                            <Link className="text-white py-2 mb-1 text-decoration-none">Watch</Link>
                            <Link className="text-white py-2 mb-1 text-decoration-none">Tablets</Link>
                        </div>
                    </div>
                </div>
            </div>    
        </footer> 
          <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                        <p className="text-center mb-0 text-white">$Copy{new Date().getFullYear} 
                Powered by MD Kamrul Hasan</p>
                        </div>
                    </div>
                </div>
            </footer> 
      
        </>
    )
}
export default Footer;