import React, {Component} from 'react';
import './Dashboard.css';
import ThingBox from './ThingsBox';

const BigCard=({...props})=>(<div className="card big">{props.children}</div>);
const SmallCard=({...props})=>(<div className="card">{props.children}</div>);
const CircleNumber = ({...props})=>(<div className="circle">{props.children}</div>);

export default class Dashboard extends Component{
    render(){
        return(
            <section>
                <h1>One Big Thing Dashbord</h1>
                <section className="main cardHolder fix640">
                <ThingBox thingType="big">1</ThingBox>
                <div className="dataPanel"><span>&lt;--</span><span>2020-05-27</span><span>--&gt;</span></div>
                <div className="card">2</div>
                <div className="card">3</div>
                </section>
            </section>

        );
    }
}
