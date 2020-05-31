import React, { Component } from "react";
import Button from "../../../Common/Btns/Buttons";
import Campo from "../../../Common/Campo/Campo";
import { paxios } from "../../../../Utilities";

export default class DetailAdd extends Component {
  constructor() {
    super();
    this.state = {
      descripcion: "",
      error: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSaveBtnClick = this.onSaveBtnClick.bind(this);
  }

  onChangeHandler(e) {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  }
  onSaveBtnClick(e) {
    const { descripcion } = this.state;
    paxios
      .post("/api/things", { descripcion })
      .then(({ data }) => {
        this.props.history.push("/backlog");
      })
      .catch((error) => {
        this.setState({
          error: "Error. No se pudo crear nuevo thing, Intente nuevamente.",
        });
      });
  }
  render() {
    return (
      <section>
        <h1>New Thing</h1>
        <section className="main fix640">
          <Campo
            caption="Description "
            value={this.state.descripcion}
            name="descripcion"
            onChange={this.onChangeHandler}
          />
          {this.state.error && true ? (
            <div className="error">{this.state.error}</div>
          ) : null}
          <section className="action">
            <Button
              caption="Create"
              onClick={this.onSaveBtnClick}
              customClass="primary"
            />
            <br></br>
            <Button
              caption="Cancel"
              customClass="secundary"
              onClick={(e) => {
                this.props.history.push("/backlog");
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}
