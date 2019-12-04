import React, { Component } from "react";

import { connect } from "react-redux";
import { addCategory } from "../../../actions/categoryActions";

const mongoose = require("mongoose");

class CategoryModal extends Component {
  state = {
    name: "",
    _id: 0,
    inputErrors: false,
    msg: ""
  };
  onChange = e => {
    console.log(e.target.value);

    const { name, value } = e.target;
    let msg = "";

    //Validation
    const isPassed = this.validateName(value);
    const inputErrors = isPassed ? false : true;
    if (!isPassed)
      msg =
        "Name of category can only contain only letters, numbers, underscores and spaces";

    this.setState({ [name]: value, msg, inputErrors });
  };
  validateName = name => {
    return new RegExp(/^[a-zA-Z0-9_-_ ]*$/).test(name);
  };
  onSubmit = e => {
    e.preventDefault();

    const { name } = this.state;
    const newItem = {
      name,
      createAt: Date.now(),
      _id: mongoose.Types.ObjectId()
    };

    this.props.addCategory(newItem);

    // Close modal
    document.getElementById("triggerButton").click();
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
          Add new category
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
                    Add new Category
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
                    placeholder="Category name"
                    name="name"
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
                  disabled={
                    !this.state.inputErrors && this.state.name !== ""
                      ? false
                      : true
                  }
                >
                  Add category
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
  category: state.category
});
export default connect(mapStateToProps, { addCategory })(CategoryModal);
