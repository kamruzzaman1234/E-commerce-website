import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineGift, AiFillAlipayCircle} from 'react-icons/ai';
import {BsFillBusFrontFill, BsFillPhoneFill, BsSmartwatch} from 'react-icons/bs';
import {BiSupport,BiHeadphone} from 'react-icons/bi';
import {CiPercent} from 'react-icons/ci';
import {AiOutlineCamera} from 'react-icons/ai';
import {HiDesktopComputer} from 'react-icons/hi';
import Marquee from 'react-fast-marquee';
import {FcCdLogo,FcDvdLogo} from 'react-icons/fc'
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';



const Home = ()=>{
    return(
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                    <div className="main-banner position-relative">
                        <img src="images/img1.jpg" className="img-fluid rounded" alt="Image"/>
                        <div className="main-banner-content position-absolute">
                            <h4>SUPERCHARGO FOR PROS</h4>
                            <h5>i pad 513+ pro</h5>
                            <p>From $999.00 or $41.51/mo</p>
                            <Link className="text-decoration-none button">Buy Now</Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                            <div className="small-banner position-relative">
                        <img src="images/laptop1.jpg" className="img-fluid rounded" alt="Image"/>
                        <div className="small-banner-content position-absolute">
                            <h4>SUPERCHARGO FOR PROS</h4>
                            <h5>i pad 513+ pro</h5>
                            <p>From $999.00 or $41.51/mo</p>
                            
                        </div>
                    </div>
                            </div>
                            <div className="col-6">
                            <div className="small-banner position-relative">
                        <img src="images/headphone.jpg" className="img-fluid rounded" alt="Image"/>
                        <div className="small-banner-content position-absolute">
                            <h4>SUPERCHARGO FOR PROS</h4>
                            <h5>i pad 513+ pro</h5>
                            <p>From $999.00 or $41.51/mo</p>
                            
                        </div>
                    </div>
                 </div>
                </div>
                <div className="row mt-3">
                <div className="col-6">
                            <div className="small-banner position-relative">
                        <img src="images/ipad.jpg" className="img-fluid rounded" alt="Image"/>
                        <div className="small-banner-content position-absolute">
                            <h4>NEW ARRIVAL</h4>
                            <h5>Buy ipad air</h5>
                            <p>From $999.00 or $41.51/mo</p>
                            
                        </div>
                    </div>
                            </div>
                         <div className="col-6">
                            <div className="small-banner position-relative">
                        <img src="images/watch.jpg" className="img-fluid rounded" alt="Image"/>
                        <div className="small-banner-content position-absolute">
                            <h4>SUPERCHARGO FOR PROS</h4>
                            <h5>i pad 513+ pro</h5>
                            <p>From $999.00 or $41.51/mo</p>
                            
                        </div>
                    </div>
                 </div>
                </div>
                        
                    </div>
                </div>
                </div>
                
            </section>

            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="service d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center p-3">
                                    <BsFillBusFrontFill className="fs-1"/>
                                    <div className="px-2">
                                        <h6>Free Shipping</h6>
                                        <p >Form the all orders over $100 </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center p-3">
                                    <AiOutlineGift className="fs-1"/>
                                    <div className="px-2">
                                        <h6>Daily Support Offer</h6>
                                        <p >save up to 25% off</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center p-3">
                                    <BiSupport className="fs-1"/>
                                    <div className="px-2">
                                        <h6>Support 24/7</h6>
                                        <p >Shop with an expert</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center p-3">
                                    <CiPercent className="fs-1"/>
                                    <div className="px-2">
                                        <h6>Affordable Prices</h6>
                                        <p >Get factory direct offer </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center p-3">
                                    <AiFillAlipayCircle className="fs-1"/>
                                    <div className="px-2">
                                        <h6>Affordable Prices</h6>
                                        <p >Get factory direct offer </p>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10items</p>
                                    </div>
                                   <img src="images/mobile.jpg" className="img-fluid"/>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10items</p>
                                    </div>
                                    <img src="images/mobile.jpg" className="img-fluid"/>
                                </div>

                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10items</p>
                                    </div>
                                    <img src="images/he.jpg" className="img-fluid"/>
                                </div>

                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <h6>Watch</h6>
                                        <p>10items</p>
                                    </div>
                                    <img src="images/he.jpg" className="img-fluid"/>
                                </div>

                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <h6>Headphone</h6>
                                        <p>10items</p>
                                    </div>
                                    <img src="images/he.jpg" className="img-fluid"/>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <h6>Headphone</h6>
                                        <p>10items</p>
                                    </div>
                                    <img src="images/he.jpg" className="img-fluid"/>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10items</p>
                                    </div>
                                    <img src="images/he.jpg" className="img-fluid"/>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10items</p>
                                    </div>
                                    <img src="images/he.jpg" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                    <h3 className="section-heading">Features Collection</h3>
                    </div>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
                </div>
            </section>
            <section className="special-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                        <h3 className="section-heading">Special Product</h3>
                        </div>
                    </div>
                    <div className="row">
                        <SpecialProduct/>
                        <SpecialProduct/>
                        <SpecialProduct/>
                    </div>
                </div>
            </section>
            <section className="feature-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                    <h3 className="section-heading">Our Popular Product</h3>
                    </div>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                </div>
                </div>
            </section>
            <section className="focus-wrapper py-5 home-wrapper-2 ">
                <div className="container-xxl">
                    <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/laptop.jpg" alt="laptop"
                            className="img-fluid" style={{}}/>
                            <div className="famous-content position-absolute">
                            <h5>Big screen</h5>
                            <h6>Smart whitch seris 7</h6>
                            <p>for $339 or $16.6 /mo for 24mo</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/laptop.jpg" alt="laptop"
                            className="img-fluid" style={{}}/>
                            <div className="famous-content position-absolute">
                            <h5>Big screen</h5>
                            <h6>Smart whitch seris 7</h6>
                            <p>for $339 or $16.6 /mo for 24mo</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/laptop.jpg" alt="laptop"
                            className="img-fluid" style={{}}/>
                            <div className="famous-content position-absolute">
                            <h5>Big screen</h5>
                            <h6>Smart whitch seris 7</h6>
                            <p>for $339 or $16.6 /mo for 24mo</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/laptop.jpg" alt="laptop"
                            className="img-fluid" style={{}}/>
                            <div className="famous-content position-absolute">
                            <h5>Big screen</h5>
                            <h6>Smart whitch seris 7</h6>
                            <p>for $339 or $16.6 /mo for 24mo</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="marquee-wrapper py-5">
                <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                        <Marquee className="d-flex">
                            <div className="mx-4 w-25">
                            <img src="images/brand.png"/>
                            </div>
                            <div className="mx-4 w-50">
                            <img src="images/brand.png"/>
                            </div>
                            <div className="mx-4 w-25">
                            <img src="images/brand.png"/>
                            </div>
                            <div className="mx-4 w-25">
                                <img src="images/brand.png"/>
                            </div>
                        </Marquee>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            
            <section className="blog-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Letest Blogs</h3>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <BlogCard/>
                        </div>
                        <div className="col-3">
                            <BlogCard/>
                        </div>
                        <div className="col-3">
                            <BlogCard/>
                        </div>
                        <div className="col-3">
                            <BlogCard/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;