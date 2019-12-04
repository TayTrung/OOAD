import React, { Component, Fragment } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div>
          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1>
              Dashboard
              <small>Control panel</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="xd">
                  <i className="fa fa-dashboard" /> Home
                </a>
              </li>
              <li className="active">Dashboard</li>
            </ol>
          </section>
          {/* Main content */}
          <section className="content">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-aqua">
                  <div className="inner">
                    <h3>150</h3>
                    <p>New Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <a href="xd" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-green">
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>
                    <p>Bounce Rate</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <a href="xd" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-yellow">
                  <div className="inner">
                    <h3>44</h3>
                    <p>User Registrations</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  <a href="xd" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-red">
                  <div className="inner">
                    <h3>65</h3>
                    <p>Unique Visitors</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                  <a href="xd" className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            <div className="row">
              {/* Left col */}
              <section className="col-lg-7 connectedSortable ui-sortable">
                {/* Custom tabs (Charts with tabs)*/}
                <div className="nav-tabs-custom" style={{ cursor: "move" }}>
                  {/* Tabs within a box */}
                  <ul className="nav nav-tabs pull-right ui-sortable-handle">
                    <li className="active">
                      <a href="#revenue-chart" data-toggle="tab">
                        Area
                      </a>
                    </li>
                    <li>
                      <a href="#sales-chart" data-toggle="tab">
                        Donut
                      </a>
                    </li>
                    <li className="pull-left header">
                      <i className="fa fa-inbox" /> Sales
                    </li>
                  </ul>
                  <div className="tab-content no-padding">
                    {/* Morris chart - Sales */}
                    <div
                      className="chart tab-pane active"
                      id="revenue-chart"
                      style={{
                        position: "relative",
                        height: 300,
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                      }}
                    >
                      <svg
                        height={300}
                        version="1.1"
                        width="594.49"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                          overflow: "hidden",
                          position: "relative",
                          top: "-0.666667px"
                        }}
                      >
                        <desc
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        >
                          Created with Raphaël 2.3.0
                        </desc>
                        <defs
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <text
                          x="49.21875"
                          y="261.65625"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: 12,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            dy={4}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            0
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#aaaaaa"
                          d="M61.71875,261.65625H569.49"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <text
                          x="49.21875"
                          y="202.4921875"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: 12,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            dy={4}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            7,500
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#aaaaaa"
                          d="M61.71875,202.4921875H569.49"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <text
                          x="49.21875"
                          y="143.328125"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: 12,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            dy={4}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            15,000
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#aaaaaa"
                          d="M61.71875,143.328125H569.49"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <text
                          x="49.21875"
                          y="84.1640625"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: 12,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            dy={4}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            22,500
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#aaaaaa"
                          d="M61.71875,84.1640625H569.49"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <text
                          x="49.21875"
                          y={25}
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: 12,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            dy={4}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            30,000
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#aaaaaa"
                          d="M61.71875,25H569.49"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <text
                          x="476.32662363304985"
                          y="274.15625"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: 12,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,6.6719)"
                        >
                          <tspan
                            dy={4}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            2013
                          </tspan>
                        </text>
                        <text
                          x="250.51340674362092"
                          y="274.15625"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: 12,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,6.6719)"
                        >
                          <tspan
                            dy={4}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            2012
                          </tspan>
                        </text>
                        <path
                          fill="#74a5c2"
                          stroke="none"
                          d="M61.71875,219.59454583333334C75.90919805589307,220.1073010416667,104.29009416767923,223.172985546875,118.4805422235723,221.64556666666667C132.67099027946537,220.11814778645834,161.05188639125151,209.64761207308743,175.2423344471446,207.37519479166667C189.27853850243014,205.12747769808743,217.3509466130012,205.38235195312498,231.38715066828675,203.56502916666665C245.4233547235723,201.7477063802083,273.49576283414336,195.38539815716075,287.53196688942893,192.8366125C301.722414945322,190.2598182092441,330.10331105710816,182.95522799479167,344.2937591130012,183.062709375C358.4842071688943,183.17019075520832,386.86510328068044,204.6788222791439,401.0555513365735,193.69646354166667C415.09175539185907,182.83347826872722,443.16416350243014,102.15791320787292,457.2003675577157,95.68133333333333C471.0823276123937,89.27592466620625,498.84624772174976,135.44428611778844,512.7282077764278,142.16850937499999C526.9186558323208,149.0421598157051,555.299551944107,148.0967484375,569.49,150.072828125L569.49,261.65625L61.71875,261.65625Z"
                          fillOpacity={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            fillOpacity: 1
                          }}
                        />
                        <path
                          fill="none"
                          stroke="#3c8dbc"
                          d="M61.71875,219.59454583333334C75.90919805589307,220.1073010416667,104.29009416767923,223.172985546875,118.4805422235723,221.64556666666667C132.67099027946537,220.11814778645834,161.05188639125151,209.64761207308743,175.2423344471446,207.37519479166667C189.27853850243014,205.12747769808743,217.3509466130012,205.38235195312498,231.38715066828675,203.56502916666665C245.4233547235723,201.7477063802083,273.49576283414336,195.38539815716075,287.53196688942893,192.8366125C301.722414945322,190.2598182092441,330.10331105710816,182.95522799479167,344.2937591130012,183.062709375C358.4842071688943,183.17019075520832,386.86510328068044,204.6788222791439,401.0555513365735,193.69646354166667C415.09175539185907,182.83347826872722,443.16416350243014,102.15791320787292,457.2003675577157,95.68133333333333C471.0823276123937,89.27592466620625,498.84624772174976,135.44428611778844,512.7282077764278,142.16850937499999C526.9186558323208,149.0421598157051,555.299551944107,148.0967484375,569.49,150.072828125"
                          strokeWidth={3}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="61.71875"
                          cy="219.59454583333334"
                          r={4}
                          fill="#3c8dbc"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="118.4805422235723"
                          cy="221.64556666666667"
                          r={4}
                          fill="#3c8dbc"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="175.2423344471446"
                          cy="207.37519479166667"
                          r={4}
                          fill="#3c8dbc"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="231.38715066828675"
                          cy="203.56502916666665"
                          r={4}
                          fill="#3c8dbc"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="287.53196688942893"
                          cy="192.8366125"
                          r={4}
                          fill="#3c8dbc"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="344.2937591130012"
                          cy="183.062709375"
                          r={4}
                          fill="#3c8dbc"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="401.0555513365735"
                          cy="193.69646354166667"
                          r={4}
                          fill="#3c8dbc"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="457.2003675577157"
                          cy="95.68133333333333"
                          r={4}
                          fill="#3c8dbc"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="512.7282077764278"
                          cy="142.16850937499999"
                          r={4}
                          fill="#3c8dbc"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="569.49"
                          cy="150.072828125"
                          r={4}
                          fill="#3c8dbc"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <path
                          fill="#eaf3f6"
                          stroke="none"
                          d="M61.71875,240.62539791666666C75.90919805589307,240.40451875,104.29009416767923,241.95658932291667,118.4805422235723,239.74188125C132.67099027946537,237.52717317708334,161.05188639125151,223.88828337317852,175.2423344471446,222.90773333333334C189.27853850243014,221.93784144609518,217.3509466130012,233.81167005208334,231.38715066828675,231.94011354166668C245.4233547235723,230.06855703125,273.49576283414336,209.8015140724613,287.53196688942893,207.93528125C301.722414945322,206.04854037454461,330.10331105710816,214.96594401041665,344.2937591130012,216.92821874999998C358.4842071688943,218.89049348958332,386.86510328068044,232.95614046561928,401.0555513365735,223.63347916666666C415.09175539185907,214.41215114270264,443.16416350243014,148.5694834613835,457.2003675577157,142.75226145833332C471.0823276123937,136.99896497180018,498.84624772174976,170.87489082818223,512.7282077764278,177.35140520833335C526.9186558323208,183.97184213026557,555.299551944107,190.69290130208333,569.49,195.14006666666666L569.49,261.65625L61.71875,261.65625Z"
                          fillOpacity={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            fillOpacity: 1
                          }}
                        />
                        <path
                          fill="none"
                          stroke="#a0d0e0"
                          d="M61.71875,240.62539791666666C75.90919805589307,240.40451875,104.29009416767923,241.95658932291667,118.4805422235723,239.74188125C132.67099027946537,237.52717317708334,161.05188639125151,223.88828337317852,175.2423344471446,222.90773333333334C189.27853850243014,221.93784144609518,217.3509466130012,233.81167005208334,231.38715066828675,231.94011354166668C245.4233547235723,230.06855703125,273.49576283414336,209.8015140724613,287.53196688942893,207.93528125C301.722414945322,206.04854037454461,330.10331105710816,214.96594401041665,344.2937591130012,216.92821874999998C358.4842071688943,218.89049348958332,386.86510328068044,232.95614046561928,401.0555513365735,223.63347916666666C415.09175539185907,214.41215114270264,443.16416350243014,148.5694834613835,457.2003675577157,142.75226145833332C471.0823276123937,136.99896497180018,498.84624772174976,170.87489082818223,512.7282077764278,177.35140520833335C526.9186558323208,183.97184213026557,555.299551944107,190.69290130208333,569.49,195.14006666666666"
                          strokeWidth={3}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="61.71875"
                          cy="240.62539791666666"
                          r={4}
                          fill="#a0d0e0"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="118.4805422235723"
                          cy="239.74188125"
                          r={4}
                          fill="#a0d0e0"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="175.2423344471446"
                          cy="222.90773333333334"
                          r={4}
                          fill="#a0d0e0"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="231.38715066828675"
                          cy="231.94011354166668"
                          r={4}
                          fill="#a0d0e0"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="287.53196688942893"
                          cy="207.93528125"
                          r={4}
                          fill="#a0d0e0"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="344.2937591130012"
                          cy="216.92821874999998"
                          r={4}
                          fill="#a0d0e0"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="401.0555513365735"
                          cy="223.63347916666666"
                          r={4}
                          fill="#a0d0e0"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="457.2003675577157"
                          cy="142.75226145833332"
                          r={4}
                          fill="#a0d0e0"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="512.7282077764278"
                          cy="177.35140520833335"
                          r={4}
                          fill="#a0d0e0"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="569.49"
                          cy="195.14006666666666"
                          r={4}
                          fill="#a0d0e0"
                          stroke="#ffffff"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                      </svg>
                      <div
                        className="morris-hover morris-default-style"
                        style={{ left: "393.925px", top: 58, display: "none" }}
                      >
                        <div className="morris-hover-row-label">2012 Q4</div>
                        <div
                          className="morris-hover-point"
                          style={{ color: "#a0d0e0" }}
                        >
                          Item 1: 15,073
                        </div>
                        <div
                          className="morris-hover-point"
                          style={{ color: "#3c8dbc" }}
                        >
                          Item 2: 5,967
                        </div>
                      </div>
                    </div>
                    <div
                      className="chart tab-pane"
                      id="sales-chart"
                      style={{ position: "relative", height: 300 }}
                    >
                      <svg
                        height={300}
                        version="1.1"
                        width="554.667"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{ overflow: "hidden", position: "relative" }}
                      >
                        <desc
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        >
                          Created with Raphaël 2.3.0
                        </desc>
                        <defs
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <path
                          fill="none"
                          stroke="#3c8dbc"
                          d="M277.3335,243.33333333333331A93.33333333333333,93.33333333333333,0,0,0,365.5612551949771,180.44625304313007"
                          strokeWidth={2}
                          opacity={0}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            opacity: 0
                          }}
                        />
                        <path
                          fill="#3c8dbc"
                          stroke="#ffffff"
                          d="M277.3335,246.33333333333331A96.33333333333333,96.33333333333333,0,0,0,368.3971473262442,181.4248826052307L404.9486459070204,194.03833029452744A135,135,0,0,1,277.3335,285Z"
                          strokeWidth={3}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <path
                          fill="none"
                          stroke="#f56954"
                          d="M365.5612551949771,180.44625304313007A93.33333333333333,93.33333333333333,0,0,0,193.61834627831414,108.73398312817662"
                          strokeWidth={2}
                          opacity={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            opacity: 1
                          }}
                        />
                        <path
                          fill="#f56954"
                          stroke="#ffffff"
                          d="M368.3971473262442,181.4248826052307A96.33333333333333,96.33333333333333,0,0,0,190.92750205154567,107.40757544301087L151.76076941747118,88.10097469226493A140,140,0,0,1,409.67513279246566,195.6693795646951Z"
                          strokeWidth={3}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <path
                          fill="none"
                          stroke="#00a65a"
                          d="M193.61834627831414,108.73398312817662A93.33333333333333,93.33333333333333,0,0,0,277.30417846904885,243.333328727518"
                          strokeWidth={2}
                          opacity={0}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            opacity: 0
                          }}
                        />
                        <path
                          fill="#00a65a"
                          stroke="#ffffff"
                          d="M190.92750205154567,107.40757544301087A96.33333333333333,96.33333333333333,0,0,0,277.30323599126825,246.3333285794739L277.2910884998742,284.9999933380171A135,135,0,0,1,156.24550979541863,90.31165416754118Z"
                          strokeWidth={3}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <text
                          x="277.3335"
                          y={140}
                          textAnchor="middle"
                          fontFamily='"Arial"'
                          fontSize="15px"
                          stroke="none"
                          fill="#000000"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "Arial",
                            fontSize: 15,
                            fontWeight: 800
                          }}
                          fontWeight={800}
                          transform="matrix(1,0,0,1,0,0)"
                        >
                          <tspan
                            dy={140}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            In-Store Sales
                          </tspan>
                        </text>
                        <text
                          x="277.3335"
                          y={160}
                          textAnchor="middle"
                          fontFamily='"Arial"'
                          fontSize="14px"
                          stroke="none"
                          fill="#000000"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "Arial",
                            fontSize: 14
                          }}
                          transform="matrix(1,0,0,1,0,0)"
                        >
                          <tspan
                            dy={160}
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            30
                          </tspan>
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* /.nav-tabs-custom */}
              </section>
              {/* /.Left col */}
              {/* right col (We are only adding the ID to make the widgets sortable)*/}
              <section className="col-lg-5 connectedSortable ui-sortable">
                {/* solid sales graph */}
                <div className="box box-solid bg-teal-gradient">
                  <div
                    className="box-header ui-sortable-handle"
                    style={{ cursor: "move" }}
                  >
                    <i className="fa fa-th" />
                    <h3 className="box-title">Sales Graph</h3>
                    <div className="box-tools pull-right">
                      <button
                        type="button"
                        className="btn bg-teal btn-sm"
                        data-widget="collapse"
                      >
                        <i className="fa fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn bg-teal btn-sm"
                        data-widget="remove"
                      >
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                  <div className="box-body border-radius-none">
                    <div
                      className="chart"
                      id="line-chart"
                      style={{
                        height: 250,
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                      }}
                    >
                      <svg
                        height={250}
                        version="1.1"
                        width="534.656"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                          overflow: "hidden",
                          position: "relative",
                          left: "-0.770833px",
                          top: "-0.260417px"
                        }}
                      >
                        <desc
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        >
                          Created with Raphaël 2.3.0
                        </desc>
                        <defs
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <text
                          x="43.84375"
                          y="211.65625"
                          textAnchor="end"
                          fontFamily="Open Sans"
                          fontSize="10px"
                          stroke="none"
                          fill="#ffffff"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: '"Open Sans"',
                            fontSize: 10,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            dy="3.671875"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            0
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#efefef"
                          d="M56.34375,211.65625H509.65599999999995"
                          strokeWidth="0.4"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <text
                          x="43.84375"
                          y="164.9921875"
                          textAnchor="end"
                          fontFamily="Open Sans"
                          fontSize="10px"
                          stroke="none"
                          fill="#ffffff"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: '"Open Sans"',
                            fontSize: 10,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            dy="3.6640625"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            5,000
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#efefef"
                          d="M56.34375,164.9921875H509.65599999999995"
                          strokeWidth="0.4"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <text
                          x="43.84375"
                          y="118.32812499999999"
                          textAnchor="end"
                          fontFamily="Open Sans"
                          fontSize="10px"
                          stroke="none"
                          fill="#ffffff"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: '"Open Sans"',
                            fontSize: 10,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            dy="3.671874999999986"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            10,000
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#efefef"
                          d="M56.34375,118.32812499999999H509.65599999999995"
                          strokeWidth="0.4"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <text
                          x="43.84375"
                          y="71.6640625"
                          textAnchor="end"
                          fontFamily="Open Sans"
                          fontSize="10px"
                          stroke="none"
                          fill="#ffffff"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: '"Open Sans"',
                            fontSize: 10,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            dy="3.6640625"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            15,000
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#efefef"
                          d="M56.34375,71.6640625H509.65599999999995"
                          strokeWidth="0.4"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <text
                          x="43.84375"
                          y="24.99999999999997"
                          textAnchor="end"
                          fontFamily="Open Sans"
                          fontSize="10px"
                          stroke="none"
                          fill="#ffffff"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: '"Open Sans"',
                            fontSize: 10,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            dy="3.6718749999999716"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            20,000
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#efefef"
                          d="M56.34375,24.99999999999997H509.65599999999995"
                          strokeWidth="0.4"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <text
                          x="426.4844936208991"
                          y="224.15625"
                          textAnchor="middle"
                          fontFamily="Open Sans"
                          fontSize="10px"
                          stroke="none"
                          fill="#ffffff"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: '"Open Sans"',
                            fontSize: 10,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,6.6719)"
                        >
                          <tspan
                            dy="3.671875"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            2013
                          </tspan>
                        </text>
                        <text
                          x="224.88998147023085"
                          y="224.15625"
                          textAnchor="middle"
                          fontFamily="Open Sans"
                          fontSize="10px"
                          stroke="none"
                          fill="#ffffff"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: '"Open Sans"',
                            fontSize: 10,
                            fontWeight: "normal"
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,6.6719)"
                        >
                          <tspan
                            dy="3.671875"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                            }}
                          >
                            2012
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#efefef"
                          d="M56.34375,186.774971875C69.01225759416768,186.51365312500002,94.34927278250304,188.349883984375,107.01778037667071,185.729696875C119.68628797083839,183.109509765625,145.02330315917374,166.97354869364753,157.69181075334143,165.81347499999998C170.22261717800728,164.66601080302252,195.284230027339,178.71375507812502,207.81503645200485,176.4995453125C220.3458428766707,174.285335546875,245.4074557260024,150.30770826716187,257.93826215066827,148.09979687499998C270.60676974483596,145.86762272028687,295.9437849331713,156.417666015625,308.612292527339,158.739203125C321.2808001215067,161.06074023437498,346.617815309842,177.70159116290984,359.2863229040097,166.67209375C371.81712932867555,155.7624821785348,396.87874217800726,77.86503320312498,409.4095486026731,70.98276718749997C421.80265385783713,64.17613046874997,446.5888643681652,104.2542181104052,458.98196962332923,111.91648281249999C471.6504772174969,119.74902006353021,496.98749240583226,127.70060195312499,509.65599999999995,132.961975"
                          strokeWidth={2}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="56.34375"
                          cy="186.774971875"
                          r={4}
                          fill="#efefef"
                          stroke="#efefef"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="107.01778037667071"
                          cy="185.729696875"
                          r={4}
                          fill="#efefef"
                          stroke="#efefef"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="157.69181075334143"
                          cy="165.81347499999998"
                          r={4}
                          fill="#efefef"
                          stroke="#efefef"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="207.81503645200485"
                          cy="176.4995453125"
                          r={4}
                          fill="#efefef"
                          stroke="#efefef"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="257.93826215066827"
                          cy="148.09979687499998"
                          r={4}
                          fill="#efefef"
                          stroke="#efefef"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="308.612292527339"
                          cy="158.739203125"
                          r={4}
                          fill="#efefef"
                          stroke="#efefef"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="359.2863229040097"
                          cy="166.67209375"
                          r={4}
                          fill="#efefef"
                          stroke="#efefef"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="409.4095486026731"
                          cy="70.98276718749997"
                          r={4}
                          fill="#efefef"
                          stroke="#efefef"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="458.98196962332923"
                          cy="111.91648281249999"
                          r={4}
                          fill="#efefef"
                          stroke="#efefef"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                        <circle
                          cx="509.65599999999995"
                          cy="132.961975"
                          r={4}
                          fill="#efefef"
                          stroke="#efefef"
                          strokeWidth={1}
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                          }}
                        />
                      </svg>
                      <div
                        className="morris-hover morris-default-style"
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer no-border">
                    <div className="row">
                      <div
                        className="col-xs-4 text-center"
                        style={{ borderRight: "1px solid #f4f4f4" }}
                      >
                        <div
                          style={{ display: "inline", width: 60, height: 60 }}
                        >
                          <canvas
                            width={90}
                            height={90}
                            style={{ width: 60, height: 60 }}
                          />
                          <input
                            type="text"
                            className="knob"
                            data-readonly="true"
                            defaultValue={20}
                            data-width={60}
                            data-height={60}
                            data-fgcolor="#39CCCC"
                            readOnly="readonly"
                            style={{
                              width: 34,
                              height: 20,
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: 20,
                              marginLeft: "-47px",
                              border: 0,
                              background: "none",
                              font: "bold 12px Arial",
                              textAlign: "center",
                              color: "rgb(57, 204, 204)",
                              padding: 0,
                              WebkitAppearance: "none"
                            }}
                          />
                        </div>
                        <div className="knob-label">Mail-Orders</div>
                      </div>
                      {/* ./col */}
                      <div
                        className="col-xs-4 text-center"
                        style={{ borderRight: "1px solid #f4f4f4" }}
                      >
                        <div
                          style={{ display: "inline", width: 60, height: 60 }}
                        >
                          <canvas
                            width={90}
                            height={90}
                            style={{ width: 60, height: 60 }}
                          />
                          <input
                            type="text"
                            className="knob"
                            data-readonly="true"
                            defaultValue={50}
                            data-width={60}
                            data-height={60}
                            data-fgcolor="#39CCCC"
                            readOnly="readonly"
                            style={{
                              width: 34,
                              height: 20,
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: 20,
                              marginLeft: "-47px",
                              border: 0,
                              background: "none",
                              font: "bold 12px Arial",
                              textAlign: "center",
                              color: "rgb(57, 204, 204)",
                              padding: 0,
                              WebkitAppearance: "none"
                            }}
                          />
                        </div>
                        <div className="knob-label">Online</div>
                      </div>
                      {/* ./col */}
                      <div className="col-xs-4 text-center">
                        <div
                          style={{ display: "inline", width: 60, height: 60 }}
                        >
                          <canvas
                            width={90}
                            height={90}
                            style={{ width: 60, height: 60 }}
                          />
                          <input
                            type="text"
                            className="knob"
                            data-readonly="true"
                            defaultValue={30}
                            data-width={60}
                            data-height={60}
                            data-fgcolor="#39CCCC"
                            readOnly="readonly"
                            style={{
                              width: 34,
                              height: 20,
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: 20,
                              marginLeft: "-47px",
                              border: 0,
                              background: "none",
                              font: "bold 12px Arial",
                              textAlign: "center",
                              color: "rgb(57, 204, 204)",
                              padding: 0,
                              WebkitAppearance: "none"
                            }}
                          />
                        </div>
                        <div className="knob-label">In-Store</div>
                      </div>
                      {/* ./col */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.box-footer */}
                </div>
                {/* /.box */}
              </section>
              {/* right col */}
            </div>
            {/* /.row (main row) */}
          </section>
          {/* /.content */}
        </div>
      </Fragment>
    );
  }
}

export default Home;
