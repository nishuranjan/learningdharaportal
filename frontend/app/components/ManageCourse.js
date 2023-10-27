import React, { useEffect } from "react"
import DashboardBreadcrum from "./DashboardBreadcrum"

function ManageCourse() {
  return (
    <div className="col-lg-9 col-md-9 col-sm-12">
      <DashboardBreadcrum title="Manage Courses" />

      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="dashboard_wrap">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                <h6 className="m-0">All Courses List</h6>
              </div>
            </div>

            <div className="row align-items-end mb-5">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>Categories</label>
                  <div className="smalls">
                    <select id="cates" className="form-control">
                      <option value="">&nbsp;</option>
                      <option value="1">IT & Software</option>
                      <option value="2">Banking</option>
                      <option value="3">Medical</option>
                      <option value="4">Insurence</option>
                      <option value="5">Finance & Accounting</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>Instructor</label>
                  <div className="smalls">
                    <select id="ins" className="form-control">
                      <option value="">&nbsp;</option>
                      <option value="1">Summer D. Friedel</option>
                      <option value="2">Daniel D. Richards</option>
                      <option value="3">Rosemary K. Delisle</option>
                      <option value="4">Joseph S. Whetstone</option>
                      <option value="5">Roger M. Gragg</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>Status</label>
                  <div className="smalls">
                    <select id="sts" className="form-control">
                      <option value="">&nbsp;</option>
                      <option value="1">Active</option>
                      <option value="2">Incoming</option>
                      <option value="3">Expired</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                <div className="form-group">
                  <label>Price</label>
                  <div className="smalls">
                    <select id="prc" className="form-control">
                      <option value="">&nbsp;</option>
                      <option value="1">All</option>
                      <option value="2">Free</option>
                      <option value="3">Paid</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                <div className="form-group">
                  <button type="button" className="btn text-white full-width theme-bg">
                    Filter
                  </button>
                </div>
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="form-group smalls row align-items-center">
                  <label className="col-xl-3 col-lg-3 col-sm-2 col-form-label">Show</label>
                  <div className="col-xl-9 col-lg-9 col-sm-10">
                    <select id="show" className="form-control">
                      <option value="">&nbsp;</option>
                      <option value="1">10</option>
                      <option value="2">25</option>
                      <option value="3">35</option>
                      <option value="3">50</option>
                      <option value="3">100</option>
                      <option value="3">250</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="form-group smalls row align-items-center">
                  <label className="col-xl-2 col-lg-2 col-sm-2 col-form-label">Search</label>
                  <div className="col-xl-10 col-lg-10 col-sm-10">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 mb-2">
                <div className="table-responsive">
                  <table className="table dash_list">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Lectures</th>
                        <th scope="col">Enrolled</th>
                        <th scope="col">Status</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <h6>UI/UX Design Pattern For Succesfull Software Applications</h6>
                          <p>
                            Instructor:<span>Gabriel L. William</span>
                          </p>
                        </td>
                        <td>
                          <div className="dhs_tags">Finance</div>
                        </td>
                        <td>
                          <div className="smalls">17 Lectures</div>
                        </td>
                        <td>
                          <span className="smalls">Total: 12</span>
                        </td>
                        <td>
                          <span className="trip theme-cl theme-bg-light">Active</span>
                        </td>
                        <td>
                          <span className="trip theme-cl theme-bg-light">Free</span>
                        </td>
                        <td>
                          <div className="dropdown show">
                            <a className="btn btn-action" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-ellipsis-h"></i>
                            </a>
                            <div className="drp-select dropdown-menu">
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                View
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Edit
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>
                          <h6>Basic Knowledge About Hodiernal Bharat In History</h6>
                          <p>
                            Instructor:<span>Theresa P. Crane</span>
                          </p>
                        </td>
                        <td>
                          <div className="dhs_tags">Laravel</div>
                        </td>
                        <td>
                          <div className="smalls">22 Lectures</div>
                        </td>
                        <td>
                          <span className="smalls">Total: 2</span>
                        </td>
                        <td>
                          <span className="trip text-danger bg-light-danger">Expired</span>
                        </td>
                        <td>
                          <span className="trip theme-cl theme-bg-light">Free</span>
                        </td>
                        <td>
                          <div className="dropdown show">
                            <a className="btn btn-action" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-ellipsis-h"></i>
                            </a>
                            <div className="drp-select dropdown-menu">
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                View
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Edit
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>
                          <h6>Advance PHP Knowledge With Laravel To Make Smart Web</h6>
                          <p>
                            Instructor:<span>David Dhavan</span>
                          </p>
                        </td>
                        <td>
                          <div className="dhs_tags">Software</div>
                        </td>
                        <td>
                          <span className="smalls">41 Lectures</span>
                        </td>
                        <td>
                          <span className="smalls">Total: 4</span>
                        </td>
                        <td>
                          <span className="trip theme-cl theme-bg-light">Active</span>
                        </td>
                        <td>
                          <span className="trip gray">$99</span>
                        </td>
                        <td>
                          <div className="dropdown show">
                            <a className="btn btn-action" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-ellipsis-h"></i>
                            </a>
                            <div className="drp-select dropdown-menu">
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                View
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Edit
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>
                          <h6>The Complete Accounting & Bank Financial Course 2021</h6>
                          <p>
                            Instructor:<span>Stephen E. Foss</span>
                          </p>
                        </td>
                        <td>
                          <div className="dhs_tags">Magento</div>
                        </td>
                        <td>
                          <span className="smalls">56 Lectures</span>
                        </td>
                        <td>
                          <span className="smalls">Total: 8</span>
                        </td>
                        <td>
                          <span className="trip theme-cl theme-bg-light">Active</span>
                        </td>
                        <td>
                          <span className="trip theme-cl theme-bg-light">Free</span>
                        </td>
                        <td>
                          <div className="dropdown show">
                            <a className="btn btn-action" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-ellipsis-h"></i>
                            </a>
                            <div className="drp-select dropdown-menu">
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                View
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Edit
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>
                          <h6>The Complete Business Plan Course Includes 50 Templates</h6>
                          <p>
                            Instructor:<span>Jeannette B. Curiel</span>
                          </p>
                        </td>
                        <td>
                          <div className="dhs_tags">Business</div>
                        </td>
                        <td>
                          <span className="smalls">40 Lectures</span>
                        </td>
                        <td>
                          <span className="smalls">Total: 9</span>
                        </td>
                        <td>
                          <span className="trip text-danger bg-light-danger">Expired</span>
                        </td>
                        <td>
                          <span className="trip gray">$100</span>
                        </td>
                        <td>
                          <div className="dropdown show">
                            <a className="btn btn-action" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-ellipsis-h"></i>
                            </a>
                            <div className="drp-select dropdown-menu">
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                View
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Edit
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>
                          <h6>Full Web Designing Course With 20 Web Template Designing</h6>
                          <p>
                            Instructor:<span>Daniel E. Theriault</span>
                          </p>
                        </td>
                        <td>
                          <div className="dhs_tags">Science</div>
                        </td>
                        <td>
                          <span className="smalls">22 Lectures</span>
                        </td>
                        <td>
                          <span className="smalls">Total: 0</span>
                        </td>
                        <td>
                          <span className="trip theme-cl theme-bg-light">Active</span>
                        </td>
                        <td>
                          <span className="trip theme-cl theme-bg-light">Free</span>
                        </td>
                        <td>
                          <div className="dropdown show">
                            <a className="btn btn-action" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-ellipsis-h"></i>
                            </a>
                            <div className="drp-select dropdown-menu">
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                View
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Edit
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>
                          <h6>Full Web Hosting Course With 20 Web Template Designing</h6>
                          <p>
                            Instructor:<span>Brian B. Cohn</span>
                          </p>
                        </td>
                        <td>
                          <div className="dhs_tags">JavaScript</div>
                        </td>
                        <td>
                          <span className="smalls">32 Lectures</span>
                        </td>
                        <td>
                          <span className="smalls">Total: 8</span>
                        </td>
                        <td>
                          <span className="trip theme-cl theme-bg-light">Active</span>
                        </td>
                        <td>
                          <span className="trip gray">$49</span>
                        </td>
                        <td>
                          <div className="dropdown show">
                            <a className="btn btn-action" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-ellipsis-h"></i>
                            </a>
                            <div className="drp-select dropdown-menu">
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                View
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Edit
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>
                          <h6>Advance Laravel Coding Course Advance Technology</h6>
                          <p>
                            Instructor:<span>Joshua G. Godinez</span>
                          </p>
                        </td>
                        <td>
                          <div className="dhs_tags">PHP</div>
                        </td>
                        <td>
                          <span className="smalls">20 Lectures</span>
                        </td>
                        <td>
                          <span className="smalls">Total: 7</span>
                        </td>
                        <td>
                          <span className="trip text-danger bg-light-danger">Expired</span>
                        </td>
                        <td>
                          <span className="trip theme-cl theme-bg-light">Free</span>
                        </td>
                        <td>
                          <div className="dropdown show">
                            <a className="btn btn-action" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-ellipsis-h"></i>
                            </a>
                            <div className="drp-select dropdown-menu">
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                View
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Edit
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td>
                          <h6>Full Web Designing Course With 20 Web Template Designing</h6>
                          <p>
                            Instructor:<span>R. Lindsley</span>
                          </p>
                        </td>
                        <td>
                          <div className="dhs_tags">WordPress</div>
                        </td>
                        <td>
                          <span className="smalls">10 Lectures</span>
                        </td>
                        <td>
                          <span className="smalls">Total: 6</span>
                        </td>
                        <td>
                          <span className="trip theme-cl theme-bg-light">Active</span>
                        </td>
                        <td>
                          <span className="trip theme-cl theme-bg-light">Free</span>
                        </td>
                        <td>
                          <div className="dropdown show">
                            <a className="btn btn-action" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-ellipsis-h"></i>
                            </a>
                            <div className="drp-select dropdown-menu">
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                View
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Edit
                              </a>
                              <a className="dropdown-item" href="JavaScript:Void(0);">
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <p className="p-0">Showing 1 to 15 of 15 entire</p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <nav className="float-right">
                  <ul className="pagination smalls m-0">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex="-1">
                        <i className="fas fa-arrow-circle-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2 <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fas fa-arrow-circle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageCourse
