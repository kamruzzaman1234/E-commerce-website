import React,{useState} from 'react';
import BradCrump from '../components/BradCrump';
import { Helmet } from 'react-helmet';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';

const OurStore = ()=>{
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      const [grid,setGrid] = useState(4)
     alert(grid)
      
    return(
        <div>
             <Meta title={"Our Store"}/>
            <BradCrump title="Our Store"/>
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Shop By Categories
                                </h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                    Filter By
                                </h3>
                                <div>
                                    <h5 className="sub-title">Availablity</h5>
                                    <div>
                                    <div className="form-check">
                                    <input type="checkbox"
                                     className="form-check-input"
                                     id=""
                                     value=""
                                     />
                                     <label className="form-check-label" for="">
                                        In Stock (1)
                                     </label>
                                    </div>
                                    <div className="form-check">
                                    <input type="checkbox"
                                     className="form-check-input"
                                     id=""
                                     value=""
                                     checked/>
                                     <label className="form-check-label" for="">
                                        Out of Stock
                                     </label>
                                    </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating mb-3">
                                    <input type="email" className="form-control" 
                                    
                                    id="floatingInput" placeholder="from"/>
                                    <label htmlForfor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                    <input type="email" className="form-control" 
                                    
                                    id="floatingInput" placeholder="To"/>
                                    <label htmlForfor="floatingInput">To</label>
                                    </div>
                                    </div>
                                    <h5 className="sub-title">Colors</h5>
                                    <div>
                                        <div className="">
                                        <ul className="colors ps-0">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                        <input type="checkbox"
                                         className="form-check-input"
                                         id="color-1" value=""/>
                                         <label className="form-check-label"
                                         htmlFor="color-1">S (2)</label>
                                        </div>
                                        <div className="form-check">
                                        <input type="checkbox"
                                         className="form-check-input"
                                         id="color-2" value=""/>
                                         <label className="form-check-label"
                                         htmlFor="color-2">M (2)</label>
                                        </div>
                                        <div className="form-check">
                                        <input type="checkbox"
                                         className="form-check-input"
                                         id="color-3" value=""/>
                                         <label className="form-check-label"
                                         htmlFor="color-3">L (2)</label>
                                        </div>
                                        <div className="form-check">
                                        <input type="checkbox"
                                         className="form-check-input"
                                         id="color-4" value=""/>
                                         <label className="form-check-label"
                                         htmlFor="color-4">Xl (2)</label>
                                        </div>
                                        <div className="form-check">
                                        <input type="checkbox"
                                         className="form-check-input"
                                         id="color-5" value=""/>
                                         <label className="form-check-label"
                                         htmlFor="color-5">XXl (2)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                    Product Tags
                                </h3>
                                <div>
                                    <div className="product-tags d-flex
                                     flex-wrap align-items-center gap-10">
                                        <span className="badge bg-secondary rounded-3 py-2 px-3">
                                            Headphone
                                        </span>
                                        <span className="badge bg-secondary rounded-3 py-2 px-3">
                                            Tablet
                                        </span>
                                        <span className="badge bg-secondary rounded-3 py-2 px-3">
                                            Watch
                                        </span>
                                        <span className="badge bg-secondary rounded-3 py-2 px-3">
                                            Laptop
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                    Random Product
                                </h3>
                                <div>
                                    <div className="random-product mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="images/headphone.jpg" className="img-fluid" 
                                            alt="Image"/>
                                        </div>
                                        <div className="w-50 px-2">
                                            <h5>Kids Headphones Bulk 10 pack
                                                multicolored for 
                                            </h5>
                                            <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                          size={24} value="3" edit={false}
                                         activeColor="#ffd700"
                                        />,
                                        <b>$ 300</b>
                                        </div>
                                    </div>

                                    <div className="random-product d-flex">
                                        <div className="w-50">
                                            <img src="images/headphone.jpg" className="img-fluid" 
                                            alt="Image"/>
                                        </div>
                                        <div className="w-50 px-2">
                                            <h5>Kids Headphones Bulk 10 pack
                                                multicolored for 
                                            </h5>
                                            <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                          size={24} value="3" edit={false}
                                         activeColor="#ffd700"
                                        />,
                                        <b>$ 300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{"width": "100px"}}>Sort By</p>
                                    <select className="form-control form-select">
                                        <option value="manual">Featurned</option>
                                        <option value="best-selling"
                                        selected="selected">Best Selling</option>
                                        <option value="title-asending">Alphabeticaly A,Z</option>
                                        <option value="price-asending">Alphabeticaly A,Z</option>
                                        <option value="value-asending">Price, low to hight</option>
                                        <option value="price-descending">
                                            Price high to low
                                        </option>
                                        <option value="created-asending">Date, Old to new</option>
                                        <option value="created-desending">Date, new to old</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10 grid">
                                <p className="totalproducts mb-0">21 Products</p>
                                <div className="d-flex gap-10 align-items-center">
                                    
                                    {/*=====
                                        <img src="images/anis.png" className="d-block img-fluid" alt="grid"/>
                                    <img src="images/anis.png" className="d-block img-fluid" alt="grid"/>
                                    <img src="images/anis.png" className="d-block img-fluid" alt="grid"/>
                                    <img src="images/anis.png" className="d-block img-fluid" alt="grid"/>
                                    =====*/}
                                    <span onClick={()=>{setGrid(4)}}>All</span>
                                    <span onClick={()=>{setGrid(3)}}>Product</span>
                                    <span onClick={()=>{setGrid(2)}}>Normal</span>
                                    <span onClick={()=>{setGrid(12)}}>Brand Product</span>

                                </div>
                                </div>

                                </div>
                            </div>
                            <div className="product-list pb-5">
                               <div className="d-flex gap-10">
                               <ProductCard grid={grid}/>
                               </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurStore;