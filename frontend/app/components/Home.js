import React, { useEffect } from "react"
import HeroBanner from "./HeroBanner"
import CourseStart from "./CourseStart"
import InstructorStart from "./InstructorStart"
import TopCoursesEbooks from "./TopCourseEbooks"

import LatestNews from "./LatestNews"
import CallToAction from "./CallToAction"
import Modal from "./Modal"
import ClearFix from "./ClearFix"

function Home() {
  return (
    <>
      <HeroBanner />
      <CourseStart />
      <ClearFix />
      <InstructorStart />
      <ClearFix />
      <TopCoursesEbooks />

      <LatestNews />
      <ClearFix />
      <CallToAction />
    </>
  )
}

export default Home
