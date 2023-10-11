import React, { useEffect } from "react"
import Logo from "../assets/img/logo.png"
function Header() {
  return (
    <div className="header header-transparent dark-text">
      <div className="container">
        <nav id="navigation" className="navigation navigation-landscape">
          <div className="nav-header">
            <a className="nav-brand" href="#">
              <img src={Logo} className="logo" alt="" />
            </a>
            <div className="nav-toggle"></div>
            <div className="mobile_nav">
              <ul>
                <li>
                  <a href="#" data-toggle="modal" data-target="#login" className="crs_yuo12 w-auto text-white theme-bg">
                    <span className="embos_45">
                      <i className="fas fa-sign-in-alt mr-1"></i>Sign In
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-menus-wrapper">
            <ul className="nav-menu">
              <li className="active">
                <a href="/home">
                  Home<span className="submenu-indicator"></span>
                </a>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="index.html">Home 1</a>
                  </li>
                  <li>
                    <a href="home-2.html">Home 2</a>
                  </li>
                  <li>
                    <a href="home-3.html">Home 3</a>
                  </li>
                  <li>
                    <a href="home-4.html">Home 4</a>
                  </li>
                  <li>
                    <a href="home-5.html">Home 5</a>
                  </li>
                  <li>
                    <a href="home-6.html">Home 6</a>
                  </li>
                  <li>
                    <a href="home-7.html">Home 7</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  Courses<span className="submenu-indicator"></span>
                </a>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="#">
                      Search Courses in Grid<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li>
                        <a href="grid-layout-with-sidebar.html">Grid Layout Style 1</a>
                      </li>
                      <li>
                        <a href="grid-layout-with-sidebar-2.html">Grid Layout Style 2</a>
                      </li>
                      <li>
                        <a href="grid-layout-with-sidebar-3.html">Grid Layout Style 3</a>
                      </li>
                      <li>
                        <a href="grid-layout-with-sidebar-4.html">Grid Layout Style 4</a>
                      </li>
                      <li>
                        <a href="grid-layout-with-sidebar-5.html">Grid Layout Style 5</a>
                      </li>
                      <li>
                        <a href="grid-layout-full.html">Grid Full Width</a>
                      </li>
                      <li>
                        <a href="grid-layout-full-2.html">Grid Full Width 2</a>
                      </li>
                      <li>
                        <a href="grid-layout-full-3.html">Grid Full Width 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Search Courses in List<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li>
                        <a href="list-layout-with-sidebar.html">List Layout Style 1</a>
                      </li>
                      <li>
                        <a href="list-layout-with-full.html">List Full Width</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Courses Detail<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li>
                        <a href="course-detail.html">Course Detail 01</a>
                      </li>
                      <li>
                        <a href="course-detail-2.html">Course Detail 02</a>
                      </li>
                      <li>
                        <a href="course-detail-3.html">Course Detail 03</a>
                      </li>
                      <li>
                        <a href="course-detail-4.html">Course Detail 04</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="explore-category.html">Explore Category</a>
                  </li>
                  <li>
                    <a href="find-instructor.html">Find Instructor</a>
                  </li>
                  <li>
                    <a href="instructor-detail.html">Instructor Detail</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  Pages<span className="submenu-indicator"></span>
                </a>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="#">
                      Shop Pages<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li>
                        <a href="shop-with-sidebar.html">Shop Sidebar Left</a>
                      </li>
                      <li>
                        <a href="shop-with-right-sidebar.html">Shop Sidebar Right</a>
                      </li>
                      <li>
                        <a href="list-shop-with-sidebar.html">Shop List Style</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="product-detail.html">Product Detail</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact.html">Say Hello</a>
                  </li>
                  <li>
                    <a href="blogs.html">Blog Style</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="404.html">404 Page</a>
                  </li>
                  <li>
                    <a href="component.html">Elements</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="signup.html">Signup</a>
                  </li>
                  <li>
                    <a href="forgot.html">Forgot</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="dashboard.html">Dashboard</a>
              </li>
            </ul>

            <ul className="nav-menu nav-menu-social align-to-right">
              <li>
                <a href="#" className="alio_green" data-toggle="modal" data-target="#login">
                  {" "}
                  <i className="fas fa-sign-in-alt mr-1"></i>
                  <span className="dn-lg">Sign In</span>{" "}
                </a>
              </li>
              <li className="add-listing theme-bg">
                <a href="signup.html" className="text-white">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
