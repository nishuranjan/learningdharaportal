import React, { useEffect } from "react"

function LatestNews() {
  return (
    <section className="min">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8">
            <div className="sec-heading center">
              <h2>
                Latest News & <span className="theme-cl">Articles</span>
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="blg_grid_box">
              <div className="blg_grid_thumb">
                <a href="blog-detail.html">
                  <img src="https://via.placeholder.com/1200x800" className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blg_grid_caption">
                <div className="blg_tag">
                  <span>Marketing</span>
                </div>
                <div className="blg_title">
                  <h4>
                    <a href="blog-detail.html">How To Register & Enrolled on SkillUp Step by Step?</a>
                  </h4>
                </div>
                <div className="blg_desc">
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                </div>
              </div>
              <div className="crs_grid_foot">
                <div className="crs_flex">
                  <div className="crs_fl_first">
                    <div className="crs_tutor">
                      <div className="crs_tutor_thumb">
                        <a href="instructor-detail.html">
                          <img src="https://via.placeholder.com/500x500" className="img-fluid circle" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="crs_fl_last">
                    <div className="foot_list_info">
                      <ul>
                        <li>
                          <div className="elsio_ic">
                            <i className="fa fa-eye text-success"></i>
                          </div>
                          <div className="elsio_tx">10k Views</div>
                        </li>
                        <li>
                          <div className="elsio_ic">
                            <i className="fa fa-clock text-warning"></i>
                          </div>
                          <div className="elsio_tx">10 July 2021</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="blg_grid_box">
              <div className="blg_grid_thumb">
                <a href="blog-detail.html">
                  <img src="https://via.placeholder.com/1200x800" className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blg_grid_caption">
                <div className="blg_tag">
                  <span>Business</span>
                </div>
                <div className="blg_title">
                  <h4>
                    <a href="blog-detail.html">Let's Know How Skillup Work Fast and Secure?</a>
                  </h4>
                </div>
                <div className="blg_desc">
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                </div>
              </div>
              <div className="crs_grid_foot">
                <div className="crs_flex">
                  <div className="crs_fl_first">
                    <div className="crs_tutor">
                      <div className="crs_tutor_thumb">
                        <a href="instructor-detail.html">
                          <img src="https://via.placeholder.com/500x500" className="img-fluid circle" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="crs_fl_last">
                    <div className="foot_list_info">
                      <ul>
                        <li>
                          <div className="elsio_ic">
                            <i className="fa fa-eye text-success"></i>
                          </div>
                          <div className="elsio_tx">10k Views</div>
                        </li>
                        <li>
                          <div className="elsio_ic">
                            <i className="fa fa-clock text-warning"></i>
                          </div>
                          <div className="elsio_tx">10 July 2021</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="blg_grid_box">
              <div className="blg_grid_thumb">
                <a href="blog-detail.html">
                  <img src="https://via.placeholder.com/1200x800" className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blg_grid_caption">
                <div className="blg_tag">
                  <span>Accounting</span>
                </div>
                <div className="blg_title">
                  <h4>
                    <a href="blog-detail.html">How To Improove Digital Marketing for Fast SEO</a>
                  </h4>
                </div>
                <div className="blg_desc">
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                </div>
              </div>
              <div className="crs_grid_foot">
                <div className="crs_flex">
                  <div className="crs_fl_first">
                    <div className="crs_tutor">
                      <div className="crs_tutor_thumb">
                        <a href="instructor-detail.html">
                          <img src="https://via.placeholder.com/500x500" className="img-fluid circle" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="crs_fl_last">
                    <div className="foot_list_info">
                      <ul>
                        <li>
                          <div className="elsio_ic">
                            <i className="fa fa-eye text-success"></i>
                          </div>
                          <div className="elsio_tx">10k Views</div>
                        </li>
                        <li>
                          <div className="elsio_ic">
                            <i className="fa fa-clock text-warning"></i>
                          </div>
                          <div className="elsio_tx">10 July 2021</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestNews
