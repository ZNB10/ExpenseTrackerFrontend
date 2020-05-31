import React, {Component} from 'react';
import { IoIosFlame } from 'react-icons/io';
import { paxios } from '../../../../Utilities';
import {Link} from 'react-router-dom';


export default class Home extends Component{
    constructor(){
        super();
        this.state={
            expenses:[]
        }
    }

    componentDidMount(){
        const uri = `/api/expenses/expenses/query1`;
        paxios.get(uri)
        .then(
            ({data})=>{
                const {expenses} = data;
                const loadedExpenses = this.state.expenses;
                expenses.map((e)=>loadedExpenses.push(e));

            }
        )
        .catch((err)=>{
            console.log(err.message());
        });
    }

    render(){
        const items = this.state.expenses.map(
            (expens)=>{
                return(
                    <div className="thingItem" key={expens._id}>
                        <span>
                            Hi, you spend a lot on {expens.expenseDesc}&nbsp;
                            you spent {expens.expenseMoney}$
                        </span>
                        <span className="updateThing">
                            <Link to="">
                                <IoIosFlame size="2em"/>
                            </Link>
                        </span>
                    </div>
                );
            }

        )
        return(
            <section>
                <h1>Notifications</h1>
                <div className="home">
                    {items}
                </div>
            </section>
        )
    }
}