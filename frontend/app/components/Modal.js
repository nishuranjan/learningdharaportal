import React, { useEffect } from "react"

function Modal() {
  return (
    <div className="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
      <div className="modal-dialog modal-xl login-pop-form" role="document">
        <div className="modal-content overli" id="loginmodal">
          <div className="modal-header">
            <h5 className="modal-title">Login Your Account</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i className="fas fa-times-circle"></i>
              </span>
            </button>
          </div>
          <div className="modal-body">
            <div className="login-form">
              <form>
                <div className="form-group">
                  <label>User Name</label>
                  <div className="input-with-icon">
                    <input type="text" className="form-control" placeholder="User or email" />
                    <i className="ti-user"></i>
                  </div>
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <div className="input-with-icon">
                    <input type="password" className="form-control" placeholder="*******" />
                    <i className="ti-unlock"></i>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-xl-4 col-lg-4 col-4">
                    <input id="admin" className="checkbox-custom" name="admin" type="checkbox" />
                    <label for="admin" className="checkbox-custom-label">
                      Admin
                    </label>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-4">
                    <input id="student" className="checkbox-custom" name="student" type="checkbox" checked />
                    <label for="student" className="checkbox-custom-label">
                      Student
                    </label>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-4">
                    <input id="instructor" className="checkbox-custom" name="instructor" type="checkbox" />
                    <label for="instructor" className="checkbox-custom-label">
                      Tutors
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-md full-width theme-bg text-white">
                    Login
                  </button>
                </div>

                <div className="rcs_log_125 pt-2 pb-3">
                  <span>Or Login with Social Info</span>
                </div>
                <div className="rcs_log_126 full">
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
              </form>
            </div>
          </div>
          <div className="crs_log__footer d-flex justify-content-between mt-0">
            <div className="fhg_45">
              <p className="musrt">
                Don't have account?{" "}
                <a href="signup.html" className="theme-cl">
                  SignUp
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
      </div>
    </div>
  )
}

export default Modal
