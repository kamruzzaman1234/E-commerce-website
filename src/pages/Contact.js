import React from 'react';
import Meta from '../components/Meta';
import BradCrump from '../components/BradCrump';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi';

const Contact = ()=>{
    return(
        <div>
            <Meta title={"Contact"}/>
            <BradCrump title="Contact "/>   
            <div className="contact-wrapper home-wrapper-2 py-5">
            <div className="container xxl">
            <div className="row">
                <div className="col-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57647.906356482534!2d89.25885087412495!3d25.43845920415826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcda38ad0b44c1%3A0xb21bdfb824732e0!2sPirganj!5e0!3m2!1sen!2sbd!4v1687821607179!5m2!1sen!2sbd"
                 width="600" height="450" 
              
                  allowfullscreen="" 
                  className="border-0 w-100"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-12 mt-5">
                    <div className="contact-inner-wrapper d-flex justify-content-between">
                        <div>
                            <h3 className="contact-title mb-4">Contact Us</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <input type="text" className="form-control"
                                    placeholder="Name"/>
                                </div>
                                <div>
                                    <input type="email" className="form-control"
                                    placeholder="Email"/>
                                </div>
                                <div>
                                    <input type="tel" className="form-control"
                                    placeholder="Mobile No"/>
                                </div>
                                <div>
                                    <textarea type="" placeholder="comments"
                                    cols="30" rows="4" 
                                    id="" className="w-100 form-control"/>
                                </div>
                                <div>
                                    <button className="button border-0">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div>
                        <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                        <div>
                            <ul className="ps-5">
                                <li className="mb-3 d-flex gap-15 align-items-center">
                                    <AiOutlineHome />
                                    <address className="mb-0">Home : 8 , Pirgonj jamtola</address>
                                </li>
                                <li className="mb-3 d-flex gap-15 align-items-center">
                                    <BiPhoneCall />
                                    <a href="tel+880 1935024654">+880 1935024654</a>
                                </li>
                                <li className="mb-3 d-flex gap-15 align-items-center">
                                    <AiOutlineMail />

                                    <a href="mailto: kamruzzamancse22@gamil.com">
                                        kamruzzamancse22@gmail.com
                                    </a>
                                </li>
                                <li className="mb-3 d-flex gap-15 align-items-center">
                                    <BiInfoCircle />
                                    <p className="mb-0">Monday - Friday 8am - 10am</p>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Contact;