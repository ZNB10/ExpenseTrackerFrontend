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
      expensesss: [],
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

    const uri3 = "/api/expenses/expenses/query4";
    paxios
      .get(uri3)
      .then(({ data }) => {
        const { expensesss } = data;
        for (const key in expensesss) {
          console.log(expensesss);
        }
        const loadedExpenses3 = this.state.expensesss;
        expensesss.map((o) => loadedExpenses3.push(o));
      })
      .catch((err) => {
        console.log(err);
      });

    const uri2 = `/api/expenses/expenses/query3`;
    paxios
      .get(uri2)
      .then(({ data }) => {
        const { expensess } = data;

        const loadedExpenses2 = this.state.expensess;
        expensess.map((i) => loadedExpenses2.push(i));
        this.props.history.push("/notification");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  crearTabla() {
    return this.state.expensess.map((expensess) => {
      return (
        <tr class="tablaDataLink" key={expensess._id}>
          <td class="tablaDataLink"> {expensess.expenseType} </td>
          <td class="tablaDataLink"> {expensess.expenseDesc} </td>
          <td class="tablaDataLink"> ${expensess.expenseMoney} </td>
          <td class="tablaDataLink action">
            <Link to=""></Link>
          </td>
        </tr>
      );
    });
  }

  render() {
    const items = this.state.expenses.map((expens) => {
      return (
        <div className="thingItem" key={expens._id}>
          <span>
            Spend a lot on "{expens.expenseDesc}" and spent "$
            {expens.expenseMoney}"
          </span>
          <span className="updateThing">
            <Link to="">
              <IoIosFlame size="1.6em" />
            </Link>
          </span>
        </div>
      );
    });

    const items4 = this.state.expensesss.map((expenss) => {
      return (
        <div className="thingItem" key={expenss._id}>
          <span>
            Last expense was "{expenss.expenseDesc}" and spent "$
            {expenss.expenseMoney}"
          </span>
          <span className="updateThing">
            <Link to="">
              <IoIosFlame size="1.6em" />
            </Link>
          </span>
        </div>
      );
    });

    if (!items.length) {
      items.push(
        <div className="thingItem">
          <span> Haven't spent on anything yet :(</span>
          <Link to="/main">
            <IoIosSad size="2.5em" />
          </Link>
        </div>
      );
    }

    return (
      <section>
        <h1> Notifications </h1>
        {items}
        {items4}
        <p class="tableHead"> Top 3 expenses </p>
        <table className="table">
          <thead>
            <tr>
              <td class="tableData"> Type </td>
              <td class="tableData"> Description </td>
              <td class="tableData"> Spending </td>
            </tr>
          </thead>
          <tbody>{this.crearTabla()}</tbody>
        </table>
      </section>
    );
  }
}
