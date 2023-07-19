import React from 'react';
import Meta from '../components/Meta';
import BradCrump from '../components/BradCrump';
import {AiOutlineClose} from 'react-icons/ai'

 const Wishlist = ()=>{
    return(
        <div>
            <Meta title={"wishlist"}/>
            <BradCrump title="wishlist"/>
            <div className="wishlist-wrapper home-wrapper-2 py-5">
            <div className="container xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                        <AiOutlineClose className="position-absolute cross"/>
                            <div className="wishlist-card-image">
                            <img src="images/i11.jpg" alt="i11.jpg" className="img-fluid"/>
                            </div>
                           <div className="bg-white px-3 py-3">
                           <h6 className="title">Honer TI 0.1GB RAM 8GM ROM 7 Inch with 
                                Wi-Fi  + 3G Tablet</h6>
                            <h5 className="price">$ 100</h5>
                           </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                        <AiOutlineClose className="position-absolute cross"/>
                            <div className="wishlist-card-image">
                            <img src="images/i11.jpg" alt="i11.jpg" className="img-fluid"/>
                            </div>
                           <div className="bg-white px-3 py-3">
                           <h6 className="title">Honer TI 0.1GB RAM 8GM ROM 7 Inch with 
                                Wi-Fi  + 3G Tablet</h6>
                            <h5 className="price">$ 100</h5>
                           </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                        <AiOutlineClose className="position-absolute cross"/>
                            <div className="wishlist-card-image">
                            <img src="images/i11.jpg" alt="i11.jpg" className="img-fluid"/>
                            </div>
                           <div className="bg-white px-3 py-3">
                           <h6 className="title">Honer TI 0.1GB RAM 8GM ROM 7 Inch with 
                                Wi-Fi  + 3G Tablet</h6>
                            <h5 className="price">$ 100</h5>
                           </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                        <AiOutlineClose className="position-absolute cross"/>
                            <div className="wishlist-card-image">
                            <img src="images/i11.jpg" alt="i11.jpg" className="img-fluid"/>
                            </div>
                           <div className="bg-white px-3 py-3">
                           <h6 className="title">Honer TI 0.1GB RAM 8GM ROM 7 Inch with 
                                Wi-Fi  + 3G Tablet</h6>
                            <h5 className="price">$ 100</h5>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
 }
 export default Wishlist;