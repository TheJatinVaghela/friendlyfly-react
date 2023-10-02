import React,{useRef} from 'react'
import PropTypes from 'prop-types'

function Signup(props) {
    const FULLNAME= useRef();
    const USERNAME= useRef();
    const EMAIL= useRef();
    const PHONE= useRef();
    const PASSWORD= useRef();

    function print(e) {
        e.preventDefault();
        const fullname = FULLNAME.current.value;
        const username = USERNAME.current.value;
        const email = EMAIL.current.value;
        const phone = PHONE.current.value;
        const password = PASSWORD.current.value;
        
        
        // FULLNAME.current.value = "";
        // USERNAME.current.value = "";
        // EMAIL.current.value = "";
        // PHONE.current.value = "";
        // PASSWORD.current.value = "";

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
                            <p><q>"Connect, Share, Explore, Enjoy!"</q></p>
                            <div className="img"><img src="image/download.png" alt="Logo" /></div>
                        </div>
                        
                    </div>
                        {/* <!-- Form section starts from here  --> */}


                    <div className="col-50">
                        <div className="form-box">
                            <h3>Sign Up</h3>

                            {/* <!-- Form starts Here  --> */}


                            <form action="" method="get" className="form">
                                <input type="text" name="fullname" ref={FULLNAME} id="fullname" placeholder="Fullname" required />
                                <input type="text" name="username" ref={USERNAME} id="username" placeholder="Username" required />
                                <input type="email" name="email" ref={EMAIL} id="email" placeholder="Email" required />
                                <input type="tel" name="phone" ref={PHONE} id="phone" placeholder="Phone No." required />
                                <input type="password" name="password" ref={PASSWORD} className="show-pass" id="password" placeholder="password" required />
                                <span className="sign-pass">
                                    <i className="fa-solid fa-eye passeye" style={{color: '#000000', cursor: 'pointer'}} id="togglePassword" ></i>
                                </span>
                               
                                <div className="btn">
                                    <button type="submit" id="ragister-now" onClick={(e)=>print(e)}>Register Now</button>
                                    <button type="button" id="forgot-pass">Forgot Password</button>
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
                                Alredy have an account Login <a href="signIn.html"> Sign In</a>
                            </h4>

                        </div>


                    </div>



                </div>
            </div>
        </div>
    </header>
    </>
  )
}

Signup.propTypes = {}

export default Signup
