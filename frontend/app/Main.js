import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import "./assets/css/styles.css"

import "./assets/js/jquery.min.js"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Modal from "./components/Modal"

function Main() {
  return <></>
}

const root = ReactDOM.createRoot(document.querySelector("#main-wrapper"))
root.render(<Main />)
if (module.hot) {
  module.hot.accept()
}
