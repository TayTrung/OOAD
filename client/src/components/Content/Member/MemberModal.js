import React, { Component } from "react";

import { connect } from "react-redux";
import { addMember } from "../../../actions/memberActions";
import { addInvoice } from "../../../actions/invoiceActions";

class MemberModal extends Component {
  state = {
    name: "",
    phone: "",
    point: 0,
  };

  onChange = e => {
    //console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      name: this.state.name,
      phone: this.state.phone,
      point: this.state.point,
      createAt: new Date()
    };
    this.props.addMember(newItem);

    // Close modal
    document.getElementById("triggerButton").click();

    //Toggle

    // this.props.toggle();
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
          Add new member
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
                    Add new Member
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
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Add member"
                    name="name"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Phone:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Add phone"
                    name="phone"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Point:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="point"
                    placeholder="Add point"
                    name="point"
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
                  Add member
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
  member: state.member
});
export default connect(
  mapStateToProps,
  { addMember, addInvoice }
)(MemberModal);
