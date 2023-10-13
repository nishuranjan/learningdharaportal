import React, { useEffect } from "react"

function HeroBanner() {
  return (
    <div className="hero_banner image-cover image_bottom h7_bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="simple-search-wrap text-left">
              <div className="hero_search-2">
                <div className="elsio_tag yellow">LISTEN TO OUR NEW ANTHEM</div>
                <h1 className="banner_title mb-4">
                  The Best
                  <br />
                  e-Learning Cources For
                  <br />
                  <span className="light">Better Future</span>
                </h1>
                <p className="font-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <div className="input-group simple_search">
                  <i className="fa fa-search ico"></i>
                  <input type="text" className="form-control" placeholder="Search Your Cources" />
                  <div className="input-group-append">
                    <button className="btn theme-bg" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="side_block extream_img">
              <div className="list_crs_img">
                <img src="assets/img/ic-1.png" className="img-fluid cirl animate-fl-y" alt="" />
                <img src="assets/img/ic-2.png" className="img-fluid arrow animate-fl-x" alt="" />
                <img src="assets/img/ic-3.png" className="img-fluid moon animate-fl-x" alt="" />
              </div>
              <img src="assets/img/side-2.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
