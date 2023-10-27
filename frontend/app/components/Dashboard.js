import React, { useContext, useEffect, useState } from "react"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"
import { useImmerReducer } from "use-immer"
import { useNavigate, Link, Routes, Route, NavLink } from "react-router-dom"

import DashboardRightNav from "./DashboardRightNav"
import ManageCourse from "./ManageCourse"

function Dashboard() {
  const dashboardStyle = { height: "300px" }
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const initialState = {
    courseFlag: false,
    enrollmentFlag: false,
    studentFlag: false,
    reportFlag: false,
    adminsFlag: false,
    instructorsFlag: false,
    studentsFlag: false,
    settingsFlag: false,

    isCourseLabelActive: false,
    isEnrollmentLabelActive: false,
    isDashboardLabelActive: false,
    isReportLabelActive: false,
    isAdminsLabelActive: false,
    isInstructorsLabelActive: false,
    isStudentsLabelActive: false,
    isSettingsLabelActive: false,
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "dashboard":
        console.log("OurReducer->dashboard")
        draft.isDashboardLabelActive = true
        draft.isCourseLabelActive = false
        draft.isEnrollmentLabelActive = false
        draft.isReportLabelActive = false
        draft.isAdminsLabelActive = false
        draft.isInstructorsLabelActive = false
        draft.isStudentsLabelActive = false
        draft.isSettingsLabelActive = false

        return
      case "course":
        console.log("OurReducer->Course")
        draft.courseFlag = !draft.courseFlag
        draft.isCourseLabelActive = true
        draft.isEnrollmentLabelActive = false
        draft.isDashboardLabelActive = false
        draft.isReportLabelActive = false
        draft.isAdminsLabelActive = false
        draft.isInstructorsLabelActive = false
        draft.isStudentsLabelActive = false
        draft.isSettingsLabelActive = false
        return
      case "enrollment":
        draft.enrollmentFlag = !draft.enrollmentFlag
        draft.isEnrollmentLabelActive = true
        draft.isCourseLabelActive = false
        draft.isDashboardLabelActive = false
        draft.isReportLabelActive = false
        draft.isAdminsLabelActive = false
        draft.isInstructorsLabelActive = false
        draft.isStudentsLabelActive = false
        draft.isSettingsLabelActive = false
        return
      case "report":
        draft.reportFlag = !draft.reportFlag
        draft.isReportLabelActive = true
        draft.isEnrollmentLabelActive = false
        draft.isCourseLabelActive = false
        draft.isDashboardLabelActive = false
        draft.isAdminsLabelActive = false
        draft.isInstructorsLabelActive = false
        draft.isStudentsLabelActive = false
        draft.isSettingsLabelActive = false
        return
      case "admins":
        draft.adminsFlag = !draft.adminsFlag
        draft.isAdminsLabelActive = true
        draft.isReportLabelActive = false
        draft.isEnrollmentLabelActive = false
        draft.isCourseLabelActive = false
        draft.isDashboardLabelActive = false
        draft.isInstructorsLabelActive = false
        draft.isStudentsLabelActive = false
        draft.isSettingsLabelActive = false
        return
      case "instructors":
        draft.instructorsFlag = !draft.instructorsFlag
        draft.isInstructorsLabelActive = true
        draft.isAdminsLabelActive = false
        draft.isReportLabelActive = false
        draft.isEnrollmentLabelActive = false
        draft.isCourseLabelActive = false
        draft.isDashboardLabelActive = false
        draft.isStudentsLabelActive = false
        draft.isSettingsLabelActive = false
        return
      case "students":
        draft.studentsFlag = !draft.studentsFlag
        draft.isStudentsLabelActive = true
        draft.isInstructorsLabelActive = false
        draft.isAdminsLabelActive = false
        draft.isReportLabelActive = false
        draft.isEnrollmentLabelActive = false
        draft.isCourseLabelActive = false
        draft.isDashboardLabelActive = false
        draft.isSettingsLabelActive = false
        return
      case "settings":
        draft.settingsFlag = !draft.settingsFlag
        draft.isSettingsLabelActive = true
        draft.isStudentsLabelActive = false
        draft.isInstructorsLabelActive = false
        draft.isAdminsLabelActive = false
        draft.isReportLabelActive = false
        draft.isEnrollmentLabelActive = false
        draft.isCourseLabelActive = false
        draft.isDashboardLabelActive = false

        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)
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
                  <li className={state.isDashboardLabelActive ? "active" : ""}>
                    <NavLink to="">
                      <i className="fas fa-th"></i>Dashboard
                    </NavLink>
                  </li>
                  <li className={"dropdown " + (state.isCourseLabelActive ? "active" : "")}>
                    <Link onClick={() => dispatch({ type: "course" })}>
                      <i className="fas fa-shopping-basket"></i>Courses<span className="ti-angle-left"></span>
                    </Link>
                    <ul className={"nav nav-second-level " + (state.courseFlag ? "collapse show" : "collapse")}>
                      <li>
                        <NavLink to="managecourse">Manage Courses</NavLink>
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
                  <li className={"dropdown " + (state.isEnrollmentLabelActive ? "active" : "")}>
                    <Link onClick={() => dispatch({ type: "enrollment" })}>
                      <i className="fas fa-gem"></i>Enrollment<span className="ti-angle-left"></span>
                    </Link>
                    <ul className={"nav nav-second-level " + (state.enrollmentFlag ? "collapse show" : "collapse")}>
                      <li>
                        <a href="enroll-history.html">Enroll History</a>
                      </li>
                      <li>
                        <a href="enroll-student.html">Enroll a Student</a>
                      </li>
                    </ul>
                  </li>
                  <li className={"dropdown " + (state.isReportLabelActive ? "active" : "")}>
                    <Link onClick={() => dispatch({ type: "report" })}>
                      <i className="fas fa-archive"></i>Report<span className="ti-angle-left"></span>
                    </Link>
                    <ul className={"nav nav-second-level " + (state.reportFlag ? "collapse show" : "collapse")}>
                      <li>
                        <a href="admin-revenue.html">Admin Revenue</a>
                      </li>
                      <li>
                        <a href="instructor-revenue.html">Instructor Revenue</a>
                      </li>
                    </ul>
                  </li>
                  <li className={"dropdown " + (state.isAdminsLabelActive ? "active" : "")}>
                    <Link onClick={() => dispatch({ type: "admins" })}>
                      <i className="fas fa-user-shield"></i>Admins<span className="ti-angle-left"></span>
                    </Link>
                    <ul className={"nav nav-second-level " + (state.adminsFlag ? "collapse show" : "collapse")}>
                      <li>
                        <a href="manage-admins.html">Manage Admins</a>
                      </li>
                      <li>
                        <a href="add-admin.html">Add New Admins</a>
                      </li>
                    </ul>
                  </li>
                  <li className={"dropdown " + (state.isInstructorsLabelActive ? "active" : "")}>
                    <Link onClick={() => dispatch({ type: "instructors" })}>
                      <i className="fas fa-toolbox"></i>Instructors<span className="ti-angle-left"></span>
                    </Link>
                    <ul className={"nav nav-second-level " + (state.instructorsFlag ? "collapse show" : "collapse")}>
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
                  <li className={"dropdown " + (state.isStudentsLabelActive ? "active" : "")}>
                    <Link onClick={() => dispatch({ type: "students" })}>
                      <i className="fas fa-user"></i>Students<span className="ti-angle-left"></span>
                    </Link>
                    <ul className={"nav nav-second-level " + (state.studentsFlag ? "collapse show" : "collapse")}>
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
                  <li className={"dropdown " + (state.isSettingsLabelActive ? "active" : "")}>
                    <Link onClick={() => dispatch({ type: "settings" })}>
                      <i className="fas fa-cog"></i>Settings<span className="ti-angle-left"></span>
                    </Link>
                    <ul className={"nav nav-second-level " + (state.settingsFlag ? "collapse show" : "collapse")}>
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
          <Routes>
            <Route path="" element={<DashboardRightNav />} />
            <Route path="managecourse" element={<ManageCourse />} />
          </Routes>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
