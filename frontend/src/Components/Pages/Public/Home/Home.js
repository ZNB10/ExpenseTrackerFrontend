import React, {Component} from 'react';
import Button from  '../../../Common/Btns/Buttons';
import './Home.css';
import { IoMdLogOut } from 'react-icons/io';
import { paxios } from '../../../../Utilities';

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
                    <div key={expens._id}>
                        <span>
                            Hi, you spend a lot on {expens.expenseDesc}&nbsp;
                            you spent {expens.expenseMoney}$</span>
                    </div>
                );
            }
        )
        return(
            <div className="home" > 
                <h1 >
                    Expense Tracker
                    
                    {(this.props.auth.logged) ? (<div className="half"><Button customClass="logout" onClick={(e) => { this.props.setUnAuth(false)}}><IoMdLogOut/></Button></div>):null}
                </h1>
                
                <h2>{items}</h2>
                    
                <div>&nbsp;</div>
            </div>
        );
    }
}