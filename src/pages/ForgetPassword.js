import React from 'react';
import Meta from '../components/Meta';
import BradCrump from '../components/BradCrump';
import {Link} from 'react-router-dom';

const ForgetPassword = ()=>{
    return(
        <div>
           <Meta title={"Forgot Password"}/>
           <BradCrump title="Forgot Password"/>
           <div className="login-wrapper home-wrapper-2">
                <div className="xxl">
                <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                    <h3 className="text-center mb-3">Reset Your Password</h3>
                    <p className="text-center my-2 mb-3">You will send you an email to reset your password</p>
                    <form action="" className="d-flex flex-column gap-30 mt-3">
                        <div>
                            <input type="email" name="email" placeholder="Email "
                             className="form-control"/>
                        </div>
                    
                        <div>
                            
                            <div className="d-flex mt-3 flex-column justify-content-center gap-15 align-items-center">
                                <button className="button border-0">Submit</button>
                                <Link to="/login" className="border-0">Cancle</Link>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default ForgetPassword;