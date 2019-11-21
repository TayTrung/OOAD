import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteRole } from "../../../actions/roleActions";
import { pushHistory } from "../../../actions/historyActions";
class RoleRow extends Component {
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
    this.props.pushHistory(`/role/edit/${id}`);
  };
  handleDelete = id => {
    // console.log(id);

    this.props.deleteRole(id);
  };
  render() {
    const { role, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{role.name}</td>
        <td>{this.convertDate(role.createAt)}</td>
        <td>Uknown</td>
        <td>
          <div className="btn-group">
            <button
              onClick={() => this.handleEdit(role._id)}
              type="button"
              className="btn btn-success"
            >
              Edit
            </button>

            <button
              onClick={() => this.handleDelete(role._id)}
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
  { deleteRole, pushHistory }
)(RoleRow);
