import React from 'react';
import Meta from '../components/Meta';
import BradCrump from '../components/BradCrump';
import {AiOutlineClose} from 'react-icons/ai';
import Color from '../components/Color';

const CompareProduct = ()=>{
    return(
        <div>
            <Meta title={"Compare-Product"}/>
            <BradCrump title="CompareProduct"/>
            <div className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container xxl">
                    <div className="row">
                        <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <AiOutlineClose className="position-absolute cross"/>
                            
                            <div className="product-card-image">
                            <img src="images/mobile.jpg" alt="mobile" className="img-fluid"/>
                            </div>
                            <div className="compare-product-detail">
                                <h5 className="title">Honer TI 0.1GB RAM 8GM ROM 7 Inch with 
                                Wi-Fi  + 3G Tablet </h5>
                                <h5 className="price mb-3 mt-3">$ 100</h5>
                                <div>
                                    <div className="product-detail">
                                    <h5>Brand :</h5>
                                    <p>Havels</p>
                                    </div> 
                                    <div className="product-detail">
                                    <h5>Type :</h5>
                                    <p>Watch</p>
                                    </div> 
                                    <div className="product-detail">
                                    <h5>Availablity :</h5>
                                    <p>In stock</p>
                                    </div> 
                                    <div className="product-detail">
                                    <h5>Color :</h5>
                                    <Color />
                                    </div>  
                                    <div className="product-detail">
                                    <h5>Size :</h5>
                                    <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <AiOutlineClose className="position-absolute cross"/>
                            
                            <div className="product-card-image">
                            <img src="images/mobile.jpg" alt="mobile" className="img-fluid"/>
                            </div>
                            <div className="compare-product-detail">
                                <h5 className="title">Honer TI 0.1GB RAM 8GM ROM 7 Inch with 
                                Wi-Fi  + 3G Tablet </h5>
                                <h5 className="price mb-3 mt-3">$ 100</h5>
                                <div>
                                    <div className="product-detail">
                                    <h5>Brand :</h5>
                                    <p>Havels</p>
                                    </div> 
                                    <div className="product-detail">
                                    <h5>Type :</h5>
                                    <p>Watch</p>
                                    </div> 
                                    <div className="product-detail">
                                    <h5>Availablity :</h5>
                                    <p>In stock</p>
                                    </div> 
                                    <div className="product-detail">
                                    <h5>Color :</h5>
                                    <Color />
                                    </div>  
                                    <div className="product-detail">
                                    <h5>Size :</h5>
                                    <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <AiOutlineClose className="position-absolute cross"/>
                            
                            <div className="product-card-image">
                            <img src="images/mobile.jpg" alt="mobile" className="img-fluid"/>
                            </div>
                            <div className="compare-product-detail">
                                <h5 className="title">Honer TI 0.1GB RAM 8GM ROM 7 Inch with 
                                Wi-Fi  + 3G Tablet </h5>
                                <h5 className="price mb-3 mt-3">$ 100</h5>
                                <div>
                                    <div className="product-detail">
                                    <h5>Brand :</h5>
                                    <p>Havels</p>
                                    </div> 
                                    <div className="product-detail">
                                    <h5>Type :</h5>
                                    <p>Watch</p>
                                    </div> 
                                    <div className="product-detail">
                                    <h5>Availablity :</h5>
                                    <p>In stock</p>
                                    </div> 
                                    <div className="product-detail">
                                    <h5>Color :</h5>
                                    <Color />
                                    </div>  
                                    <div className="product-detail">
                                    <h5>Size :</h5>
                                    <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <AiOutlineClose className="position-absolute cross"/>
                            
                            <div className="product-card-image">
                            <img src="images/mobile.jpg" alt="mobile" className="img-fluid"/>
                            </div>
                            <div className="compare-product-detail">
                                <h5 className="title">Honer TI 0.1GB RAM 8GM ROM 7 Inch with 
                                Wi-Fi  + 3G Tablet </h5>
                                <h5 className="price mb-3 mt-3">$ 100</h5>
                                <div>
                                    <div className="product-detail">
                                    <h5>Brand :</h5>
                                    <p>Havels</p>
                                    </div> 
                                    <div className="product-detail">
                                    <h5>Type :</h5>
                                    <p>Watch</p>
                                    </div> 
                                    <div className="product-detail">
                                    <h5>Availablity :</h5>
                                    <p>In stock</p>
                                    </div> 
                                    <div className="product-detail">
                                    <h5>Color :</h5>
                                    <Color />
                                    </div>  
                                    <div className="product-detail">
                                    <h5>Size :</h5>
                                    <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                    </div>
                                    </div>
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
export default CompareProduct;