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
      </div>
    );
  }
}
