import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { getInvoices, addInvoice } from "../../../actions/invoiceActions";
import {
  getProducts,
  deleteProduct
} from "../../../actions/productActions";
import { getMembers } from "../../../actions/memberActions";
import mobiscroll from "@mobiscroll/react";
import Select from 'react-select';
import "./node_modules/@mobiscroll/react/dist/css/mobiscroll.min.css";

class OrderScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    listSelectMember: [],
    listSelectUser: [],
    selectedMember: '',
    selectedUser: '',
    listOrder: [],
    idMember: '',
    idUser: '',
    comments: '',
    total: 0,

    sort: [{ value: "5" }, { value: "10" }, { value: "20" }],
    select: "5",
    currentPage: 1,
    pages: [],
    totalDocuments: 0,
    query: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeSelectedMember = (selectedMember) => {
    this.setState({ selectedMember: selectedMember });
  };

  onListMemberClick = (selectedMember) => {

    if (this.props.member.members.length !== this.state.listSelectMember.length)
      this.setState(state => {
        let listSelectMember = [...state.listSelectMember]
        this.props.member.members.map(el => {
          listSelectMember.push({ 'value': el._id, 'label': el.name + ' - ' + el.phone })
        });
        return {
          ...state.listSelectMember,
          listSelectMember
        }
      });

  };

  handleAddToOrder = productDet => {
    var exit = 0;
    this.setState(state => {
      let listOrder = [...state.listOrder];

      listOrder.map(function (el, index) {
        if (productDet._id === el._id) {
          const tempObj = { _id: el._id, name: el.name, price: el.price, orderQty: el.orderQty + 1 }
          listOrder.splice(index, 1);
          listOrder = [...listOrder, tempObj];
          exit = 1;
          return;
        }
      });

      if (exit === 0) {
        const orderDetail = { _id: productDet._id, name: productDet.name, price: productDet.price, orderQty: 1 };
        listOrder = [...state.listOrder, orderDetail]

        var totalTmp = state.total + productDet.price * orderDetail.orderQty;
        this.setState({ total: totalTmp })
      }

      return {
        ...state.listOrder, //cai dau`
        listOrder //neu ko co cai dau thi lay cai nay
      }
    });
  };

  removeItem(index) {

    this.setState(state => {

      //set total invoice
      var totalTmp = state.total - this.state.listOrder[index].price * this.state.listOrder[index].orderQty;
      this.setState({ total: totalTmp })

      let listOrder = [...state.listOrder]
      listOrder.splice(index, 1);
      return {
        ...state.listOrder, //cai dau`
        listOrder //neu ko co cai dau thi lay cai nay
      }
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const newInvoice = {
      // idMember: this.state.listSelectMember.value,
      // idUser: 'this.state.listSelectUser.value',
      // totalAmt: this.state.total,
      // createddate: new Date(),
      // comments: this.state.comments,
      idMember: '',
      idUser: '',
      totalAmt: 0,
      createddate: new Date(),
      comments: 'this.state.comments',
    };

    this.props.addInvoice(newInvoice);

  };
  convertDate = date => {
    const newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let dt = newDate.getDate();

    dt = dt < 10 ? `0${dt}` : dt;
    month = month < 10 ? `0${month}` : month

    return year + "-" + month + "-" + dt;
  };

  componentDidMount() {
    const { select, currentPage, query } = this.state;
    this.getTotalDocuments();

    this.getPages();

    this.props.getProducts(select, currentPage, query);
    this.props.getMembers(select, currentPage, query);
    //this.props.getInvoices(select, currentPage, query);
  }
  getTotalDocuments = () => {
    const { query } = this.state;
    console.log(query);
    let newQuery = "";
    if (query === "") newQuery = "undefined";
    else newQuery = query;

    axios
      .get(`/api/product/count/${newQuery}`)
      .then(response => {
        this.setState({ totalDocuments: response.data });
        console.log(response.data);
      })
      .catch(er => {
        console.log(er.response);
      });
  };

  getPages = () => {
    const { select, query } = this.state;
    console.log(query);
    let newQuery = "";
    if (query === "") newQuery = "undefined";
    else newQuery = query;

    axios
      .get(`/api/product/count/${newQuery}`)
      .then(response => {
        let pages = Math.floor(response.data / select);
        let remainder = response.data % select;
        let newArray = [];
        if (remainder !== 0) pages += 1;

        for (let i = 0; i < pages; i++) {
          newArray.push({ pageNumber: i + 1 });
        }

        this.setState({ pages: newArray });
      })
      .catch(er => {
        console.log(er.response);
      });
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      const { select, currentPage, query } = this.state;
      this.props.getProducts(select, currentPage, query);
      this.getPages();
      this.getTotalDocuments();
    });
  };

  handleChoosePage = e => {
    this.setState({ currentPage: e }, () => {
      const { select, currentPage, query } = this.state;
      this.props.getProducts(select, currentPage, query);
    });
  };

  renderPageButtons = () => {
    const { pages, currentPage } = this.state;

    return pages.map(eachButton => (
      <li
        key={eachButton.pageNumber}
        className={
          currentPage === eachButton.pageNumber
            ? "paginae_button active"
            : "paginate_button "
        }
      >
        <a
          name="currentPage"
          onClick={() => this.handleChoosePage(eachButton.pageNumber)}
          aria-controls="example1"
          data-dt-idx={eachButton.pageNumber}
          tabIndex={0}
        >
          {eachButton.pageNumber}
        </a>
      </li>
    ));
  };

  stages = {
    left: [{
      percent: 25,
      icon: 'link',
      text: 'Get link',
      action: (event, inst) => {
        this.toast('Link copied');
      }
    }, {
      percent: 50,
      icon: 'download',
      text: 'Download',
      action: (event, inst) => {
        this.toast('Downloaded');
      }
    }],
    right: [{
      percent: -50,
      icon: 'remove',
      text: 'Delete',
      confirm: true,
      action: (event, inst) => {
        // inst.remove(event.target, null, () => {
        // });
        this.removeItem(event.index);
        return true;
      }
    }]
  };

  render() {
    const { products, invoices, loading } = this.props.product;
    const { members } = this.props.member;
    const { select, totalDocuments, pages, listOrder, listSelectMember, selectedMember, total } = this.state;

    return (
      <React.Fragment>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Order
            {/* <small>Preview</small> */}
          </h1>
          <ol className="breadcrumb">
            <li>
              <a href="fake_url">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="fake_url">Order</a>
            </li>
          </ol>
        </section>
        {/* Main content */}

        <section className="content">

          <div className="row">
            <div className="col-md-3">

              {/* Profile Image */}
              <div className="box box-primary">
                <div className="box-body box-profile">

                  <h3 className="profile-username text-center">Order</h3>

                  <p className="text-muted text-center">{this.convertDate(new Date())}</p>

                  <ul className="list-group list-group-unbordered">
                    <mobiscroll.Listview
                      theme="ios"
                      itemType={ListItem}
                      data={this.state.listOrder}
                      enhance={true}
                      stages={this.stages}
                    />
                    <li className="list-group-item">
                      <b>Total </b><a className="pull-right">{total}</a>
                    </li>
                  </ul>

                  <a href="#" className="btn btn-primary btn-block" onClick={this.onSubmit}><b>Order</b></a>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}

              {/* About Me Box */}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Note</h3>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <strong><i className="fa fa-book margin-r-5"></i> Staff name</strong>
                  <Select
                    name='idUser'
                    id='idUser'
                    onMenuOpen={this.onListMemberClick}
                    onChange={this.onChange1}
                    isSearchable={true}
                    options={listSelectMember}>
                  </Select>
                  <br />
                  <strong><i className="fa fa-map-marker margin-r-5"></i> Customer phone</strong>

                  <Select
                    name='idMember'
                    id='idMember'
                    onMenuOpen={this.onListMemberClick}
                    onChange={this.onChangeSelectedMember}
                    isSearchable={true}
                    options={listSelectMember}>
                  </Select>
                  <br />

                  <strong><i className="fa fa-map-marker margin-r-5"></i> Notes</strong>
                  <input type="text" className="form-control" id="comments" name='comments' placeholder="Enter notes">
                  </input>

                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
            <div className="col-md-9">
              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs">
                  <li className="active"><a href="#activity" data-toggle="tab">Drink</a></li>
                  <li><a href="#timeline" data-toggle="tab">Food</a></li>
                  <li><a href="#settings" data-toggle="tab">Customers</a></li>
                </ul>
                <div className="tab-content">
                  <div className="active tab-pane" id="activity">
                    <div className="box box-primary">
                      {products.map((eachProduct, index) => (
                        <div key={eachProduct._id} style={menuStyle} className="box-body box-profile">
                          <img className="profile-user-img img-responsive img-circle" src={eachProduct.linkPic} alt="User profile picture" />
                          <h3 className="profile-username text-center">{eachProduct.name}</h3>
                          <p className="text-muted text-center">{eachProduct.price} VND</p>

                          <a href="#" className="btn btn-primary btn-block"
                            onClick={() => this.handleAddToOrder(eachProduct)}>
                            <b>
                              Add to order
                              </b></a>
                        </div>
                      ))}

                    </div>
                  </div>
                  {/* /.tab-pane */}

                  <div className="tab-pane" id="timeline">
                    <p>ttt</p>
                  </div>
                  {/* /.tab-pane */}

                  <div className="tab-pane" id="settings">
                    <p>hh</p>
                  </div>
                  {/* /.tab-pane */}
                </div>
              </div>
              {/* /.tab-content */}
            </div>
            {/* /.nav-tabs-custom */}
          </div>

        </section >

        {/* /.content */}
      </React.Fragment >
    );
  }
}

class ListItem extends React.Component {
  render() {
    return <li className="list-group-item">
      <b>{this.props.item.name} </b> x{this.props.item.orderQty} <a className="pull-right">{this.props.item.price}</a>
    </li>;
  }
}

OrderScreen.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  getMembers: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired,
  addInvoice: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  product: state.product,
  member: state.member,
  invoice: state.invoice,
});

export default connect(
  mapStateToProps,
  { getProducts, deleteProduct, getMembers, addInvoice, getInvoices }
)(OrderScreen);

const menuStyle = {
  display: 'inline-block',
};