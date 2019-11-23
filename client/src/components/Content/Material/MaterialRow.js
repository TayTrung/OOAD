import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMaterial } from "../../../actions/materialActions";
import { pushHistory } from "../../../actions/historyActions";
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
    this.props.pushHistory(`/material/edit/${id}`);
  };
  handleDelete = id => {
    // console.log(id);
    this.props.deleteMaterial(id);
  };
  render() {
    const { material, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{material.name}</td>
        <td>{this.convertDate(material.createAt)}</td>
        <td>{material.quantity}</td>
        <td>
          <div className="btn-group">
            <button
              onClick={() => this.handleEdit(material._id)}
              type="button"
              className="btn btn-success"
            >
              Edit
            </button>

            <button
              onClick={() => this.handleDelete(material._id)}
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

export default connect(
  null,
  { deleteMaterial, pushHistory }
)(MaterialRow);
