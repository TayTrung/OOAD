import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../../actions/userActions";
import { pushHistory } from "../../../actions/historyActions";
class UserRow extends Component {
  handleEdit = id => {
    this.props.pushHistory(`/user/edit/${id}`);
  };
  handleDelete = id => {
    // console.log(id);

    this.props.deleteUser(id);
  };
  render() {
    const { user, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{user.idRole}</td>
        <td>{user.username}</td>
        <td>{user.fullName}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.address}</td>
        <td>
          <div className="btn-group">
            <button
              onClick={() => this.handleEdit(user._id)}
              type="button"
              className="btn btn-success"
            >
              Edit
            </button>

            <button
              onClick={() => this.handleDelete(user._id)}
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
  { deleteUser, pushHistory }
)(UserRow);
