import React, { Component } from "react";

import { connect } from "react-redux";
import { deleteCategory } from "../../../actions/categoryActions";

const mapStateToProps = state => ({
  category: state.category
});

class CategoryRow extends Component {

  convertDate = date => {
    const newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let dt = newDate.getDate();

    dt = dt < 10 ? `0${dt}` : dt;

    month = month < 10 ? `0${month}` : month;
    // if (month < 10) {
    //   month = "0" + month;
    // }

    return year + "-" + month + "-" + dt;
  };
  handleEdit = id => {
    this.props.history.push(`/payslip/edit/${id}`);
  };
  handleDelete = id => {
    this.props.deleteCategory(id);
  };

  render() {
    const { Category, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{Category.name}</td>
        <td>{this.convertDate(Category.createAt)}</td>
        <td>Uknown</td>
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

export default connect(
  mapStateToProps,
  { deleteCategory }
)(CategoryRow);
