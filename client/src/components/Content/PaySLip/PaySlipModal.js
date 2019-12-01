import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addPaySlip } from "../../../actions/payslipActions";
import { showNoti } from "../../../actions/notificationActions";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class PaySlipModal extends Component {
  state = {
    name: "",
    notiType: "",
  };

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (prevProps.payslip.payslips !== this.props.payslip.payslips) {
      if (this.props.isLoaded === false) {
        return;
      };

      if (this.props.payslip.type === 'DELETE_PAYSLIP' || this.props.payslip.type === 'GET_PAYSLIPS') {
        return;
      }

      if (this.props.payslip.response === 200) {
        this.setState({ notiType: 'success' });
      } else {
        this.setState({ notiType: 'failure' });
      }
    }
  }

  createNotification = () => {
    const { notiType } = this.state;
    this.props.showNoti(notiType);
    this.setState({ notiType: '' });
  };

  onChange = e => {
    console.log(e.target.value);

    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      idMember: this.state.idMember,
      idSupplier: this.state.idSupplier,
      createddate: new Date(),
      totalAmt: this.state.totalAmt
    };
    this.props.addPaySlip(newItem);

    // Close modal
    document.getElementById("triggerButton").click();
  };

  render() {
    const { notiType } = this.state;
    return (
      <Fragment>
        {notiType !== "" ? (
          this.createNotification()
        ) : null}
        <NotificationContainer />

        {/* Button trigger modal */}
        <button
          type="button"
          id="triggerButton"
          style={{ float: "right" }}
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add new pay slip
        </button>
        {/* Modal */}
        <form onSubmit={this.onSubmit}>
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <span>
                    <h3 className="modal-title" id="exampleModalLongTitle">
                      Add new Pay slip
                  </h3>
                  </span>
                  <span>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </span>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Member:
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      id="idmember"
                      placeholder="Add member"
                      name="idmember"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Supplier:
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      id="idsupplier"
                      placeholder="Add supplier"
                      name="idsupplier"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Created Date:
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      id="createddate"
                      placeholder="Add createddate"
                      name="createddate"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Total Amount:
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      id="totalAmt"
                      placeholder="Add total amount"
                      name="totalAmt"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                </button>
                  <button
                    type="submit"

                    className="btn btn-primary"
                  >
                    Add pay slip
                </button>
                </div>
              </div>
            </div>
          </div>
        </form>

      </Fragment>

    );
  }
}
const mapStateToProps = state => ({
  payslip: state.payslip,
  isLoaded: state.member.isLoaded
});
export default connect(
  mapStateToProps,
  { addPaySlip, showNoti }
)(PaySlipModal);
