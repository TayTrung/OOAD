import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { showNoti } from "../../../actions/notificationActions";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from "axios";

class MemberEdit extends Component {
  state = {
    name: "",
    phone: "",
    point: 0,
    _id: "",
    msg: "",
    notiType: "",
  };

  createNotification = () => {
    const { notiType } = this.state;
    this.props.showNoti(notiType);
    this.setState({ notiType: '' });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/member/${id}`)
      .then(response => {
        console.log(response.data);
        if (response.data === null) this.props.history.push("/404");
        else
          this.setState({
            name: response.data.name,
            _id: response.data._id,
            phone: response.data.phone,
            point: response.data.point
          });
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  handleChange = e => {
    //this.setState({ [e.target.name]: e.target.value });
    const { name, value } = e.target;
    let msg = "";

    //Validation
    const isPassed = this.validatePhone(value);
    //const inputErrors = isPassed ? false : true;

    if (!isPassed && name === 'phone') {
      msg = "Phone can only contain numbers and spaces";
    }
    this.setState({ [name]: value, msg: msg });
  };

  validatePhone = phone => {
    return new RegExp(/^[0-9 ]*$/).test(phone);
  };

  handleSubmit = e => {
    const { _id, name, phone, point } = this.state;
    e.preventDefault();

    const newMember = {
      name,
      _id,
      phone,
      point
    };

    axios
      .put(`/api/member/${_id}`, newMember)

      .then(response => {
        if (response.status === 200) {
          this.setState({ notiType: 'success' });

          setTimeout(function () { //Start the timer
            window.location.replace("/member");
          }.bind(this), 500)

        }
        console.log(response.data);
      })
      .catch(error => {
        this.setState({ notiType: 'failure' });
        console.log(error.response);
      });

    //Quay về trang chính

  };

  handleCancel = e => {
    this.props.history.push("/member");
  };
  render() {
    const { name, phone, point, _id } = this.state;

    return (
      <Fragment>
        {this.state.notiType !== "" ? (
          this.createNotification()
        ) : null}
        <NotificationContainer />

        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Member
            {/* <small>Preview</small> */}
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="fake_url">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="fake_url">Member</a>
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
                  <h3 className="box-title">Horizontal Form</h3>
                </div>
                {/* /.box-header */}
                {/* form start */}
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                  {this.state.msg != '' ? (
                    <div className="alert alert-danger alert-dismissible">
                      {this.state.msg}
                    </div>
                  ) : null}
                  <div className="box-body">
                    <div className="form-group">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 control-label"
                      >
                        ID
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="_id"
                          type="text"
                          id="inputEmail3"
                          placeholder="Loading..."
                          className="form-control"
                          defaultValue={_id}
                          disabled={true}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 control-label"
                      >
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="inputName"
                          placeholder="Loaiding..."
                          defaultValue={name}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 control-label"
                      >
                        Phone
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="phone"
                          type="text"
                          className="form-control"
                          id="inputPhone"
                          placeholder="Loading..."
                          defaultValue={phone}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 control-label"
                      >
                        Point
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="point"
                          type="text"
                          className="form-control"
                          id="inputPoint"
                          placeholder="Loading..."
                          defaultValue={point}
                          onChange={this.handleChange}
                          disabled
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
                    <button type="submit" className="btn btn-info pull-right">
                      Save
                    </button>
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

});
export default connect(
  mapStateToProps, { showNoti }
)(MemberEdit);

