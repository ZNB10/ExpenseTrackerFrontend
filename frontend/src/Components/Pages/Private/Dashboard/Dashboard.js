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
                <h1>One Big Thing Dashbord</h1>
                <section className="main cardHolder fix640">
                <ThingBox thingType="big"><span className="circle"><Plus/></span>
                </ThingBox>
                <DatePanel/>
                <ThingBox><span className="circle"><Plus/></span></ThingBox>
                <ThingBox><span className="circle"><Plus/></span></ThingBox>
                </section>
            </section>

        );
    }
}
