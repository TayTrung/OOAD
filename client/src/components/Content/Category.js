import React, { Component } from "react";
import axios from "axios";
export default class Category extends Component {
  state = {
    categoryName: ""
  };
  handleSubmit = e => {
    // Preven default dùng để khi bấm vào button nó k refresh lại page
    e.preventDefault();

    const newCategory = {
      name: this.state.categoryName
    };
    console.log(newCategory);

    // axios({
    //   method: "POST",
    //   responseType: "json",
    //   url: `/category/add`,
    //   data: newCategory
    // });

    axios
      .post("/api/category/add", newCategory)

      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
    // axios
    // .get('/api/items')
    // .then(res =>
    //   dispatch({
    //     type: GET_ITEMS,
    //     payload: res.data
    //   })
    // )
    // .catch(err =>
    //   dispatch(returnErrors(err.response.data, err.response.status))
    // );
  };
  handleNameChange = e => {
    console.log(e.target.value);
    this.setState({ categoryName: e.target.value });
  };
  render() {
    return (
      <div>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1>
              Add new coffe category
              {/* <small>Preview</small> */}
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="fake_url">
                  <i className="fa fa-dashboard" /> Home
                </a>
              </li>
              <li>
                <a href="fake_url">Category</a>
              </li>
              <li className="active">Add</li>
            </ol>
          </section>
          {/* Main content */}
          <section className="content">
            <div className="row">
              {/* left column */}
              <div className="col-md-6">
                {/* general form elements */}
                <div className="box box-primary">
                  <div className="box-header with-border">
                    <h3 className="box-title">Add new coffe category</h3>
                  </div>
                  {/* /.box-header */}
                  {/* form start */}
                  <form onSubmit={this.handleSubmit}>
                    <div className="box-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputName"
                          placeholder="Enter name"
                          value={this.state.categoryName}
                          onChange={this.handleNameChange}
                        />
                      </div>
                    </div>
                    {/* /.box-body */}
                    <div className="box-footer">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                {/* /.box */}
              </div>
              {/*/.col (left) */}
              {/* right column */}
              {/*/.col (right) */}
            </div>
            {/* /.row */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
      </div>
    );
  }
}
