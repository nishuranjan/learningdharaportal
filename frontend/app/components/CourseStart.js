import React, { useEffect } from "react"

function CourseStart() {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8">
            <div className="sec-heading center">
              <h2>
                Featured Cources <span className="theme-cl">For You</span>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="crs_grid_list">
              <div className="crs_grid_list_thumb">
                <a href="course-detail.html">
                  <img src="https://via.placeholder.com/1200x800" className="img-fluid rounded" alt="" />
                </a>
              </div>

              <div className="crs_grid_list_caption">
                <div className="crs_lt_101">
                  <span className="est st_1">Development</span>
                  <span className="est st_2">PHP</span>
                </div>
                <div className="crs_lt_102">
                  <h4 className="crs_tit">Advance PHP knowledge with laravel to make smart web</h4>
                  <span className="crs_auth">
                    <i>By</i> Adam Wilson
                  </span>
                </div>
                <div className="crs_lt_103">
                  <div className="crs_info_detail">
                    <ul>
                      <li>
                        <i className="fa fa-video"></i>
                        <span>24 Videos</span>
                      </li>
                      <li>
                        <i className="fa fa-user"></i>
                        <span>10k User</span>
                      </li>
                      <li>
                        <i className="fa fa-eye"></i>
                        <span>92k Views</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="crs_flex">
                  <div className="crs_fl_first">
                    <div className="crs_price">
                      <h2>
                        <span className="currency">$</span>
                        <span className="theme-cl">99</span>
                      </h2>
                    </div>
                  </div>
                  <div className="crs_fl_last">
                    <div className="crs_linkview">
                      <a href="course-detail.html" className="btn btn_view_detail theme-bg text-light">
                        Enroll Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="crs_grid_list">
              <div className="crs_grid_list_thumb">
                <a href="course-detail.html">
                  <img src="https://via.placeholder.com/1200x800" className="img-fluid rounded" alt="" />
                </a>
              </div>

              <div className="crs_grid_list_caption">
                <div className="crs_lt_101">
                  <span className="est st_1">Insurence</span>
                  <span className="est st_2">Banking</span>
                </div>
                <div className="crs_lt_102">
                  <h4 className="crs_tit">The complete accounting & bank financial course 2021</h4>
                  <span className="crs_auth">
                    <i>By</i> Mike Hussey
                  </span>
                </div>
                <div className="crs_lt_103">
                  <div className="crs_info_detail">
                    <ul>
                      <li>
                        <i className="fa fa-video"></i>
                        <span>24 Videos</span>
                      </li>
                      <li>
                        <i className="fa fa-user"></i>
                        <span>10k User</span>
                      </li>
                      <li>
                        <i className="fa fa-eye"></i>
                        <span>92k Views</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="crs_flex">
                  <div className="crs_fl_first">
                    <div className="crs_price">
                      <h2>
                        <span className="currency">$</span>
                        <span className="theme-cl">139</span>
                      </h2>
                    </div>
                  </div>
                  <div className="crs_fl_last">
                    <div className="crs_linkview">
                      <a href="course-detail.html" className="btn btn_view_detail theme-bg text-light">
                        Enroll Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="crs_grid_list">
              <div className="crs_grid_list_thumb">
                <a href="course-detail.html">
                  <img src="https://via.placeholder.com/1200x800" className="img-fluid rounded" alt="" />
                </a>
              </div>

              <div className="crs_grid_list_caption">
                <div className="crs_lt_101">
                  <span className="est st_1">Software</span>
                  <span className="est st_2">Technology</span>
                </div>
                <div className="crs_lt_102">
                  <h4 className="crs_tit">The complete business plan course includes 50 templates</h4>
                  <span className="crs_auth">
                    <i>By</i> Litha Joshi
                  </span>
                </div>
                <div className="crs_lt_103">
                  <div className="crs_info_detail">
                    <ul>
                      <li>
                        <i className="fa fa-video"></i>
                        <span>24 Videos</span>
                      </li>
                      <li>
                        <i className="fa fa-user"></i>
                        <span>10k User</span>
                      </li>
                      <li>
                        <i className="fa fa-eye"></i>
                        <span>92k Views</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="crs_flex">
                  <div className="crs_fl_first">
                    <div className="crs_price">
                      <h2>
                        <span className="currency">$</span>
                        <span className="theme-cl">77.99</span>
                      </h2>
                    </div>
                  </div>
                  <div className="crs_fl_last">
                    <div className="crs_linkview">
                      <a href="course-detail.html" className="btn btn_view_detail theme-bg text-light">
                        Enroll Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="crs_grid_list">
              <div className="crs_grid_list_thumb">
                <a href="course-detail.html">
                  <img src="https://via.placeholder.com/1200x800" className="img-fluid rounded" alt="" />
                </a>
              </div>

              <div className="crs_grid_list_caption">
                <div className="crs_lt_101">
                  <span className="est st_1">Business</span>
                  <span className="est st_2">Finance</span>
                </div>
                <div className="crs_lt_102">
                  <h4 className="crs_tit">Full web designing course with 20 web template designing</h4>
                  <span className="crs_auth">
                    <i>By</i> Adam Wilson
                  </span>
                </div>
                <div className="crs_lt_103">
                  <div className="crs_info_detail">
                    <ul>
                      <li>
                        <i className="fa fa-video"></i>
                        <span>24 Videos</span>
                      </li>
                      <li>
                        <i className="fa fa-user"></i>
                        <span>10k User</span>
                      </li>
                      <li>
                        <i className="fa fa-eye"></i>
                        <span>92k Views</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="crs_flex">
                  <div className="crs_fl_first">
                    <div className="crs_price">
                      <h2>
                        <span className="currency">$</span>
                        <span className="theme-cl">129</span>
                      </h2>
                    </div>
                  </div>
                  <div className="crs_fl_last">
                    <div className="crs_linkview">
                      <a href="course-detail.html" className="btn btn_view_detail theme-bg text-light">
                        Enroll Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8 mt-2">
            <div className="text-center">
              <a href="grid-layout-with-sidebar.html" className="btn btn-md theme-bg-light theme-cl">
                Explore More Cources
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseStart
