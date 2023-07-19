import React from 'react';
import Meta from '../components/Meta';
import BradCrump from '../components/BradCrump';
import { Link } from 'react-router-dom';

const SignUp = ()=>{
    return(
        <>
         <Meta title={"Sign Up"}/>
           <BradCrump title="Sign Up"/>
           <div className="login-wrapper home-wrapper-2">
              <div className="xxl">
              <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                    <h3 className="text-center mb-3">Sign Up</h3>
                    <form action="" className="d-flex flex-column gap-30 mt-3">
                        <div>
                            <input type="text" name="Name"
                            placeholder="Name"
                            className="form-control"/>
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Email "
                             className="form-control"/>
                        </div>
                        <div>
                        <input type="tel" name="mobile"
                        placeholder="Mobile" 
                        className="form-control"/>
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password"
                            className="form-control"/>
                        </div>
                        <div>
                            
                            <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                                <button className="button border-0">Sign Up</button>
                                
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
              </div>
            </div>
        </>
    )
}
export default SignUp;