import React from 'react';
import Meta from '../components/Meta';
import BradCrump from '../components/BradCrump';
import {Link} from 'react-router-dom';

const LogIn = ()=>{
    return(
        <div>
            <Meta title={"login"}/>
            <BradCrump title="login"/>
            <div className="login-wrapper home-wrapper-2">
                <div className="xxl">
                <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                    <h3 className="text-center mb-3">Log In</h3>
                    <form action="" className="d-flex flex-column gap-30 mt-3">
                        <div>
                            <input type="email" name="email" placeholder="Email "
                             className="form-control"/>
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password"
                            className="form-control"/>
                        </div>
                        <div>
                            <Link to="/forgot-password">Forgot Password </Link>
                            <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                                <button className="button border-0">Log In</button>
                                <Link to="/signup" className="button singup">Sign Up</Link>
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
export default LogIn;