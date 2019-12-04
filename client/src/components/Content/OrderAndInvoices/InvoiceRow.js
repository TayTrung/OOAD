import React, { Component } from "react";

import { connect } from "react-redux";
import { deleteInvoice } from "../../../actions/invoiceActions";

const mapStateToProps = state => ({
  invoice: state.invoice
});

class InvoiceRow extends Component {

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
    this.props.history.push(`/invoice/edit/${id}`);
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
    this.props.deleteInvoice(id);
  };

  render() {
    const { Invoice, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{Invoice.idUser}</td>
        <td>{Invoice.idMember}</td>
        <td>{Invoice.totalAmt}</td>
        <td>{this.convertDate(Invoice.createddate)}</td>
        <td>{Invoice.comments}</td>
        <td>
          <div className="btn-group">
            <button
              onClick={() => this.handleEdit(Invoice._id)}
              type="button"
              className="btn btn-success"
            >
              Edit
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default connect(
  mapStateToProps,
  { deleteInvoice }
)(InvoiceRow);
