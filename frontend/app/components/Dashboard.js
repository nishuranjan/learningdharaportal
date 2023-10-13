import React, { useEffect } from "react"

function Dashboard() {
  const dashboardStyle = { height: "300px" }
  return (
    <section className="gray pt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="dashboard-navbar">
              <div className="d-user-avater">
                <img src="https://via.placeholder.com/500x500" className="img-fluid avater" alt="" />
                <h4>Adam Harshvardhan</h4>
                <span>Senior Designer</span>
                <div className="elso_syu89">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="elso_syu77">
                  <div className="one_third">
                    <div className="one_45ic text-warning bg-light-warning">
                      <i className="fas fa-star"></i>
                    </div>
                    <span>Ratings</span>
                  </div>
                  <div className="one_third">
                    <div className="one_45ic text-success bg-light-success">
                      <i className="fas fa-file-invoice"></i>
                    </div>
                    <span>Courses</span>
                  </div>
                  <div className="one_third">
                    <div className="one_45ic text-purple bg-light-purple">
                      <i className="fas fa-user"></i>
                    </div>
                    <span>Enrolled User</span>
                  </div>
                </div>
              </div>

              <div className="d-navigation">
                <ul id="side-menu">
                  <li className="active">
                    <a href="dashboard.html">
                      <i className="fas fa-th"></i>Dashboard
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0);">
                      <i className="fas fa-shopping-basket"></i>Courses<span className="ti-angle-left"></span>
                    </a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="manage-course.html">Manage Courses</a>
                      </li>
                      <li>
                        <a href="add-new-course.html">Add New Course</a>
                      </li>
                      <li>
                        <a href="course-category.html">Course Category</a>
                      </li>
                      <li>
                        <a href="coupons.html">Coupons</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0);">
                      <i className="fas fa-gem"></i>Enrollment<span className="ti-angle-left"></span>
                    </a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="enroll-history.html">Enroll History</a>
                      </li>
                      <li>
                        <a href="enroll-student.html">Enroll a Student</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0);">
                      <i className="fas fa-archive"></i>Report<span className="ti-angle-left"></span>
                    </a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="admin-revenue.html">Admin Revenue</a>
                      </li>
                      <li>
                        <a href="instructor-revenue.html">Instructor Revenue</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0);">
                      <i className="fas fa-user-shield"></i>Admins<span className="ti-angle-left"></span>
                    </a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="manage-admins.html">Manage Admins</a>
                      </li>
                      <li>
                        <a href="add-admin.html">Add New Admins</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0);">
                      <i className="fas fa-toolbox"></i>Instructors<span className="ti-angle-left"></span>
                    </a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="manage-instructor.html">Manage Instructors</a>
                      </li>
                      <li>
                        <a href="add-instructor.html">Add New Instructors</a>
                      </li>
                      <li>
                        <a href="instructor-payout.html">Instructors Payouts</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0);">
                      <i className="fas fa-user"></i>Students<span className="ti-angle-left"></span>
                    </a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="manage-students.html">Manage Students</a>
                      </li>
                      <li>
                        <a href="add-students.html">Add New Student</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="addon-manager.html">
                      <i className="fas fa-layer-group"></i>Addon
                    </a>
                  </li>
                  <li>
                    <a href="themes.html">
                      <i className="fas fa-paint-brush"></i>Themes
                    </a>
                  </li>
                  <li>
                    <a href="messages.html">
                      <i className="fas fa-comments"></i>Message
                    </a>
                  </li>
                  <li>
                    <a href="my-profile.html">
                      <i className="fas fa-address-card"></i>My Profile
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0);">
                      <i className="fas fa-cog"></i>Settings<span className="ti-angle-left"></span>
                    </a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="website-settings.html">Website Settings</a>
                      </li>
                      <li>
                        <a href="system-settings.html">System Settings</a>
                      </li>
                      <li>
                        <a href="payment_settings.html">Payment Settings</a>
                      </li>
                      <li>
                        <a href="social-login.html">Social Logins</a>
                      </li>
                      <li>
                        <a href="smtp-setting.html">SMTP Settings</a>
                      </li>
                      <li>
                        <a href="dash-about.html">About App</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 pb-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="mb-0">Admin Revenue This Year</h4>
                  </div>
                  <div className="card-body">
                    <div className="chart" id="extra-area-chart" style={dashboardStyle}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="dashboard_stats_wrap">
                  <div className="rounded-circle p-4 p-sm-4 d-inline-flex align-items-center justify-content-center theme-bg mb-2">
                    <div className="position-absolute text-white h5 mb-0">
                      <i className="fas fa-book"></i>
                    </div>
                  </div>
                  <div className="dashboard_stats_wrap_content">
                    <h4>607</h4> <span>Number of Cources</span>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="dashboard_stats_wrap">
                  <div className="rounded-circle p-4 p-sm-4 d-inline-flex align-items-center justify-content-center bg-primary mb-2">
                    <div className="position-absolute text-white h5 mb-0">
                      <i className="fas fa-video"></i>
                    </div>
                  </div>
                  <div className="dashboard_stats_wrap_content">
                    <h4>5.2k</h4> <span>Number of Lession</span>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="dashboard_stats_wrap">
                  <div className="rounded-circle p-4 p-sm-4 d-inline-flex align-items-center justify-content-center bg-warning mb-2">
                    <div className="position-absolute text-white h5 mb-0">
                      <i className="fas fa-users"></i>
                    </div>
                  </div>
                  <div className="dashboard_stats_wrap_content">
                    <h4>78k</h4> <span>Number of Students</span>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="dashboard_stats_wrap">
                  <div className="rounded-circle p-4 p-sm-4 d-inline-flex align-items-center justify-content-center bg-purple mb-2">
                    <div className="position-absolute text-white h5 mb-0">
                      <i className="fas fa-gem"></i>
                    </div>
                  </div>
                  <div className="dashboard_stats_wrap_content">
                    <h4>32k</h4> <span>Number of Enrollment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h5>Featured Cources</h5>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="grousp_crs">
                      <div className="grousp_crs_left">
                        <div className="grousp_crs_thumb">
                          <img src="https://via.placeholder.com/300x300" className="img-fluid" alt="" />
                        </div>
                        <div className="grousp_crs_caption">
                          <h4>Adobe Photoshop cc 2021 - Free Assential Training</h4>
                        </div>
                      </div>
                      <div className="grousp_crs_right">
                        <div className="frt_125">
                          <i className="fas fa-fire text-warning mr-1"></i>8.7
                        </div>
                        <div className="frt_but">
                          <a href="#" className="btn text-white theme-bg">
                            View Course
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="grousp_crs">
                      <div className="grousp_crs_left">
                        <div className="grousp_crs_thumb">
                          <img src="https://via.placeholder.com/300x300" className="img-fluid" alt="" />
                        </div>
                        <div className="grousp_crs_caption">
                          <h4>Adobe Photoshop cc 2021 - Free Assential Training</h4>
                        </div>
                      </div>
                      <div className="grousp_crs_right">
                        <div className="frt_125">
                          <i className="fas fa-fire text-warning mr-1"></i>8.7
                        </div>
                        <div className="frt_but">
                          <a href="#" className="btn text-white theme-bg">
                            View Course
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="grousp_crs">
                      <div className="grousp_crs_left">
                        <div className="grousp_crs_thumb">
                          <img src="https://via.placeholder.com/300x300" className="img-fluid" alt="" />
                        </div>
                        <div className="grousp_crs_caption">
                          <h4>Adobe Photoshop cc 2021 - Free Assential Training</h4>
                        </div>
                      </div>
                      <div className="grousp_crs_right">
                        <div className="frt_125">
                          <i className="fas fa-fire text-warning mr-1"></i>8.7
                        </div>
                        <div className="frt_but">
                          <a href="#" className="btn text-white theme-bg">
                            View Course
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="grousp_crs">
                      <div className="grousp_crs_left">
                        <div className="grousp_crs_thumb">
                          <img src="https://via.placeholder.com/300x300" className="img-fluid" alt="" />
                        </div>
                        <div className="grousp_crs_caption">
                          <h4>Adobe Photoshop cc 2021 - Free Assential Training</h4>
                        </div>
                      </div>
                      <div className="grousp_crs_right">
                        <div className="frt_125">
                          <i className="fas fa-fire text-warning mr-1"></i>8.7
                        </div>
                        <div className="frt_but">
                          <a href="#" className="btn text-white theme-bg">
                            View Course
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="grousp_crs">
                      <div className="grousp_crs_left">
                        <div className="grousp_crs_thumb">
                          <img src="https://via.placeholder.com/300x300" className="img-fluid" alt="" />
                        </div>
                        <div className="grousp_crs_caption">
                          <h4>Adobe Photoshop cc 2021 - Free Assential Training</h4>
                        </div>
                      </div>
                      <div className="grousp_crs_right">
                        <div className="frt_125">
                          <i className="fas fa-fire text-warning mr-1"></i>8.7
                        </div>
                        <div className="frt_but">
                          <a href="#" className="btn text-white theme-bg">
                            View Course
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h6>Notifications</h6>
                  </div>
                  <div className="ground-list ground-hover-list">
                    <div className="ground ground-list-single">
                      <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-light-success">
                        <div className="position-absolute text-success h5 mb-0">
                          <i className="fas fa-user"></i>
                        </div>
                      </div>

                      <div className="ground-content">
                        <h6>
                          <a href="#">Maryam Amiri</a>
                        </h6>
                        <small className="text-fade">New User Enrolled in Python</small>
                        <span className="small">Just Now</span>
                      </div>
                    </div>

                    <div className="ground ground-list-single">
                      <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-light-danger">
                        <div className="position-absolute text-danger h5 mb-0">
                          <i className="fas fa-comments"></i>
                        </div>
                      </div>

                      <div className="ground-content">
                        <h6>
                          <a href="#">Shilpa Rana</a>
                        </h6>
                        <small className="text-fade">Shilpa Send a Message</small>
                        <span className="small">02 Min Ago</span>
                      </div>
                    </div>

                    <div className="ground ground-list-single">
                      <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-light-info">
                        <div className="position-absolute text-info h5 mb-0">
                          <i className="fas fa-grin-squint-tears"></i>
                        </div>
                      </div>

                      <div className="ground-content">
                        <h6>
                          <a href="#">Amar Muskali</a>
                        </h6>
                        <small className="text-fade">Need Responsive Business Tem...</small>
                        <span className="small">10 Min Ago</span>
                      </div>
                    </div>

                    <div className="ground ground-list-single">
                      <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-light-purple">
                        <div className="position-absolute text-purple h5 mb-0">
                          <i className="fas fa-briefcase"></i>
                        </div>
                      </div>

                      <div className="ground-content">
                        <h6>
                          <a href="#">Maryam Amiri</a>
                        </h6>
                        <small className="text-fade">Next Meeting on Tuesday..</small>
                        <span className="small">15 Min Ago</span>
                      </div>
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

export default Dashboard
