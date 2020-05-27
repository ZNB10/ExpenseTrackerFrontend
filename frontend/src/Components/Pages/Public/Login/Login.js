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
    }
    onChangeHandler(e){
        const{name, value} = e.target;
        console.log({name, value});
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
                    />
                   <Campo
                        caption="Contraseña"
                        type="password"
                        value={this.state.password}
                        name="password"
                   />
                    <section>
                        <Button>Login</Button>
                        <Button>Signin</Button>
                    </section>
                    
                </section>
            </section>
        );
    }
}