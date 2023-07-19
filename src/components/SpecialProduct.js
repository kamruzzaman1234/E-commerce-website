import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProduct = ()=>{
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return(
        <div className="col-4">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div className="special-product-card-image">
                        <img src="images/mobile.jpg" className="img-fluid"/>
                    </div>
                    <div className="special-product-content">
                            <h5 className="brand">Havels</h5>
                            <h6 className="title">
                                Redmi Note 11 Mobile phone 
                            </h6>
                            <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24} value="3" edit={false}
    activeColor="#ffd700"
  />,
    <p className="price"><span className="red-p">$100</span>
     $nbsp: <strike>400</strike>
     </p>
     <div className="discount-till d-flex align-items-center  gap-10">
        <p className="mb-0">
            <b>5 </b>days
        </p>
        <div className="d-flex gap-10 align-items-center">
            <span className="badge rounded-circle p-2 ">1</span>:
            <span className="badge rounded-circle p-2 bg-warning">1</span>:
            <span className="badge rounded-circle p-2 bg-warning">1</span>
        </div>
    </div>
    <div className="prod-count mt-2">
            <p>Product: 5</p>
            <div className="progress">
  <div className="progress-bar" role="progressbar" 
  style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
        <Link className="button text-decoration-none mt-3">Add to Card</Link>
                  </div>
                </  div>
            </div>
        </div>
    )
}
export default SpecialProduct;