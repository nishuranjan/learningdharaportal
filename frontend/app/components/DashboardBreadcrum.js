import React, { useEffect } from "react"

function DashboardBreadcrum(props) {
  const title = props.title
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 pb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default DashboardBreadcrum
