import React, { Component } from "react";

import { connect } from "react-redux";
import { addInvoice } from "../../../actions/invoiceActions";

class InvoiceModal extends Component {
  state = {
    idMember: "",
    idUser: "",
    totalAmt: 0,
    createddate: new Date(),
    comments: "",
  };

  onChange = e => {
    //console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });

  };

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      idMember: this.state.idMember,
      idUser: this.state.idUser,
      totalAmt: this.state.totalAmt,
      createddate: this.state.createddate,
      comments: this.state.comments
    };
    this.props.addInvoice(newItem);

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
          onClick={this.handleOnClick}
        >
          Add new invoice
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
                    Add new Invoice
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
                    id="idMember"
                    placeholder="Enter name"
                    name="idMember"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    User:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="idUser"
                    placeholder="Enter user"
                    name="idUser"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Total:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="totalAmt"
                    placeholder="Enter total"
                    name="totalAmt"
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
                    placeholder="Enter created date"
                    name="createddate"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Comments:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="comments"
                    placeholder="Enter comments"
                    name="comments"
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
                  Add invoice
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
  invoice: state.invoice
});
export default connect(
  mapStateToProps,
  { addInvoice }
)(InvoiceModal);
