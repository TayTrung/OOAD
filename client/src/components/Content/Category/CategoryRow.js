import React, { Component } from "react";
import axios from "axios";

class CategoryRow extends Component {
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
    this.props.history.push(`/category/edit/${id}`);
  };
  handleDelete = id => {
    console.log(id);

    axios
      .delete(`/api/category/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  render() {
    const { Category } = this.props;

    return (
      <tr>
        <td>{Category._id}</td>
        <td>{Category.name}</td>
        <td>{this.convertDate(Category.createAt)}</td>
        <td>
          <div className="btn-group">
            <button
              onClick={() => this.handleEdit(Category._id)}
              type="button"
              className="btn btn-success"
            >
              Edit
            </button>

            <button
              onClick={() => this.handleDelete(Category._id)}
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
export default CategoryRow;
