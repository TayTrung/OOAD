import React, { Component } from "react";
import MaterialModal from "./MaterialModal";
import MaterialRow from "./MaterialRow";
import { connect } from "react-redux";
import { getMaterials, deleteMaterial } from "../../../actions/materialActions";
import PropTypes from "prop-types";
import axios from "axios";

class Material extends Component {
  state = {
    sort: [{ value: "10" }, { value: "20" }, { value: "30" }],
    select: "10",
    currentPage: 1,
    pages: [],
    totalDocuments: 0,
    query: ""
  };

  componentDidMount() {
    const { select, currentPage, query } = this.state;
    this.getTotalDocuments();

    this.getPages();

    this.props.getMaterials(select, currentPage, query);
  }

  getTotalDocuments = () => {
    const { query } = this.state;
    console.log(query);
    let newQuery = "";
    if (query === "") newQuery = "undefined";
    else newQuery = query;

    axios
      .get(`/api/material/count/${newQuery}`)
      .then(response => {
        this.setState({ totalDocuments: response.data });
      })
      .catch(er => {
        console.log(er.response);
      });
  };
  getPages = () => {
    const { select, query } = this.state;
    console.log(query);
    let newQuery = "";
    if (query === "") newQuery = "undefined";
    else newQuery = query;

    axios
      .get(`/api/material/count/${newQuery}`)
      .then(response => {
        let pages = Math.floor(response.data / select);
        let remainder = response.data % select;
        let newArray = [];
        if (remainder !== 0) pages += 1;

        for (let i = 0; i < pages; i++) {
          newArray.push({ pageNumber: i + 1 });
        }

        this.setState({ pages: newArray });
      })
      .catch(er => {
        console.log(er.response);
      });
  };

  handleOnChange = e => {
    this.setState(
      { [e.target.name]: e.target.value, [e.target.quantity]: e.target.value },
      () => {
        const { select, currentPage, query } = this.state;
        this.props.getMaterials(select, currentPage, query);
        this.getPages();
        this.getTotalDocuments();
      }
    );
  };

  renderMaterials = () => {
    const { materials } = this.state;
    materials.map(eachMaterial => {
      return (
        <MaterialRow
          history={this.props.history}
          key={eachMaterial._id}
          Material={eachMaterial}
        />
      );
    });
  };

  handleChoosePage = e => {
    this.setState({ currentPage: e }, () => {
      const { select, currentPage, query } = this.state;
      this.props.getMaterials(select, currentPage, query);
    });
  };

  renderPageButtons = () => {
    const { pages, currentPage } = this.state;

    return pages.map(eachButton => (
      <li
        key={eachButton.pageNumber}
        className={
          currentPage === eachButton.pageNumber
            ? "paginae_button active"
            : "paginate_button "
        }
      >
        <a
          name="currentPage"
          onClick={() => this.handleChoosePage(eachButton.pageNumber)}
          aria-controls="example1"
          data-dt-idx={eachButton.pageNumber}
          tabIndex={0}
        >
          {eachButton.pageNumber}
        </a>
      </li>
    ));
  };

  render() {
    const { materials } = this.props.material;
    const { select, totalDocuments, pages } = this.state;

    return (
      <React.Fragment>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Material
            {/* <small>Preview</small> */}
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="fake_url">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="fake_url">Material</a>
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
                    <h3 className="box-title">Materials Table</h3>
                  </div>

                  <div className="col-md-4">
                    <MaterialModal />
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
                                onChange={this.handleOnChange}
                                name="select"
                                aria-controls="example1"
                                style={{ margin: "0px 5px" }}
                                className="form-control input-sm"
                                value={this.state.select}
                              >
                                {this.state.sort.map(option => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.value}
                                  </option>
                                ))}
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
                                name="query"
                                style={{ margin: "0px 5px" }}
                                className="form-control input-sm"
                                placeholder="Find me  "
                                aria-controls="example1"
                                onChange={this.handleOnChange}
                                value={this.state.query}
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
                              <th style={{ width: "10%" }}>#</th>
                              <th style={{ width: "20%" }}>Material</th>
                              <th style={{ width: "20%" }}>Created date</th>
                              <th style={{ width: "20%" }}>Quantity</th>
                              <th style={{ width: "30%" }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {materials.map((eachMaterial, index) => (
                              <MaterialRow
                                history={this.props.history}
                                //key={eachMaterial._id}
                                Material={eachMaterial}
                                index={index}
                                // deleteCategory={this.props.deleteCategory}
                              />
                            ))}
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>#</th>
                              <th>Material</th>
                              <th>Created date</th>
                              <th>Quantity</th>
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
                          Showing 1 to{" "}
                          {totalDocuments < select ? totalDocuments : select} of{" "}
                          {totalDocuments} entries
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
                            {this.renderPageButtons()}
                            <li
                              className="paginate_button next disabled"
                              id="example1_next"
                            >
                              <a
                                href="fake_url"
                                aria-controls="example2"
                                data-dt-idx={this.state.pages.length + 1}
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
          </div>
        </section>
        {/* /.content */}
      </React.Fragment>
    );
  }
}

Material.propTypes = {
  getMaterials: PropTypes.func.isRequired,
  material: PropTypes.object.isRequired,
  deleteMaterial: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  material: state.material
});

export default connect(
  mapStateToProps,
  { getMaterials, deleteMaterial }
)(Material);
