import React, { Fragment, Component } from "react";
import axios from "axios";

class InvoiceEdit extends Component {
  state = {
    idMember: "",
    idUser: "",
    totalAmt: 0,
    createddate: new Date(),
    comments: "",
    _id: ""
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/invoice/${id}`)
      .then(response => {
        if (response.data === null) this.props.history.push("/404");
        else
          this.setState({
            _id: response.data._id,
            idMember: response.data.idMember,
            idUser: response.data.idUser,
            totalAmt: response.data.totalAmt,
            createddate: response.data.createddate,
            comments: response.data.comments
          });
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    const { _id, idMember, idUser, totalAmt, createddate, comments } = this.state;
    e.preventDefault();

    const newInvoice = {
      _id,
      idMember,
      idUser,
      totalAmt,
      createddate,
      comments
    };

    axios
      .put(`/api/invoice/${_id}`, newInvoice)

      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
    //Quay về trang chính
    this.props.history.push("/invoice");
  };

  handleCancel = e => {
    this.props.history.push("/invoice");
  };
  render() {
    const { _id, idMember, idUser, totalAmt, createddate, comments } = this.state;

    return (
      <Fragment>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Invoice
            {/* <small>Preview</small> */}
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="fake_url">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="fake_url">Invoice</a>
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
                          disabled
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 control-label"
                      >
                        Member
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="member"
                          type="text"
                          className="form-control"
                          id="inputMember"
                          placeholder="Loaiding..."
                          defaultValue={idMember}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 control-label"
                      >
                        User
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="user"
                          type="text"
                          className="form-control"
                          id="inputUser"
                          placeholder="Loading..."
                          defaultValue={idUser}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 control-label"
                      >
                        Total
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="totalamt"
                          type="text"
                          className="form-control"
                          id="inputTotalAmt"
                          placeholder="Loading..."
                          defaultValue={totalAmt}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 control-label"
                      >
                        Created Date
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="createddate"
                          type="text"
                          className="form-control"
                          id="inputCreateddate"
                          placeholder="Loading..."
                          defaultValue={createddate}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 control-label"
                      >
                        Comments
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="comments"
                          type="text"
                          className="form-control"
                          id="inputComments"
                          placeholder="Loading..."
                          defaultValue={comments}
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

export default InvoiceEdit;
