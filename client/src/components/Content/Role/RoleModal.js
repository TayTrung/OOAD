import React, { Component } from "react";

import { connect } from "react-redux";
import { addRole } from "../../../actions/roleActions";
const mongoose = require("mongoose");

class RoleModal extends Component {
  state = {
    name: "",
    memberManagement: false,
    productManagement: false,
    categoryManagement: false,
    customerManagement: false,
    invoiceManagement: false,
    supplierManagement: false,
    billManagement: false,
    materialManagement: false,
    materialReceiptNoteManagement: false,
    roleManagement: false,
    msg: "",
    inputErrors: false,
    checkboxErrors: false
  };

  onChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    let msg = "";

    //Validation
    let isPassed = false;
    if (name === "name") isPassed = this.validateName(value);
    const inputErrors = isPassed ? false : true;
    if (!isPassed)
      msg =
        "Name of role can only contain only letters, numbers, underscores and spaces";

    this.setState({ [name]: value, msg, inputErrors });
  };

  validateName = name => {
    return new RegExp(/^[a-zA-Z0-9_-_ ]*$/).test(name);
  };
  validateCheckbox() {
    let checkboxes = document.getElementsByClassName("activityCheckbox"); // puts all your checkboxes in a variable

    // if a checkbox is checked, function ends and returns true. If all checkboxes have been iterated through (which means they are all unchecked), returns false.
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        return true;
      }
    }
    return false;
  }

  onSubmit = e => {
    e.preventDefault();
    // if (!this.validateCheckbox()) {
    // let    msg = "At least one checkbox must be checked";
    //   this.setState({ msg, inputErrors: true });
    //   return;
    // }
    const {
      name,
      memberManagement,
      productManagement,
      categoryManagement,
      customerManagement,
      invoiceManagement,
      supplierManagement,
      billManagement,
      materialManagement,
      materialReceiptNoteManagement,
      roleManagement
    } = this.state;
    const newRole = {
      _id: mongoose.Types.ObjectId(),
      name,
      memberManagement,
      productManagement,
      categoryManagement,
      customerManagement,
      invoiceManagement,
      supplierManagement,
      billManagement,
      materialManagement,
      materialReceiptNoteManagement,
      roleManagement,
      createAt: Date.now()
    };
    this.props.addRole(newRole);

    // Close modal
    document.getElementById("triggerButton").click();

    //Toggle

    // this.props.toggle();
  };
  handleOnClick = () => {
    // window.location.replace("/category?page=0&id=2");
    // window.history.pushState("haha", null, "/category/edit");
  };
  renderCheckboxes = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <label>
              <input
                name="memberManagement"
                type="checkbox"
                checked={this.state.memberManagement}
                onChange={this.onChange}
              />
              Member management
            </label>
          </div>

          <div>
            <label>
              <input
                name="productManagement"
                type="checkbox"
                checked={this.state.productManagement}
                onChange={this.onChange}
              />
              Product management
            </label>
          </div>

          <div>
            <label>
              <input
                name="categoryManagement"
                type="checkbox"
                checked={this.state.categoryManagement}
                onChange={this.onChange}
              />
              Category management
            </label>
          </div>

          <div>
            <label>
              <input
                name="customerManagement"
                type="checkbox"
                checked={this.state.customerManagement}
                onChange={this.onChange}
              />
              Customer management
            </label>
          </div>
          <div>
            <label>
              <input
                name="invoiceManagement"
                type="checkbox"
                checked={this.state.invoiceManagement}
                onChange={this.onChange}
              />
              Invoice management
            </label>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <label>
              <input
                name="supplierManagement"
                type="checkbox"
                checked={this.state.supplierManagement}
                onChange={this.onChange}
              />
              Supplier management
            </label>
          </div>
          <div>
            <label>
              <input
                name="billManagement"
                type="checkbox"
                checked={this.state.billManagement}
                onChange={this.onChange}
              />
              Bill management
            </label>
          </div>
          <div>
            <label>
              <input
                name="materialManagement"
                type="checkbox"
                checked={this.state.materialManagement}
                onChange={this.onChange}
              />
              Material management
            </label>
          </div>

          <div>
            <label>
              <input
                name="materialReceiptNoteManagement"
                type="checkbox"
                checked={this.state.materialReceiptNoteManagement}
                onChange={this.onChange}
              />
              Material receipt note management
            </label>
          </div>
          <div>
            <label>
              <input
                name="roleManagement"
                type="checkbox"
                checked={this.state.roleManagement}
                onChange={this.onChange}
              />
              Role management
            </label>
          </div>
        </div>
      </div>
    );
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
          Add new role
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
                    Add new Role
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
                {this.state.msg ? (
                  <div className="alert alert-danger alert-dismissible">
                    {/* <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-hidden="true"
                >
                  ×
                </button> */}

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
                    placeholder="Role name"
                    name="name"
                    onChange={this.onChange}
                  />
                </div>
                {this.renderCheckboxes()}
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
                  disabled={
                    !this.state.inputErrors && this.state.name !== ""
                      ? false
                      : true
                  }
                >
                  Add role
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
  role: state.role
});
export default connect(mapStateToProps, { addRole })(RoleModal);
