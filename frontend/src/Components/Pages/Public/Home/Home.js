import React, {Component} from 'react';
import Button from  '../../../Common/Btns/Buttons';
import './Home.css';
import { IoIosLogOut } from 'react-icons/io';

export default class Home extends Component {
    render(){
        return(
            <div className="home"> 
                <h1>
                    Expense Tracker
                    {(this.props.auth.logged) ? (<div className="half"><Button customClass="logout" onClick={(e) => { this.props.setUnAuth(false)}}><IoIosLogOut/></Button></div>):null}
                </h1>
                <section className="main fix640">
                    <h2>Spending too much on Baleadas</h2>
                    <h3>Top Higher Expense</h3>
                    <h3>Last Expense</h3>
                    <h3>Total spent</h3>

                    <h3></h3>
                </section>
                <div>&nbsp;</div>
            </div>
        );
    }
}