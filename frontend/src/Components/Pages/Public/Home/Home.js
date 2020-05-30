import React, {Component} from 'react';
import Button from  '../../../Common/Btns/Buttons';
import './Home.css';
import { IoIosLogOut,IoIosFlame } from 'react-icons/io';
import { paxios } from '../../../../Utilities';
import { Link } from 'react-router-dom';

export default class Home extends Component {
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
                for (const key in this.state.expenses) {
                    console.log(this.state.expenses[key]);
                }   
                this.props.history.push('/home');
            }
        )
        .catch(
            (err)=>{
                console.log(err);
            }
        );
    }

    render(){
        const items = this.state.expenses.map(
            (expens)=>{
                return(
                    <div className="thingItem" key={expens._id}>
                        <span>
                            Hi, you spend a lot on {expens.expenseDesc}&nbsp;
                            you spent {expens.expenseMoney}$</span>
                        <span>
                            <Link>
                                <IoIosFlame size="2em"/>
                            </Link>
                        </span>
                    </div>
                );
            }
        )
        return(
            <div className="home"> 
                <h1>
                    Expense Tracker
                    
                    {(this.props.auth.logged) ? (<div className="half"><Button customClass="logout" onClick={(e) => { this.props.setUnAuth(false)}}><IoIosLogOut/></Button></div>):null}
                </h1>
                
                {items}
                    
                <div>&nbsp;</div>
            </div>
        );
    }
}