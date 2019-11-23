import React, { Component } from "react";

import { connect } from "react-redux";
import { addUser } from "../../../actions/userActions";

class UserModal extends Component {
  state = {
    idRole: "",
    username: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    address: ""
  };

  onChange = e => {
    console.log(e.target.value);

    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      idRole: this.state.idRole,
      username: this.state.username,
      password: this.state.password,
      fullName: this.state.fullName,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address
    };
    this.props.addUser(newItem);

    // Close modal
    document.getElementById("triggerButton").click();

    //Toggle

    // this.props.toggle();
  };
  handleOnClick = () => {
    // window.location.replace("/category?page=0&id=2");
    // window.history.pushState("haha", null, "/category/edit");
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
          Add new user
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
                    Add new user
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
                  <label htmlFor="user-idRole" className="col-form-label">
                    idRole:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userIdRole"
                    placeholder="user ID role"
                    name="idRole"
                    onChange={this.onChange}
                  />
                  <label htmlFor="user-username" className="col-form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userame"
                    placeholder="username"
                    name="username"
                    onChange={this.onChange}
                  />
                  <label htmlFor="user-fullName" className="col-form-label">
                    Fullname:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userFullname"
                    placeholder="user fullname"
                    name="fullName"
                    onChange={this.onChange}
                  />
                  <label htmlFor="user-phoneNumber" className="col-form-label">
                    Phone number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userPhoneNumber"
                    placeholder="user phone number"
                    name="phoneNumber"
                    onChange={this.onChange}
                  />
                  <label htmlFor="user-address" className="col-form-label">
                    Address:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userAddress"
                    placeholder="user address"
                    name="address"
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
                  Add user
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
  user: state.user
});
export default connect(
  mapStateToProps,
  { addUser }
)(UserModal);
