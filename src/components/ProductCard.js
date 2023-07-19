import React from 'react';
import ReactStars from "react-rating-stars-component";
import {Link, useLocation} from 'react-router-dom';
import {GiSelfLove} from 'react-icons/gi';
import {AiOutlineShoppingCart} from 'react-icons/ai';


const ProductCard = (props)=>{
    const {grid} = props;
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      let location = useLocation()
     
    return(
        <>
        <div className= {` ${location.pathname === "/store" ? `gir-${grid}` : "col-3"} `}>
            <Link to=":id" className="product-card position-relative">
                <div className="product-image">
                    <img src="images/carmera.jpg" className="img-fluid"/>
                    <img src="images/mobile.jpg" className="img-fluid"/>
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">Kids camera is build 10pack multi cloor for students</h5>
                    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24} value="3" edit={false}
    activeColor="#ffd700"
  />,                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
    At vero at the loream ispum dollar sit amet and
  the concepteture and the other side for the product quality is hight. Its all product is 
  brand in our side.Product also benifid for all cloth .</p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bars position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link className="text-decoration-none text-warning">
                            <GiSelfLove className="fs-2 text-warning"/>
                        </Link>
                        <Link>
                        <AiOutlineShoppingCart className="fs-2 text-warning"/>
                        </Link>
                    </div>
                </div>
            </Link>
        </div>

        <div className= {` ${location.pathname === "/store" ? `gir-${grid}` : "col-3"} `}>
            <div className="product-card position-relative">
                <div className="product-image">
                    <img src="images/carmera.jpg" className="img-fluid"/>
                    <img src="images/mobile.jpg" className="img-fluid"/>
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">Kids camera is build 10pack multi cloor for students</h5>
                    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24} value="3" edit={false}
    activeColor="#ffd700"
  />,       
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>At vero at the loream ispum dollar sit amet and
            the concepteture and the other side for the product quality is hight. Its all product is 
            brand in our side.Product also benifid for all cloth .</p>
          <p className="price">$100.00</p>
                </div>
                <div className="action-bars position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link className="text-decoration-none text-warning">
                            <GiSelfLove className="fs-2 text-warning"/>
                        </Link>
                        <Link>
                        <AiOutlineShoppingCart className="fs-2 text-warning"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductCard;