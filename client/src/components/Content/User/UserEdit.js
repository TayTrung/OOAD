import React, { Fragment, Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { deleteUser } from "../../../actions/userActions";
import { pushHistory } from "../../../actions/historyActions";

class UserEdit extends Component {
  state = {
    idRole: "",
    username: "",
    fullName: "",
    phoneNumber: "",
    address: "",
    _id: "",
    curPassword: "",
    newPassword: "",
    reNewPassword: "",
    changingPassword: false,
    inputErrors: false,
    curPassError: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    axios
      .get(`/api/user/${id}`)
      .then(response => {
        if (response.data === null) this.props.pushHistory("/404");
        else {
          const {
            idRole,
            username,
            fullName,
            phoneNumber,
            address,
            _id
          } = response.data;
          this.setState({
            idRole,
            username,
            fullName,
            phoneNumber,
            address,
            _id
          });
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  validatePassword(password) {
    return new RegExp(/^[a-zA-Z0-9]+$/).test(password);
  }

  validateInputPassword() {
    const { newPassword, reNewPassword } = this.state;
    const inputErrors = newPassword === reNewPassword ? false : true;
    this.setState({ inputErrors }, () => this.render());
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, inputErrors: false }, () =>
      this.validateInputPassword()
    );
  };

  handleSubmit = e => {
    const {
      idRole,
      username,
      fullName,
      phoneNumber,
      address,
      changingPassword,
      _id
    } = this.state;
    e.preventDefault();

    var newUser;

    if (changingPassword) {
      const password = this.state.newPassword;
      newUser = {
        idRole,
        username,
        fullName,
        phoneNumber,
        address,
        password,
        _id
      };
      console.log("Changed pass");
    } else {
      newUser = {
        idRole,
        username,
        fullName,
        phoneNumber,
        address,
        _id
      };
      console.log("Not changed pass");
    }
    axios
      .put(`/api/user/${_id}`, newUser)

      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
    //Quay về trang chính
    this.props.history.push("/user");
  };

  handleCancel = e => {
    this.props.history.push("/user");
  };

  handleChangePass = e => {
    const { username, curPassword, _id } = this.state;
    e.preventDefault();
    const userChangePass = {
      username,
      curPassword,
      _id
    };
    console.log("TCL: UserEdit -> userCurPass", userChangePass);

    axios
      .post(`/api/user/cp/${_id}`, userChangePass)
      .then(response => {
        console.log(response);
        if (response.status === 200) this.setState({ changingPassword: true });
        else this.setState({ curPassError: true, inputErrors: true });
      })
      .catch(error => {
        console.log(error.response);
      });

    //close Modal
    //document.getElementById("triggerButton").click();
  };

  render() {
    const {
      idRole,
      username,
      fullName,
      phoneNumber,
      address,
      _id,
      newPassword
    } = this.state;

    console.log("changingPass " + this.state.changingPassword);

    return (
      <Fragment>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            User
            {/* <small>Preview</small> */}
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="/">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="/user">User</a>
            </li>
            <li>
              <a href="fake_url">Edit</a>
            </li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">User Edit Form</h3>
                </div>
                {/* /.box-header */}
                {/* form start */}
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                  <div className="box-body">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">ID</label>
                      <div className="col-sm-10">
                        <input
                          name="_id"
                          type="text"
                          id="userID"
                          placeholder="Loading..."
                          className="form-control"
                          defaultValue={_id}
                          disabled
                          //onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">ID Role</label>
                      <div className="col-sm-10">
                        <input
                          name="idRole"
                          type="text"
                          className="form-control"
                          id="userIdRole"
                          placeholder="Loading..."
                          value={idRole}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Username</label>
                      <div className="col-sm-10">
                        <input
                          name="username"
                          type="text"
                          className="form-control"
                          id="userUsername"
                          placeholder="Loading..."
                          value={username}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Full Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="fullName"
                          type="text"
                          className="form-control"
                          id="userFullName"
                          placeholder="Loading..."
                          value={fullName}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">
                        Phone Number
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="phoneNumber"
                          type="text"
                          className="form-control"
                          id="userPhoneNumber"
                          placeholder="Loading..."
                          value={phoneNumber}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Address</label>
                      <div className="col-sm-10">
                        <input
                          name="address"
                          type="text"
                          className="form-control"
                          id="userAddress"
                          placeholder="Loading..."
                          value={address}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button
                      type="button"
                      onClick={this.handleCancel}
                      className="btn btn-default"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary pull-right"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      id="triggerChangePassButton"
                      style={{ float: "right" }}
                      className="btn btn-info"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      onClick={this.handleOnClick}
                    >
                      Change Password
                    </button>

                    {/* Dialog change Password */}
                    <div
                      className="modal fade"
                      id="exampleModalCenter"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <span>
                              <h3
                                className="modal-title"
                                id="exampleModalLongTitle"
                              >
                                Change Password
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
                            <div className="form-group">
                              <label className="col-form-label">ID:</label>
                              <input
                                name="_id"
                                type="text"
                                id="userIDModal"
                                placeholder="Loading..."
                                className="form-control"
                                defaultValue={_id}
                                disabled
                              />
                              <label className="col-form-label">
                                Username:
                              </label>
                              <input
                                name="username"
                                type="text"
                                id="userUsernameModal"
                                placeholder="Loading..."
                                className="form-control"
                                value={username}
                                disabled
                              />
                              <label className="col-form-label">
                                Current Password:
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="userCurPassword"
                                //placeholder="Loading"
                                name="curPassword"
                                onChange={this.handleChange}
                              />
                              {this.state.curPassError && (
                                <p className="text-red">
                                  Wrong current password
                                </p>
                              )}
                              <label className="col-form-label">
                                New Password:
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="userNewPassword"
                                value={newPassword}
                                name="newPassword"
                                onChange={this.handleChange}
                              />
                              <label className="col-form-label">
                                Re-enter new Password:
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="userReNewPassword"
                                //placeholder="Loading"
                                name="reNewPassword"
                                onChange={this.handleChange}
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
                              type="button"
                              onClick={this.handleChangePass}
                              className="btn btn-primary"
                              disabled={this.state.inputErrors}
                              //data-dismiss="modal"
                            >
                              Change
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.box-footer */}
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  history: state.history.history
});
export default connect(mapStateToProps, { deleteUser, pushHistory })(UserEdit);
