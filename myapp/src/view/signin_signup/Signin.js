import React,{useRef} from 'react'
import { Outlet, Link } from "react-router-dom";
import PropTypes from 'prop-types'

function Signin(props) {
    const EMAIL = useRef();
    const PASSWORD = useRef();
    function getSignInDetails(e) {
        e.preventDefault();
        const email = EMAIL.current.value; 
        const password = PASSWORD.current.value; 
        console.log(email, password);
        EMAIL.current.value = "";
        PASSWORD.current.value = "";
    }
  return (
    <>
        <header id="header">
        <div className="header-wrapper">
            <div className="container">


                <div className="row">

                    
                    {/* <!-- main section starts from here  --> */}
                    
                    <div className="col-50">
                        <div className="main-text">
                            <h1>Welcome to our community!</h1>
                            <p><q>Connect, Share, Explore, Enjoy!</q></p>
                            <div className="img"><img src="image/download.png" alt=""/></div>
                        </div>
                        
                    </div>
                        {/* <!-- Form section starts from here  --> */}


                    <div className="col-50">
                        <div className="form-box">
                            <h3>Sign In</h3>

                            {/* <!-- Form starts Here  --> */}


                            <form action="" method="get" className="form" onsubmit="cominSoon()">
                                <input type="email" name="email" ref={EMAIL} id="email" placeholder="Email/Number/Username" required />
                                <input type="password" name="password" ref={PASSWORD} className="show-pass" id="password" placeholder="password" required />
                                <span className="sign-pass">
                                    <i className="fa-solid fa-eye passeye" style={{color: '#000000', cursor: 'pointer'}} id="togglePassword"></i>
                                </span>
                                <div className="btn" >
                                    <button type="submit" id="login" onClick={(e)=>{getSignInDetails(e)}}>Log In</button>
                                    <button type="button" id="forgot-pass">Forgot Password?</button>
                                </div>
                            </form>


                            {/* <!-- Form Ends Here  --> */}

                            <div className="wrap-google">
                                <span><img src="image/search.png"/></span>
                                <p>Sign up with Google</p>
                            </div>

                            <div className="line-wrap">
                                <div className="line"></div>
                                &nbsp; or &nbsp;
                                <div className="line"></div>
                            </div>

                            <h4>
                                New here? Register <Link to="/signup">Sign Up</Link>
                            </h4>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <Outlet/>
    </>
  )
}

Signin.propTypes = {}

export default Signin
