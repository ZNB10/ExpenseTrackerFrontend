import React, {Component} from 'react';
import './Dashboard.css';

const BigCard=({...props})=>(<div className="card big">{props.children}</div>);
const SmallCard=({...props})=>(<div className="card">{props.children}</div>);
const CircleNumber = ({...props})=>(<div className="circle">{props.children}</div>);

export default class Dashboard extends Component{
    render(){
        return(
            <section>
                <h1>One Big Thing Dashbord</h1>
            </section>

        );
    }
}
