import React, {Component} from 'react';
import './Dashboard.css';
import {paxios} from "../../../../Utilities";

//Common
import Select from '../../../Common/Select/Select';
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

        for (const key in name) {
            var a = 0;
            a++;
            console.log("Esto es: "+name[key]+" "+ "indice: " + a)
        }

        this.setState({...this.state, [name]:value});

        for (const key in this.state) {
            console.log("errorrr: "+this.state[key]);
        }

    }
    

    onSaveBtnClick(e){
        
        const {expenseType, expenseDesc, expenseMoney} = this.state;
        paxios.post('/api/expenses/expenses', {expenseType, expenseDesc, expenseMoney})
        .then(({data})=>{
            console.log("Esta es la data" + data);
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
                            <option value={"comestible"}>Comestible</option>
                            <option value={"family"}>Family</option>
                            <option value={"restaurants"}>Restaurants</option>
                            <option value={"freeTime"}>Free Time</option>
                            <option value={"Transport"}>Transport</option>
                            <option value={"presents"}>Presents</option>
                            <option value={"purchases"}>Purchases</option>
                            
                        </select><br/><br/>
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
