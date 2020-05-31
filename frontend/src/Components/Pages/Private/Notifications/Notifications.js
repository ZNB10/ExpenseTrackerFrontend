import React, { Component } from "react";
import { IoIosFlame, IoIosSad } from "react-icons/io";
import { paxios } from "../../../../Utilities";
import { Link } from "react-router-dom";
import "./Notifications.css";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      expenses: [],
      expensess: [],
    };
  }

  componentDidMount() {
    const uri = `/api/expenses/expenses/query1`;
    paxios
      .get(uri)
      .then(({ data }) => {
        const { expenses } = data;
        for (const key in data) {
          console.log(data);
        }
        const loadedExpenses = this.state.expenses;
        expenses.map((e) => loadedExpenses.push(e));
      })
      .catch((err) => {
        console.log(err);
      });

    const uri2 = `/api/expenses/expenses/query3`;
    paxios
      .get(uri2)
      .then(({ data }) => {
        const { expensess } = data;
        for (const key in expensess) {
          console.log(expensess);
        }
        const loadedExpenses2 = this.state.expensess;
        expensess.map((ee) => loadedExpenses2.push(ee));
        this.props.history.push("/notification");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  crearTabla() {
    return this.state.expensess.map((expensess) => {
      return (
        <tr class="tablaE" key={expensess._id}>
          <td class="tablaE"> {expensess.expenseType} </td>{" "}
          <td class="tablaE"> {expensess.expenseDesc} </td>{" "}
          <td class="tablaE"> {expensess.expenseMoney} </td>{" "}
          <td class="tablaE accion">
            <Link>
              {" "}
              <IoIosFlame size="2em" />{" "}
            </Link>{" "}
          </td>{" "}
        </tr>
      );
    });
  }

  render() {
    const items = this.state.expenses.map((expens) => {
      return (
        <div className="thingItem" key={expens._id}>
          <span>
            Hi, you spend a lot on {expens.expenseDesc} & nbsp; you spent{" "}
            {expens.expenseMoney}${" "}
          </span>{" "}
          <span className="updateThing">
            <Link to="">
              <IoIosFlame size="2em" />
            </Link>{" "}
          </span>{" "}
        </div>
      );
    });

    if (!items.length)
      items.push(
        <div className="thingItem">
          <span> You haven 't spent on anything yet :(</span>{" "}
          <Link to="/main">
            <IoIosSad size="2.5em" />
          </Link>{" "}
        </div>
      );
    return (
      <section>
        <h1> Notifications </h1> {items} <span> Your top 3 expenses </span>{" "}
        <table>
          <thead>
            <tr>
              <td> Type </td> <td> Description </td> <td> Spending </td>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody> {this.crearTabla()} </tbody>{" "}
        </table>{" "}
      </section>
    );
  }
}
