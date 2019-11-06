import React, { Component } from "react";

import { connect } from "react-redux";
import { deleteMaterial } from "../../../actions/materialActions";

class MaterialRow extends Component {
  convertDate = date => {
    const newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let dt = newDate.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return year + "-" + month + "-" + dt;
  };
  handleEdit = id => {
    this.props.history.push(`/material/edit/${id}`);
  };
  handleDelete = id => {
    this.props.deleteMaterial(id);
  };
  render() {
    const { Material, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{Material.name}</td>
        <td>{this.convertDate(Material.createAt)}</td>
        <td>{Material.quantity}</td>
        <td>
          <div className="btn-group">
            <button
              onClick={() => this.handleEdit(Material._id)}
              type="button"
              className="btn btn-success"
            >
              Edit
            </button>

            <button
              onClick={() => this.handleDelete(Material._id)}
              type="button"
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  material: state.material
});
export default connect(
  mapStateToProps,
  { deleteMaterial }
)(MaterialRow);
