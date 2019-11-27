import React, { Component } from "react";
import { connect } from "react-redux";
import { addMember, getMembers } from "../../../actions/memberActions";
import { addInvoice } from "../../../actions/invoiceActions";
import { showNoti } from "../../../actions/notificationActions";
import 'react-notifications/lib/notifications.css';
import Notification from "../../Notification";
import PropTypes from "prop-types";
import { NotificationContainer, NotificationManager } from 'react-notifications';

const mongoose = require("mongoose");

class MemberModal extends Component {

  state = {
    name: "",
    phone: "",
    point: 0,
    _id: "",
    msg: "",
    notiType: "",
  };

  onChange = e => {
    //this.setState({ [e.target.name]: e.target.value });
    const { name, value } = e.target;
    let msg = "";

    //Validation
    const isPassed = this.validatePhone(value);
    //const inputErrors = isPassed ? false : true;

    if (!isPassed && name === 'phone') {
      msg = "Phone can only contain numbers and spaces";
    }
    this.setState({ [name]: value, msg });
  };

  validatePhone = phone => {
    return new RegExp(/^[0-9 ]*$/).test(phone);
  };

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      name: this.state.name,
      phone: this.state.phone,
      point: this.state.point,
      createAt: new Date(),
      _id: mongoose.Types.ObjectId(),
    };
    this.props.addMember(newItem);


    // Close modal
    document.getElementById("triggerButton").click();
  };
  createNotification = () => {
    // this.setState({ noti: 'success' });
    const { notiType } = this.state;
    this.props.showNoti('success');
  };

  render() {
    const { defaultPoint } = this.props;
    const { notiType } = this.state;

    return (
      <React.Fragment>
        <button className='btn btn-info'
          onClick={this.createNotification}>Button
        </button>
        <NotificationContainer />

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
                  {this.state.msg != '' ? (
                    <div className="alert alert-danger alert-dismissible">
                      {this.state.msg}
                    </div>
                  ) : null}
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
                      required
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
                      required
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
                      defaultValue={0}
                      //placeholder="Add point"
                      name="point"
                      disabled={true}
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
                    type="submit"
                    //onClick={this.onSubmit}
                    className="btn btn-primary"
                  >
                    Add member
                </button>
                </div>
              </div>
            </div>
          </div>
        </form>

      </React.Fragment>
    );
  }
}

MemberModal.propTypes = {
  showNoti: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  member: state.member
});
export default connect(
  mapStateToProps,
  { addMember, getMembers, addInvoice, showNoti }
)(MemberModal);
