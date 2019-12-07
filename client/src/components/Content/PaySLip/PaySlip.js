import React, { Component, Fragment } from "react";
import PaySlipModal from "./PaySlipModal";
import PaySlipRow from "./PaySlipRow";
import { connect } from "react-redux";
import {
  getPaySlips,
  deletePaySlip
} from "../../../actions/payslipActions";
import { showNoti } from "../../../actions/notificationActions";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Loader from "react-loader";
import PropTypes from "prop-types";
import axios from "axios";

class PaySlip extends Component {
  state = {
    sort: [{ value: "5" }, { value: "10" }, { value: "20" }],
    select: "5",
    currentPage: 1,
    pages: [],
    totalDocuments: 0,
    query: "",
    notiType: "",
  };

  resetState = () => {
    this.setState({ select: "5", currentPage: 1, query: "" })
  }
  componentDidMount() {
    const { select, currentPage, query } = this.state;
    this.getTotalDocuments();
    this.getPages();
    this.props.getPaySlips(select, currentPage, query);

    if (!this.props.location.state) { return };
    if (this.props.location.state !== '') {
      this.setState({ notiType: this.props.location.state.notiType });
    }
  }

  getTotalDocuments = () => {
    const { query } = this.state;
    console.log(query);
    let newQuery = "";
    if (query === "") newQuery = "undefined";
    else newQuery = query;

    axios
      .get(`/api/payslip/count/${newQuery}`)
      .then(response => {
        this.setState({ totalDocuments: response.data });
      })
      .catch(er => {
        console.log(er.response);
      });
  };

  getPages = () => {
    const { select, query } = this.state;
    let newQuery = "";
    if (query === "") newQuery = "undefined";
    else newQuery = query;

    axios
      .get(`/api/payslip/count/${newQuery}`)
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
    this.setState({ [e.target.name]: e.target.value }, () => {
      const { select, currentPage, query } = this.state;
      this.props.getPaySlips(select, currentPage, query);
      this.getPages();
      this.getTotalDocuments();
    });
  };

  handleChoosePage = e => {
    this.setState({ currentPage: e }, () => {
      const { select, currentPage, query } = this.state;
      this.props.getPaySlips(select, currentPage, query);
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

  createNotification = () => {
    this.props.showNoti(this.state.notiType);
    this.setState({ notiType: '' });
  };

  render() {
    const { payslips } = this.props.payslip;
    const { isLoaded } = this.props;
    const { select, totalDocuments, pages, notiType } = this.state;
    return (
      <Fragment>
        {!isLoaded ? (
          <Loader></Loader>
        ) : (<React.Fragment>
          {notiType !== '' ? (
            this.createNotification()
          ) : null}
          <NotificationContainer />

          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1>
              Pay slip
            {/* <small>Preview</small> */}
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="fake_url">
                  <i className="fa fa-dashboard" /> Home
              </a>
              </li>
              <li>
                <a href="fake_url">Pay slip</a>
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
                      <PaySlipModal />
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
                                <th style={{ width: "5%" }}>#</th>
                                <th style={{ width: "20%" }}>Member</th>
                                <th style={{ width: "20%" }}>Supplier</th>
                                <th style={{ width: "20%" }}>Created Date</th>
                                <th style={{ width: "15%" }}>Total Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {payslips.map((eachPaySlip, index) => (
                                <PaySlipRow
                                  onHandler={this.handler}
                                  resetState={this.resetState}
                                  history={this.props.history}
                                  key={eachPaySlip._id}
                                  PaySlip={eachPaySlip}
                                  index={index}
                                />

                              ))}
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>#</th>
                                <th>Member</th>
                                <th>Supplier</th>
                                <th>Created Date</th>
                                <th>Total Amount</th>
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
                            Showing 1 to {select} of {totalDocuments} entries
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
        </React.Fragment>)}
      </Fragment>
    );
  }
}

PaySlip.propTypes = {
  getPaySlips: PropTypes.func.isRequired,
  payslip: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  payslip: state.payslip,
  isLoaded: state.payslip.isLoaded
});

export default connect(
  mapStateToProps,
  { getPaySlips, deletePaySlip, showNoti }
)(PaySlip);
