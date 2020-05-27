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
                <ThingBox thingType="big">
                    <div>
                        <h1>One</h1>
                    </div>
                </ThingBox>
                <DatePanel/>
                <ThingBox>
                    Two
                </ThingBox>
                <ThingBox >
                    Three
                </ThingBox>
                </section>
            </section>

        );
    }
}
