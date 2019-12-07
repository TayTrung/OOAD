import React, { Fragment, Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { showNoti } from "../../../actions/notificationActions";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class PaySlipEdit extends Component {
  state = {
    idMember: "",
    idSupplier: "",
    createddate: new Date(),
    totalAmt: 0,
    _id: "",
    notiType: "",
  };

  createNotification = () => {
    const { notiType } = this.state;
    this.props.showNoti(notiType);
    this.setState({ notiType: '' });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/payslip/${id}`)
      .then(response => {
        if (response.data === null) this.props.history.push("/404");
        else
          this.setState({
            idMember: response.data.idMember,
            idSupplier: response.data.idSupplier,
            createddate: response.data.createddate,
            totalAmt: response.data.totalAmt,
            _id: response.data._id
          });
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    const { _id, idMember, idSupplier, createddate, totalAmt } = this.state;
    e.preventDefault();
    let notiType = '';
    const newPaySlip = {
      idMember,
      idSupplier,
      createddate,
      totalAmt,
      _id
    };

    axios
      .put(`/api/payslip/${_id}`, newPaySlip)

      .then(response => {

        if (response.status === 200) {
          this.setState({ notiType: 'success' });

          setTimeout(function () { //Start the timer
            window.location.replace("/payslip");
          }.bind(this), 500)
        }

        console.log(response.data);
      })
      .catch(error => {
        this.setState({ notiType: 'failure' });
        console.log(error.response);
      });

  };

  handleCancel = e => {
    this.props.history.push("/payslip");
  };
  render() {
    const { _id, idMember, idSupplier, createddate, totalAmt } = this.state;

    return (
      <Fragment>
        {this.state.notiType !== "" ? (
          this.createNotification()
        ) : null}
        <NotificationContainer />

        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Pay Slip
            {/* <small>Preview</small> */}
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="fake_url">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="fake_url">Pay Slip</a>
            </li>
            <li>
              <a href="fake_url">Edit</a>
            </li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Horizontal Form</h3>
                </div>
                {/* /.box-header */}
                {/* form start */}
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                  <div className="box-body">
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 control-label"
                      >
                        ID
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="_id"
                          type="text"
                          className="form-control"
                          id="inputId"
                          placeholder="Loading..."
                          defaultValue={_id}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 control-label"
                      >
                        Member
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="idMember"
                          type="text"
                          id="inputMember"
                          placeholder="Loading..."
                          className="form-control"
                          defaultValue={idMember}
                          disabled
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 control-label"
                      >
                        Supplier
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="idSupplier"
                          type="text"
                          className="form-control"
                          id="inputSupplier"
                          placeholder="Loading..."
                          defaultValue={idSupplier}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="inputCreateddate"
                        className="col-sm-2 control-label"
                      >
                        Total Amount
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="totalAmt"
                          type="text"
                          className="form-control"
                          id="inputTotalAmt"
                          placeholder="Loading..."
                          defaultValue={totalAmt}
                          onChange={this.handleChange}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button
                      type="button"
                      onClick={this.handleCancel}
                      className="btn btn-default"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-info pull-right">
                      Save
                    </button>
                  </div>
                  {/* /.box-footer */}
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
});
export default connect(
  mapStateToProps, { showNoti }
)(PaySlipEdit);
