import React, {Component} from 'react';
import './Dashboard.css';
import {paxios} from "../../../../Utilities";

//Common
import Campo from '../../../Common/Campo/Campo';
import Button from '../../../Common/Btns/Buttons';


/*
const BigCard=({...props})=>(<div className="card big">{props.children}</div>);
const SmallCard=({...props})=>(<div className="card">{props.children}</div>);
const CircleNumber = ({...props})=>(<div className="circle">{props.children}</div>);

*/


export default class Dashboard extends Component{
    
    constructor(){
        
        super();
        this.state ={
            expenseType:'',
            expenseDesc:'',
            expenseMoney:0,
            error:false
        }
        
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSaveBtnClick = this.onSaveBtnClick.bind(this);
    }
    onChangeHandler(evt){
        
        const{name, value} = evt.currentTarget;


        if(evt.currentTarget.name === "expenseMoney"){
            this.setState({...this.state, [name]:parseInt(value)});
        }else{
            this.setState({...this.state, [name]:value});
        }
        
    }
    

    onSaveBtnClick(e){
        
        const {expenseType, expenseDesc, expenseMoney} = this.state;
        paxios.post('/api/expenses/expenses', {expenseType, expenseDesc, expenseMoney})
        .then(({data})=>{
            this.props.history.push('/main');
        }) 
        .catch((error)=>{
            this.setState({error:"Error. No se pudo registrar el nuevo gasto"})

        })
    }
    render(){
        return(
            <section>
                <h1>What will I spend today?</h1>
                <section className="main fix640">
                    <form>
                        <label>Choose an expense </label>
                        <select name="expenseType" onChange={(evt) => this.onChangeHandler(evt)}>
                            <option value={"Comestible"}>Comestible</option>
                            <option value={"Family"}>Family</option>
                            <option value={"Restaurants"}>Restaurants</option>
                            <option value={"FreeTime"}>Free Time</option>
                            <option value={"Transport"}>Transport</option>
                            <option value={"Presents"}>Presents</option>
                            <option value={"Purchases"}>Purchases</option>
                            
                        </select><br/><br/>
                        <Campo
                            caption="Expense Description"
                            value={this.state.expenseDesc}
                            name="expenseDesc"
                            onChange={this.onChangeHandler}
                        />
                         {(this.state.error && true)? (<div className="error">{this.state.error}</div>):null}
                         <Campo
                            caption="How much I spent?"
                            value={this.state.expenseMoney}
                            name="expenseMoney"
                            onChange={this.onChangeHandler}
                        />
                         {(this.state.error && true)? (<div className="error">{this.state.error}</div>):null}
                        <section className="action">
                            <Button
                                caption="OK"
                                onClick={this.onSaveBtnClick}
                                customClass="primary"
                            />
                        </section>
                    </form>
                </section>
            </section>

        );
    }
}
