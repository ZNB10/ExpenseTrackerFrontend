import React, {Component} from 'react';
import Button from  '../../../Common/Btns/Buttons';
import './Home.css';
import { IoIosLogOut } from 'react-icons/io';

export default class Home extends Component {
    render(){
        return(
            <div className="home"> 
                <h1>Expense Tracker</h1>
                <h2>Saldo Inicial : L.5000</h2>
                <h2>Saldo Actual : L.3000</h2>
                <h2>Ultimos Gastos</h2>
                <ul>
                    <li>Supermercado</li>
                    <li>Farmacia</li>
                    <li>Mascota</li>
                </ul>
                <div>&nbsp;</div>
                {(this.props.auth.logged) ? (<div className="half"><Button customClass="primary" onClick={(e) => { this.props.setUnAuth(false)}}><IoIosLogOut/>&nbsp;Logout</Button></div>):null}
            </div>
        );
    }
}