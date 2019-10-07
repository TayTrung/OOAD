import React, { Component } from "react";
import axios from "axios";
import CategoryModal from "./CategoryModal";
import CategoryRow from "./CategoryRow";

export default class Category extends Component {
  state = {
    categories: []
    // modal: false
  };
  toggle = () => {
    // this.setState({ modal: !this.state.modal });
  };
  componentDidMount() {
    axios
      .get("/api/category")

      .then(response => {
        this.setState({ categories: response.data });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  renderCategories = () => {
    const { categories } = this.state;
    categories.map(eachCategory => {
      return (
        <CategoryRow
          history={this.props.history}
          key={eachCategory._id}
          Category={eachCategory}
        />
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Category
            {/* <small>Preview</small> */}
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="fake_url">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="fake_url">Category</a>
            </li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            {/* left column */}
            <div className="col-md-12">
              <div className="box">
                <div className="box-header" style={{ marginTop: "5px" }}>
                  <div style={{ paddingLeft: "5px" }} className="col-md-8">
                    <h3 className="box-title">Data Table With Full Features</h3>
                  </div>

                  <div className="col-md-4">
                    <CategoryModal toggle={this.toggle} />
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <div
                    id="example1_wrapper"
                    className="dataTables_wrapper form-inline dt-bootstrap"
                  >
                    <div className="row">
                      <div>
                        <div className="col-sm-6">
                          <div
                            className="dataTables_length"
                            id="example1_length"
                          >
                            <label>
                              Show
                              <select
                                name="example1_length"
                                aria-controls="example1"
                                style={{ margin: "0px 5px" }}
                                className="form-control input-sm"
                              >
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                              </select>
                              entries
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div
                            id="example1_filter"
                            className="dataTables_filter"
                          >
                            <label style={{ float: "right" }}>
                              Search:
                              <input
                                type="search"
                                style={{ margin: "0px 5px" }}
                                className="form-control input-sm"
                                placeholder="Find me  "
                                aria-controls="example1"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          id="example1"
                          className="table table-bordered table-striped"
                        >
                          <thead>
                            <tr>
                              <th style={{ width: "30%" }}>ID</th>
                              <th style={{ width: "20%" }}>Category</th>
                              <th style={{ width: "20%" }}>Created date</th>
                              <th style={{ width: "30%" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.categories.map(eachCategory => (
                              <CategoryRow
                                history={this.props.history}
                                key={eachCategory._id}
                                Category={eachCategory}
                              />
                            ))}
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>ID</th>
                              <th>Category</th>
                              <th>Created date</th>
                              <th>Action</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-5">
                        <div
                          className="dataTables_info"
                          id="example1_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 8 of 8 entries
                        </div>
                      </div>
                      <div className="col-sm-7">
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="example1_paginate"
                        >
                          <ul className="pagination" style={{ float: "right" }}>
                            <li
                              className="paginate_button previous disabled"
                              id="example1_previous"
                            >
                              <a
                                href="fake_url"
                                aria-controls="example1"
                                data-dt-idx={0}
                                tabIndex={0}
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button active">
                              <a
                                href="fake_url"
                                aria-controls="example1"
                                data-dt-idx={1}
                                tabIndex={0}
                              >
                                1
                              </a>
                            </li>
                            <li
                              className="paginate_button next disabled"
                              id="example1_next"
                            >
                              <a
                                href="fake_url"
                                aria-controls="example1"
                                data-dt-idx={2}
                                tabIndex={0}
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/.col (left) */}
                </div>
                {/* /.row */}
              </div>
            </div>
            >
          </div>
        </section>
        {/* /.content */}
      </React.Fragment>
    );
  }
}
