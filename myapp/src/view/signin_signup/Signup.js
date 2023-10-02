import React,{useRef} from 'react'
import PropTypes from 'prop-types'

function Signup(props) {
    const fullname= useRef();
    const username= useRef();
    const email= useRef();
    const phone= useRef();
    const password= useRef();

    function print(e) {
        e.preventDefault();
        console.log(fullname.current);
        console.log(username.current);
        console.log(email.current);
        console.log(phone.current);
        console.log(password.current);
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
                                <input type="text" name="fullname" ref={fullname} id="fullname" placeholder="Fullname" required />
                                <input type="text" name="username" ref={username} id="username" placeholder="Username" required />
                                <input type="email" name="email" ref={email} id="email" placeholder="Email" required />
                                <input type="tel" name="phone" ref={phone} id="phone" placeholder="Phone No." required />
                                <input type="password" name="password" ref={password} className="show-pass" id="password" placeholder="password" required />
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
