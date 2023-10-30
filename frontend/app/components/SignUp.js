import React, { useEffect } from "react"

function SignUp() {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-12 col-sm-12">
            <form>
              <div className="crs_log_wrap">
                <div className="crs_log__thumb">
                  <img src="https://via.placeholder.com/1920x1200" className="img-fluid" alt="" />
                </div>
                <div className="crs_log__caption">
                  <div className="rcs_log_123">
                    <div className="rcs_ico">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>

                  <div className="rcs_log_124">
                    <div className="Lpo09">
                      <h4>Login Your Account</h4>
                    </div>
                    <div className="form-group row mb-0">
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="text" className="form-control" placeholder="support@themezhub.com" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="text" className="form-control" placeholder="*******" />
                    </div>
                    <div className="form-group">
                      <button type="button" className="btn full-width btn-md theme-bg text-white">
                        Sign Up
                      </button>
                    </div>
                  </div>
                  <div className="rcs_log_125">
                    <span>Or SignUp with Social Info</span>
                  </div>
                  <div className="rcs_log_126">
                    <ul className="social_log_45 row">
                      <li className="col-xl-4 col-lg-4 col-md-4 col-4">
                        <a href="javascript:void(0);" className="sl_btn">
                          <i className="ti-facebook text-info"></i>Facebook
                        </a>
                      </li>
                      <li className="col-xl-4 col-lg-4 col-md-4 col-4">
                        <a href="javascript:void(0);" className="sl_btn">
                          <i className="ti-google text-danger"></i>Google
                        </a>
                      </li>
                      <li className="col-xl-4 col-lg-4 col-md-4 col-4">
                        <a href="javascript:void(0);" className="sl_btn">
                          <i className="ti-twitter theme-cl"></i>Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="crs_log__footer d-flex justify-content-between">
                  <div className="fhg_45">
                    <p className="musrt">
                      Already have account?{" "}
                      <a href="login.html" className="theme-cl">
                        Login
                      </a>
                    </p>
                  </div>
                  <div className="fhg_45">
                    <p className="musrt">
                      <a href="forgot.html" className="text-danger">
                        Forgot Password?
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
