import React, { Component } from "react";

import { connect } from "react-redux";
import { addPaySlip } from "../../../actions/payslipActions";

class PaySlipModal extends Component {
  state = {
    name: ""
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
    return (
      <React.Fragment>
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
                  type="button"
                  onClick={this.onSubmit}
                  className="btn btn-primary"
                >
                  Add pay slip
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  payslip: state.payslip
});
export default connect(
  mapStateToProps,
  { addPaySlip }
)(PaySlipModal);
