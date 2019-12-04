import React, { Fragment, Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { pushHistory } from "../../../actions/historyActions";
import { updateRole } from "../../../actions/roleActions";

class RoleEdit extends Component {
  state = {
    name: "",
    _id: "",
    memberManagement: false,
    productManagement: false,
    categoryManagement: false,
    customerManagement: false,
    invoiceManagement: false,
    supplierManagement: false,
    billManagement: false,
    materialManagement: false,
    materialReceiptNoteManagement: false,
    roleManagement: false
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/role/${id}`, this.tokenConfig(this.props.auth.token))
      .then(response => {
        if (response.data === null) this.props.pushHistory("/404");
        else
          this.setState({
            name: response.data.name,
            _id: response.data._id,
            memberManagement: response.data.memberManagement,
            productManagement: response.data.productManagement,
            categoryManagement: response.data.categoryManagement,
            customerManagement: response.data.customerManagement,
            invoiceManagement: response.data.invoiceManagement,
            supplierManagement: response.data.supplierManagement,
            billManagement: response.data.billManagement,
            materialManagement: response.data.materialManagement,
            materialReceiptNoteManagement:
              response.data.materialReceiptNoteManagement,
            roleManagement: response.data.roleManagement
          });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  tokenConfig = token => {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    //Header
    if (token) {
      config.headers["x-auth-token"] = token;
    }

    return config;
  };
  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    const {
      _id,
      name,
      memberManagement,
      productManagement,
      categoryManagement,
      customerManagement,
      invoiceManagement,
      supplierManagement,
      billManagement,
      materialManagement,
      materialReceiptNoteManagement,
      roleManagement
    } = this.state;
    e.preventDefault();

    const newRole = {
      name,
      _id,
      memberManagement,
      productManagement,
      categoryManagement,
      customerManagement,
      invoiceManagement,
      supplierManagement,
      billManagement,
      materialManagement,
      materialReceiptNoteManagement,
      roleManagement
    };
    this.props.updateRole(newRole);

    //Quay về trang chính
    this.props.history.push("/role");
  };

  handleCancel = e => {
    this.props.history.push("/role");
  };

  renderCheckboxes = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <label>
              <input
                name="memberManagement"
                type="checkbox"
                checked={this.state.memberManagement}
                onChange={this.handleChange}
              />
              Member management
            </label>
          </div>

          <div>
            <label>
              <input
                name="productManagement"
                type="checkbox"
                checked={this.state.productManagement}
                onChange={this.handleChange}
              />
              Product management
            </label>
          </div>

          <div>
            <label>
              <input
                name="categoryManagement"
                type="checkbox"
                checked={this.state.categoryManagement}
                onChange={this.handleChange}
              />
              Category management
            </label>
          </div>

          <div>
            <label>
              <input
                name="customerManagement"
                type="checkbox"
                checked={this.state.customerManagement}
                onChange={this.handleChange}
              />
              Customer management
            </label>
          </div>
          <div>
            <label>
              <input
                name="invoiceManagement"
                type="checkbox"
                checked={this.state.invoiceManagement}
                onChange={this.handleChange}
              />
              Invoice management
            </label>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <label>
              <input
                name="supplierManagement"
                type="checkbox"
                checked={this.state.supplierManagement}
                onChange={this.handleChange}
              />
              Supplier management
            </label>
          </div>
          <div>
            <label>
              <input
                name="billManagement"
                type="checkbox"
                checked={this.state.billManagement}
                onChange={this.handleChange}
              />
              Bill management
            </label>
          </div>
          <div>
            <label>
              <input
                name="materialManagement"
                type="checkbox"
                checked={this.state.materialManagement}
                onChange={this.handleChange}
              />
              Material management
            </label>
          </div>

          <div>
            <label>
              <input
                name="materialReceiptNoteManagement"
                type="checkbox"
                checked={this.state.materialReceiptNoteManagement}
                onChange={this.handleChange}
              />
              Material receipt note management
            </label>
          </div>
          <div>
            <label>
              <input
                name="roleManagement"
                type="checkbox"
                checked={this.state.roleManagement}
                onChange={this.handleChange}
              />
              Role management
            </label>
          </div>
        </div>
      </div>
    );
  };
  render() {
    const { _id, name } = this.state;

    return (
      <Fragment>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Role
            {/* <small>Preview</small> */}
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="fake_url">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="fake_url">Role</a>
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
                        ID:
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="_id"
                          type="text"
                          id="id"
                          placeholder="Loading..."
                          className="form-control"
                          value={_id}
                          disabled
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 control-label"
                      >
                        Name:
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Role name"
                          name="name"
                          value={name}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    {this.renderCheckboxes()}
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
  history: state.history.history,
  auth: state.auth
});
export default connect(mapStateToProps, { pushHistory, updateRole })(RoleEdit);
