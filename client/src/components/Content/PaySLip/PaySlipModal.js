import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPaySlip } from "../../../actions/payslipActions";
import { showNoti } from "../../../actions/notificationActions";
import { getSearchMembers } from "../../../actions/memberActions";
import 'react-notifications/lib/notifications.css';
import Select from 'react-select';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const mongoose = require("mongoose");

class PaySlipModal extends Component {
  state = {
    _id: "",
    idMember: "",
    idSupplier: "",
    createddate: new Date(),
    totalAmt: 0,
    notiType: "",

    msg: "",
    listSelectMember: [],
    selectedMember: '',
  };

  componentDidMount() {
    this.props.getSearchMembers('');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (prevProps.payslip.payslips !== this.props.payslip.payslips) {
      if (this.props.isLoaded === false) {
        return;
      };

      if (this.props.payslip.type === 'DELETE_PAYSLIP' || this.props.payslip.type === 'GET_PAYSLIPS') {

        return;
      }

      if (this.props.payslip.response === 200) {
        this.setState({ notiType: 'success' });
      } else {
        this.setState({ notiType: 'failure' });
      }
    }
  }

  createNotification = () => {
    const { notiType } = this.state;
    this.props.showNoti(notiType);
    this.setState({ notiType: '' });
  };

  onChange = e => {
    //this.setState({ [e.target.name]: e.target.value });
    const { name, value } = e.target;
    let msg = "";

    //Validation
    const isPassed = this.validateTotalAmt(value);
    //const inputErrors = isPassed ? false : true;

    if (!isPassed && name === 'totalAmt') {
      msg = "Total Amount can only contain numbers";
    }
    this.setState({ [name]: value, msg: msg });
  };

  validateTotalAmt = totalAmt => {
    return new RegExp(/^[0-9]*$/).test(totalAmt);
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      _id: mongoose.Types.ObjectId(),
      idMember: this.state.selectedMember.value,
      idSupplier: this.state.idSupplier,
      createddate: new Date(),
      totalAmt: this.state.totalAmt
    };

    this.props.addPaySlip(newItem);
    // Close modal
    document.getElementById("triggerButton").click();
  };

  onChangeSelectedMember = (selectedMember) => {
    this.setState({ selectedMember: selectedMember });
    //this.setState({ invisibleInpMemVal: selectedMember.value });
  };

  onListMemberClick = (selectedMember) => {

    this.setState(state => {
      let listSelectMember = [...state.listSelectMember];
      this.props.member.members.map(el => {
        listSelectMember.push({ 'value': el._id, 'label': el.name + ' - ' + el.phone })
      });

      return {
        ...state.listSelectMember,
        listSelectMember
      }
    });

  };

  render() {
    const { notiType, msg, listSelectMember } = this.state;
    return (
      <Fragment>
        {notiType !== "" ? (
          this.createNotification()
        ) : null}
        <NotificationContainer />

        {/* Button trigger modal */}
        <button
          type="button"
          id="triggerButton"
          style={{ float: "right" }}
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add new payslip
        </button>
        {/* Modal */}
        <form onSubmit={this.onSubmit}>
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
                      Add new Pay slip
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
                  {msg != '' ? (
                    <div className="alert alert-danger alert-dismissible">
                      {msg}
                    </div>
                  ) : null}
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Member:
                    </label>
                    <Select
                      name='idUser'
                      id='idUser'
                      onMenuOpen={this.onListMemberClick}
                      onChange={this.onChangeSelectedMember}
                      isSearchable={true}
                      options={listSelectMember}>
                    </Select>
                    {/* <input
                      type="text"
                      className="form-control"
                      id="idmember"
                      placeholder="Add payslip"
                      name="idMember"
                      onChange={this.onChange}
                      required
                    /> */}
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Supplier:
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      id="idsupplier"
                      placeholder="Add supplier"
                      name="idSupplier"
                      onChange={this.onChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Total Amount:
                  </label>
                    <input
                      type="text"
                      className="form-control"
                      id="totalAmt"
                      placeholder="Add total amount"
                      name="totalAmt"
                      onChange={this.onChange}
                      required
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
                    type="submit"

                    className="btn btn-primary"
                  >
                    Add pay slip
                </button>
                </div>
              </div>
            </div>
          </div>
        </form>

      </Fragment>

    );
  }
}
PaySlipModal.propTypes = {
  getSearchMembers: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  payslip: state.payslip,
  isLoaded: state.member.isLoaded,
  member: state.member,
});
export default connect(
  mapStateToProps,
  { addPaySlip, showNoti, getSearchMembers }
)(PaySlipModal);
