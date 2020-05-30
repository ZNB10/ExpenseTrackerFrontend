import React, {Component} from 'react';
import Button from  '../../../Common/Btns/Buttons';
import './Home.css';
import { IoIosLogOut } from 'react-icons/io';
import { paxios } from '../../../../Utilities';

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            expenseType: "",
            expenseDesc: "",
            expenseMoney:0
        }
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore(Page){
        console.log("Holaaaaaaaaaaaaaaa");
        const uri = `/api/expenses/expenses/query1`;
        paxios.get(uri)
        .then(
            ({data})=>{
                const {expenseType, expenseDesc, expenseMoney} = data;
                const loadedQuery = this.state.expenseType;
                expenseType.map((e)=>loadedQuery.push(e));
                for (const key in data.expenseType) {
                    console.log(data.expenseType[key]);
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
        this.loadMore();
        return(
            <div className="home"> 
                <h1>
                    Expense Tracker
                    
                    {(this.props.auth.logged) ? (<div className="half"><Button customClass="logout" onClick={(e) => { this.props.setUnAuth(false)}}><IoIosLogOut/></Button></div>):null}
                </h1>
                <section className="main fix640">
                    <h2 href="">Spending too much on Baleadas</h2>
                    <h3>Top Higher Expense</h3>
                    <h3>I spend more on</h3>
                    <h3>Last Expense</h3>
                    <h3>Total spent</h3>

                    <h3></h3>
                </section>
                <div>&nbsp;</div>
            </div>
        );
    }
}