import React, {Component} from 'react';
import Button from '../../../Common/Btns/Buttons'
import Campo from '../../../Common/Campo/Campo'
import { naxios } from '../../../../Utilities';

export default class Sigin extends Component{

    constructor(){
        super();
        this.state={
            email: '',
            password: '',
            error:false
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSiginBtnClick = this.onSiginBtnClick.bind(this);
    };

    onChangeHandler(e){
        const {name, value} = e.target;
        this.setState({...this.state,[name]:value});
    }
    onSiginBtnClick(e){
        console.log("Hola");

        const {email, password} = this.state;
        naxios.post('/api/security/signin', { email, password})
        .then(({data})=>{
            console.log("Esta es la data" + data);
            this.props.history.push('/login');
        })
        .catch((error)=>{
            console.log("Aqui ocurrio un error: " +error);
            this.setState({error:"Error. No se pudo crear la cuenta, Intente nuevamente."})
        })
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
                   {(this.state.error && true)?(<div className="error">{this.state.erro}</div>):null}
                    <section className="action">
                        <Button 
                            caption="SingUp" 
                            onClick={this.onSiginBtnClick} 
                            customClass="primary"
                        />
                        <Button 
                            caption="User Login" 
                            customClass="link" 
                            onClick={ (e)=> { this.props.history.push('/login')}}
                        />
                    </section>
                    
                </section>
            </section>
        );
    }



}