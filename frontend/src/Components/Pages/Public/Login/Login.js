import React, {Component} from 'react';
import Butttons from '../../../Btns/Buttons'
import Button from '../../../Btns/Buttons';

export default class Login extends Component{
    render(){
        return (
            <section>
                <h1>Iniciar Sesion</h1>
                <section>
                    <fieldset>
                        <legend>Correo Electronico</legend>
                        <input type="text" placeholder="Ingrese..."></input>
                        <legend>Contraseña</legend>
                        <input type="password" placeholder="Ingrese..."></input>
                        <section>
                            <Button>Iniciar Sesion</Button>
                        </section>
                    </fieldset>
                </section>
            </section>
        );
    }
}