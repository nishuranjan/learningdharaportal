import React, { useEffect } from "react"

function InstructorStart() {
  return (
    <section className="min gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8">
            <div className="sec-heading center">
              <h2>
                Best Cources by Top <span className="theme-cl">Instructor</span>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="crs_trt_grid">
              <div className="crs_trt_thumb circle">
                <a href="instructor-detail.html" className="crs_trt_thum_link">
                  <img src="https://via.placeholder.com/700x550" className="img-fluid circle" alt="" />
                </a>
              </div>
              <div className="crs_trt_caption">
                <div className="instructor_tag dark">
                  <span>Physics Teacher</span>
                </div>
                <div className="instructor_title">
                  <h4>
                    <a href="instructor-detail.html">Alisha P. Paradis</a>
                  </h4>
                </div>
                <div className="trt_rate_inf">
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star-half filled"></i>
                  <span className="alt_rates">(244 Reviews)</span>
                </div>
              </div>
              <div className="crs_trt_footer">
                <div className="crs_trt_ent">
                  <i className="fa fa-user"></i> 2.5k Users Enrolled
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="crs_trt_grid">
              <div className="crs_trt_thumb circle">
                <a href="instructor-detail.html" className="crs_trt_thum_link">
                  <img src="https://via.placeholder.com/700x550" className="img-fluid circle" alt="" />
                </a>
              </div>
              <div className="crs_trt_caption">
                <div className="instructor_tag dark">
                  <span>History Teacher</span>
                </div>
                <div className="instructor_title">
                  <h4>
                    <a href="instructor-detail.html">Melissa A. Maynard</a>
                  </h4>
                </div>
                <div className="trt_rate_inf">
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star-half filled"></i>
                  <span className="alt_rates">(119 Reviews)</span>
                </div>
              </div>
              <div className="crs_trt_footer">
                <div className="crs_trt_ent">
                  <i className="fa fa-user"></i> 3.2k Users Enrolled
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="crs_trt_grid">
              <div className="crs_trt_thumb circle">
                <a href="instructor-detail.html" className="crs_trt_thum_link">
                  <img src="https://via.placeholder.com/700x550" className="img-fluid circle" alt="" />
                </a>
              </div>
              <div className="crs_trt_caption">
                <div className="instructor_tag dark">
                  <span>Hindi Teacher</span>
                </div>
                <div className="instructor_title">
                  <h4>
                    <a href="instructor-detail.html">Isaias C. Poovey</a>
                  </h4>
                </div>
                <div className="trt_rate_inf">
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star-half filled"></i>
                  <span className="alt_rates">(96 Reviews)</span>
                </div>
              </div>
              <div className="crs_trt_footer">
                <div className="crs_trt_ent">
                  <i className="fa fa-user"></i> 2.2k Users Enrolled
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="crs_trt_grid">
              <div className="crs_trt_thumb circle">
                <a href="instructor-detail.html" className="crs_trt_thum_link">
                  <img src="https://via.placeholder.com/700x550" className="img-fluid circle" alt="" />
                </a>
              </div>
              <div className="crs_trt_caption">
                <div className="instructor_tag dark">
                  <span>Math Teacher</span>
                </div>
                <div className="instructor_title">
                  <h4>
                    <a href="instructor-detail.html">Vivian E. Winders</a>
                  </h4>
                </div>
                <div className="trt_rate_inf">
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star-half filled"></i>
                  <span className="alt_rates">(149 Reviews)</span>
                </div>
              </div>
              <div className="crs_trt_footer">
                <div className="crs_trt_ent">
                  <i className="fa fa-user"></i> 3.1k Users Enrolled
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="crs_trt_grid">
              <div className="crs_trt_thumb circle">
                <a href="instructor-detail.html" className="crs_trt_thum_link">
                  <img src="https://via.placeholder.com/700x550" className="img-fluid circle" alt="" />
                </a>
              </div>
              <div className="crs_trt_caption">
                <div className="instructor_tag dark">
                  <span>Bio Teacher</span>
                </div>
                <div className="instructor_title">
                  <h4>
                    <a href="instructor-detail.html">Jeffery C. Watson</a>
                  </h4>
                </div>
                <div className="trt_rate_inf">
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star-half filled"></i>
                  <span className="alt_rates">(204 Reviews)</span>
                </div>
              </div>
              <div className="crs_trt_footer">
                <div className="crs_trt_ent">
                  <i className="fa fa-user"></i> 2.3k Users Enrolled
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="crs_trt_grid">
              <div className="crs_trt_thumb circle">
                <a href="instructor-detail.html" className="crs_trt_thum_link">
                  <img src="https://via.placeholder.com/700x550" className="img-fluid circle" alt="" />
                </a>
              </div>
              <div className="crs_trt_caption">
                <div className="instructor_tag dark">
                  <span>Chemistry Teacher</span>
                </div>
                <div className="instructor_title">
                  <h4>
                    <a href="instructor-detail.html">Sean K. Leon</a>
                  </h4>
                </div>
                <div className="trt_rate_inf">
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star-half filled"></i>
                  <span className="alt_rates">(74 Reviews)</span>
                </div>
              </div>
              <div className="crs_trt_footer">
                <div className="crs_trt_ent">
                  <i className="fa fa-user"></i> 1.5k Users Enrolled
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="crs_trt_grid">
              <div className="crs_trt_thumb circle">
                <a href="instructor-detail.html" className="crs_trt_thum_link">
                  <img src="https://via.placeholder.com/700x550" className="img-fluid circle" alt="" />
                </a>
              </div>
              <div className="crs_trt_caption">
                <div className="instructor_tag dark">
                  <span>Sociology Teacher</span>
                </div>
                <div className="instructor_title">
                  <h4>
                    <a href="instructor-detail.html">Gertrude D. Shorter</a>
                  </h4>
                </div>
                <div className="trt_rate_inf">
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star-half filled"></i>
                  <span className="alt_rates">(96 Reviews)</span>
                </div>
              </div>
              <div className="crs_trt_footer">
                <div className="crs_trt_ent">
                  <i className="fa fa-user"></i> 1.2k Users Enrolled
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="crs_trt_grid">
              <div className="crs_trt_thumb circle">
                <a href="instructor-detail.html" className="crs_trt_thum_link">
                  <img src="https://via.placeholder.com/700x550" className="img-fluid circle" alt="" />
                </a>
              </div>
              <div className="crs_trt_caption">
                <div className="instructor_tag dark">
                  <span>Regining Teacher</span>
                </div>
                <div className="instructor_title">
                  <h4>
                    <a href="instructor-detail.html">David L. Garza</a>
                  </h4>
                </div>
                <div className="trt_rate_inf">
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star filled"></i>
                  <i className="fa fa-star-half filled"></i>
                  <span className="alt_rates">(73 Reviews)</span>
                </div>
              </div>
              <div className="crs_trt_footer">
                <div className="crs_trt_ent">
                  <i className="fa fa-user"></i> 2.1k Users Enrolled
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstructorStart
