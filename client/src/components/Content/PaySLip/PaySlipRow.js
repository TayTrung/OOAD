import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePaySlip } from "../../../actions/payslipActions";

const mapStateToProps = state => ({
  payslip: state.payslip
});

class PaySlipRow extends Component {

  convertDate = date => {
    const newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let dt = newDate.getDate();

    dt = dt < 10 ? `0${dt}` : dt;

    month = month < 10 ? `0${month}` : month;

    return year + "-" + month + "-" + dt;
  };
  handleEdit = id => {
    this.props.history.push(`/payslip/edit/${id}`);
  };
  handleDelete = id => {
    this.props.deletePaySlip(id);
  };

  render() {
    const { PaySlip, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{PaySlip.idMember}</td>
        <td>{PaySlip.idSupplier}</td>
        <td>{this.convertDate(PaySlip.createddate)}</td>
        <td>{PaySlip.totalAmt}</td>
        <td>
          <div className="btn-group">
            <button
              onClick={() => this.handleEdit(PaySlip._id)}
              type="button"
              className="btn btn-success"
            >
              Edit
            </button>

            <button
              onClick={() => this.handleDelete(PaySlip._id)}
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
  { deletePaySlip }
)(PaySlipRow);
