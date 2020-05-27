import React, {Component} from 'react';
import Butttons from '../../../Btns/Buttons'
import Button from '../../../Btns/Buttons';
import Campo from '../../../Campo/Campo';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
        };
        //autobinding
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSigninBtnClick = this.onSigninBtnClick.bind(this);
    }
    onChangeHandler(e){
        const{name, value} = e.target;
        this.setState({...this.state, [name]:value}); 
    }
    onSigninBtnClick(e){
        console.log(this.state);
    }
    render(){
        return (
            <section>
                <h1>Iniciar Sesion</h1>
                <section>
                    <Campo 
                        caption="Correo Electronico "
                        value={this.state.email}
                        name="email"
                        onChange={this.onChangeHandler}
                    />
                   <Campo
                        caption="Contraseña"
                        type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.onChangeHandler}
                   />
                    <section>
                        <Button caption="Login" onClick={this.onSigninBtnClick}>Login</Button>
                        <Button >Signin</Button>
                    </section>
                    
                </section>
            </section>
        );
    }
}