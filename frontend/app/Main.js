import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import "./assets/css/styles.css"

import "./assets/js/jquery.min.js"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Modal from "./components/Modal"
import ClearFix from "./components/ClearFix"
import HeroBanner from "./components/HeroBanner"
import CourseStart from "./components/CourseStart"
import InstructorStart from "./components/InstructorStart"
import TopCoursesEbooks from "./components/TopCourseEbooks"
import StudentReviews from "./components/StudentReviews"
import LatestNews from "./components/LatestNews"
import CallToAction from "./components/CallToAction"
import LogInModal from "./components/LogInModal"
import BackToTop from "./components/BackToTop"

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <ClearFix />
      <HeroBanner />
      <CourseStart />
      <ClearFix />
      <InstructorStart />
      <ClearFix />
      <TopCoursesEbooks />

      <LatestNews />
      <ClearFix />
      <CallToAction />
      <Footer />
      <LogInModal />
      <BackToTop />
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#main-wrapper"))
root.render(<Main />)
if (module.hot) {
  module.hot.accept()
}
