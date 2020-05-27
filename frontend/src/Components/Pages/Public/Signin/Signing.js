import React, {Component} from 'react';
import Button from '../../../Common/Btns/Buttons'
import Campo from '../../../Common/Campo/Campo'

export default class Sigin extends Component{

    constructor(){
        super();
        this.state={
            email: '',
            password: '',
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSiginBtnClick = this.onSiginBtnClick.bind(this);
    };

    onChangeHandler(e){
        const {name, value} = e.target;
        this.setState({...this.state,[name]:value});
    }
    onSiginBtnClick(e){
        console.log(this.state);
    }
    render(){
        return (
            <section>
                <h1>New Account</h1>
                <section className="main fix640">
                    <Campo 
                        caption="Email "
                        value={this.state.email}
                        name="email"
                        onChange={this.onChangeHandler}
                    />
                   <Campo
                        caption="Password"
                        type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.onChangeHandler}
                   />
                    <section className="action">
                        <Button caption="Login" onClick={this.onSigninBtnClick} customClass="primary">Login</Button>
                        <Button caption="Signin" onClick={this.onSigninBtnClick} customClass="link">Signin</Button>
                    </section>
                    
                </section>
            </section>
        );
    }



}