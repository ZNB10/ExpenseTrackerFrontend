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
                <div>&nbsp;</div>
            </div>
        );
    }
}