import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {BsSearch, BsArrowRepeat, BsPeopleFill} from 'react-icons/bs';
import {GiSelfLove} from 'react-icons/gi';
import {AiOutlineShoppingCart, AiOutlineDotChart} from 'react-icons/ai';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = ()=>{
    return(
        <>
        <header className="header-top-strip py-3">
            <div className="container-xxl">
                <div className="row">
                  <div className="col-md-6">
                    <p className="text-white mb-0">Free shipping order $100 & free Returns</p>
                  </div>
                  <div className="col-md-6">
                    <p className="text-end text-white mb-0">Hotline: 
                    <a href="tel:+9182643335"
                    className="text-white text-decoration-none">+880 196078207</a></p>
                  </div>
                </div>
            </div>
        </header>
        <header className="header-upper py-3">
            <div className="container-xxl">
            <div className="row align-items-center">
                <div className="col-md-2">
                    <h2>
                        <Link className="text-white text-decoration-none">Dev Corner</Link>
                    </h2>
                </div>
                <div className="col-md-5">
                <InputGroup className="mb-3">
        <Form.Control className="form-control"
          placeholder="Search Product Here.."
          aria-label="Search Product Here.."
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2" className="search">
            <BsSearch className="fs-6"/>
        </InputGroup.Text>
      </InputGroup>
                </div>
                <div className="col-md-5">
                    <div className="header-upper links d-flex 
                    align-items-center justify-content-between">
                        <div className="">
                            <Link className="d-flex align-items-center text-decoration-none"
                            to="/compare-product">
                             <BsArrowRepeat className="fs-2 text-white"/>
                              <p className="mx-2 text-white mb-0">Compare <br/> Product</p>
                              
                                
                            </Link>
                        </div>
                        <div>
                        <Link to="/wishlist" className="d-flex align-items-center text-decoration-none">
                             <GiSelfLove className="fs-2 text-white"/>
                              <p className="mx-2 text-white mb-0">Favourite <br/> wishlist</p>
                              
                                
                            </Link>
                        </div>
                        <div>
                        <Link to="/login" className="d-flex align-items-center text-decoration-none">
                             <BsPeopleFill className="fs-2 text-white"/>
                              <p className="mx-2 text-white mb-0">Log in <br/> My Account</p>
                              
                                
                            </Link>
                        </div>
                        <div>
                        <Link to="/cart" className="d-flex align-items-center text-decoration-none gap-10">
                             <AiOutlineShoppingCart className="fs-2 text-white "/>
                              <div className="d-flex flex-column">
                                <span className="badge bg-white text-dark">0</span>
                                <p className="text-white mb-0">$ 0.00</p>
                              </div>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </header>
        <header className="header-bottom py-3">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="menu-bottom  d-flex align-items-center gap-30">
               <div>
                
               <Dropdown>
               <AiOutlineDotChart className="fs-3 text-white mx-2"/>
      <Dropdown.Toggle variant="success"
       className="bg-transparent border-0" id="dropdown-basic">
        Shop Categories
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu text-white">
        <Dropdown.Item className="dropdown-item"  href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item className="dropdown-item"  href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item className="dropdown-item"  href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                      <NavLink className="text-decoration-none text-white"
                      to="/">Home </NavLink>
                      <NavLink className="text-decoration-none text-white"
                      to="/product">Our Store</NavLink>
                      <NavLink className="text-decoration-none text-white"
                      to="/blog">Our Blog</NavLink>
                      <NavLink className="text-decoration-none text-white "
                      to="/contact">Contact </NavLink>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        </>
    )
}
export default Header;