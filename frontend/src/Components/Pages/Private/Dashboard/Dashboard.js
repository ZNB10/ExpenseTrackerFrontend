import React, {Component} from 'react';
import './Dashboard.css';
import {paxios} from "../../../../Utilities";

//Common
import Select from '../../../Common/Select/Select';
import Campo from '../../../Common/Campo/Campo';


/*
const BigCard=({...props})=>(<div className="card big">{props.children}</div>);
const SmallCard=({...props})=>(<div className="card">{props.children}</div>);
const CircleNumber = ({...props})=>(<div className="circle">{props.children}</div>);

*/
export default class Dashboard extends Component{
    constructor(){
        super();
        this.state ={
            expenseDesc:'',
            expenseMoney:0,
            error:false
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler(e){
        const{name, value} = e.target;
        this.setState({...this.state, [name]:value}); 
    }
    render(){
        return(
            <section>
                <h1>What will I spend today?</h1>
                <section className="main fix640">
                    <form>
                        <label>Choose an expense </label>
                        <Select >
                            <option value={"health"}>Health</option>
                            <option value={"comestible"}>Comestible</option>
                            <option value={"family"}>Family</option>
                            <option value={"restaurants"}>Restaurants</option>
                            <option value={"freeTime"}>Free Time</option>
                            <option value={"Transport"}>Transport</option>
                            <option value={"presents"}>Presents</option>
                            <option value={"purchases"}>Purchases</option>
                        </Select><br/><br/>
                        <Campo
                            caption="Expense Description"
                            value={this.state.expenseDesc}
                            name="expenseDesc"
                            onChange={this.onChangeHandler}
                        />
                         {(this.state.error && true)? (<div className="error">{this.state.error}</div>):null}
                         <Campo
                            caption="How much i spent?"
                            value={this.state.expenseMoney}
                            name="expenseMoney"
                            type="number"
                            onChange={this.onChangeHandler}
                        />
                         {(this.state.error && true)? (<div className="error">{this.state.error}</div>):null}
                        
                    </form>
                </section>
            </section>

        );
    }
}
