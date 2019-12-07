import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCategory } from "../../../actions/categoryActions";
import { pushHistory } from "../../../actions/historyActions";
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
    this.props.pushHistory(`/category/edit/${id}`);
  };
  handleDelete = id => {
    // console.log(id);
    // this.setState(prevState => {
    //   let newState = { ...prevState }
    //   let { categories } = newState

    //   categories = categories.filter(c => c.id !== id)

    //   return {
    //     ...newState,
    //     categories
    //   }
    // })
    this.props.resetState();
    this.props.deleteCategory(id);
  };

  render() {
    const { category, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{category.name}</td>
        <td>{this.convertDate(category.createAt)}</td>
        <td>Uknown</td>
        <td>
          <div className="btn-group">
            <button
              onClick={() => this.handleEdit(category._id)}
              type="button"
              className="btn btn-success"
            >
              Edit
            </button>

            <button
              onClick={() => this.handleDelete(category._id)}
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

export default connect(null, { deleteCategory, pushHistory })(CategoryRow);
