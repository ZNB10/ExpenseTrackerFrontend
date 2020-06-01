import React, { Component } from "react";
import Button from "../../../Common/Btns/Buttons";
import "./Home.css";
import { IoMdLogOut } from "react-icons/io";
import { paxios } from "../../../../Utilities";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>
          Expense Tracker
          {this.props.auth.logged ? (
            <div className="half">
              <Button
                customClass="logout"
                onClick={(e) => {
                  this.props.setUnAuth(false);
                }}
              >
                <IoMdLogOut />
              </Button>
            </div>
          ) : null}
        </h1>

        {!this.props.auth.logged ? (
          <div className="home section-title">
            <h2>Track your personal finance expenses quickly and easily</h2>

            <p className="section-info">
              Don't waste your time and money on paper, notebooks or complicated
              applications.{" "}
            </p>
          </div>
        ) : null}

        {this.props.auth.logged ? (
          <div className="home section-title">
            <h2>Welcome! </h2>
            <h3>{this.props.auth.user.email}</h3>

            <p className="section-info">
              Don't waste your time and money on paper, notebooks or complicated
              applications.
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}
