import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import { useImmerReducer } from "use-immer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import "./assets/css/styles.css"

import "./assets/js/jquery.min.js"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Modal from "./components/Modal"
import ClearFix from "./components/ClearFix"

import LogInModal from "./components/LogInModal"
import BackToTop from "./components/BackToTop"
import SignUp from "./components/SignUp"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import DashboardSection from "./components/DashboardSection"

function Main() {
  const initialState = {
    isSignUpOpen: false,
    loggedIn: false,
    isDashboardOpen: false,
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "signUp":
        console.log("OurReducer->SignUP")
        draft.isSignUpOpen = true
        draft.isDashboardOpen = false
        return
      case "login":
        draft.loggedIn = true
        draft.isDashboardOpen = true
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Header />
          <ClearFix />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardSection />} />
          </Routes>
          <Footer />
          <LogInModal />
          <BackToTop />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#main-wrapper"))
root.render(<Main />)
if (module.hot) {
  module.hot.accept()
}
