import React, {Component} from 'react';
import './Dashboard.css';
import {MdAdd as Plus} from 'react-icons/md';
import {paxios} from "../../../../Utilities";

//Common
import Select from '../../../Common/Select/Select';
import Campo from '../../../Common/Campo/Campo';

import ThingBox from './ThingsBox';
import DatePanel from './DatePanel';

/*
const BigCard=({...props})=>(<div className="card big">{props.children}</div>);
const SmallCard=({...props})=>(<div className="card">{props.children}</div>);
const CircleNumber = ({...props})=>(<div className="circle">{props.children}</div>);

*/
export default class Dashboard extends Component{
    constructor(){
        super();
        this.state ={
            things:[],
            hasMore:true,
            page:1,
            itemsToLoad:10
        }
        this.SelectClick = this.SelectClick.bind(this);
    }
    componentDidMount(){
        paxios.get('/api/things/')
            .then(({data, status})=>{
                console.log(data);
            })
            .catch((err)=>{
                console.log(err);
            })
        ;
    }
    SelectClick(page){
        const items = this.state.itemsToLoad;
        const uri = `/api/things/page/${{page}}/${items}`;
        console.log("Uri   "+ uri);
        paxios.get(uri)
            .then(
                ({data})=>{
                    var numOption = data.length;
                }
            )
            .catch(
                (err)=>{
                    console.log(err);
                }
            );

    }
    render(){
        return(
            <section>
                <h1>What will I spend today?</h1>
                <section className="main cardHolder fix640">
                    <form>
                        <label>Choose an expense </label>
                        <Select onClick={this.SelectClick(3)}>
                            <option value={"health"}>Health</option>
                            <option value={"comestible"}>Comestible</option>
                            <option value={"family"}>Family</option>
                            <option value={"restaurants"}>Restaurants</option>
                            <option value={"freeTime"}>Free Time</option>
                            <option value={"Transport"}>Transport</option>
                            <option value={"presents"}>Presents</option>
                            <option value={"purchases"}>Purchases</option>
                        </Select><br/>
                        <label>Expense Description</label>
                        <input></input>

                    </form>
                </section>
            </section>

        );
    }
}
