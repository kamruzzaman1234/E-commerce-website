import React from 'react';
import Meta from '../components/Meta';
import BradCrump from '../components/BradCrump';

const ResetPassword = ()=>{
    return(
        <>
           <Meta title={"Reset Password"}/>
           <BradCrump title="Reset Password "/>
           <div className="login-wrapper home-wrapper-2">
                <div className="xxl">
                <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                    <h3 className="text-center mb-3">Reset Password</h3>
                    <form action="" className="d-flex flex-column gap-30 mt-3">
                        
                        <div>
                        <input type="password" name="password"
                        placeholder="Password" 
                        className="form-control"/>
                        </div>
                        <div>
                            <input type="password" name="confpassword"
                             placeholder="Confirm Password"
                            className="form-control"/>
                        </div>
                        <div>
                            
                            <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                                <button className="button border-0">Ok</button>
                                
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
export default ResetPassword;