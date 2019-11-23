import React, { Component } from "react";

import { connect } from "react-redux";
import { addMaterial } from "../../../actions/materialActions";

class MaterialModal extends Component {
  state = {
    _id: "",
    name: "",
    quantity: 0
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      createAt: Date.now(),
      quantity: Number(
        Math.round(parseFloat(this.state.quantity + "e" + 2)) + "e-" + 2
      )
    };

    this.props.addMaterial(newItem);
    console.log(newItem._id);
    this.setState({ _id: newItem._id });
    // Close modal
    document.getElementById("triggerButton").click();

    //Reload page
    window.location.reload();

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
          Add new Material
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
                    Add new Material
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
                  <label htmlFor="material-name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Material name"
                    name="name"
                    onChange={this.onChange}
                  />
                  <label htmlFor="material-quantity" className="col-form-label">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    inputmode="numeric"
                    className="form-control"
                    id="quantity"
                    placeholder="Quantity (ex: 1, 5.54, ...)"
                    name="quantity"
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
                  Add Material
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
  material: state.material
});
export default connect(
  mapStateToProps,
  { addMaterial }
)(MaterialModal);
