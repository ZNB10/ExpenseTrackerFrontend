import React, {Component} from 'react';
import './Dashboard.css';
import {MdAdd as Plus} from 'react-icons/md';
import {paxios} from "../../../../Utilities"

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
    render(){
        return(
            <section>
                <h1>What will I spend today?</h1>
                <section className="main cardHolder fix640">
                    <form>
                        <label>Escoje un gasto</label>
                        <select onClick={(e)=>{console.log("Se hizo click")}}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </form>
                </section>
            </section>

        );
    }
}
