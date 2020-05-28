import React, {Component} from 'react';
import Button from '../../../Common/Btns/Buttons'
import Campo from '../../../Common/Campo/Campo'
import { paxios } from '../../../../Utilities';

export default class DetailUpdate extends Component{

    constructor(){
        super();
        this.state={
            descripcion:'',
            error:false
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSaveBtnClick = this.onSaveBtnClick.bind(this);
    };

    componentDidMount(){
        const { match: {params}} = this.props ;
        const uri = `/api/things/${params.id}`;
        paxios.get(uri)
        .then(
            ({data})=>{
                this.setState({...data});
            }
        )
        .catch(
            (err)=>{
                this.setState({error:"No se pudo cargar el Thing"});
            }
        );
    }

    onChangeHandler(e){
        const {name, value} = e.target;
        this.setState({...this.state,[name]:value});
    }
    onSaveBtnClick(e){
        const {descripcion, _id} = this.state;
        paxios.put(`/api/things/${_id}`, { descripcion })
            .then(({data})=>{
                this.props.history.push('/backlog');
            })
            .catch((error)=>{
                console.log("Aqui ocurrio un error: " +error);
                this.setState({error:"Error. No se pudo actulizar nuevo thing, Intente nuevamente."})
            })
    }
    render(){
        console.log("This.state : " + this.setState);
        return (
            <section>
                <h1>ID : {this.props.match.params.id}</h1>
                <section className="main fix640">
                    <Campo 
                        caption="Description "
                        value={this.state.descripcion}
                        name="descripcion"
                        onChange={this.onChangeHandler}
                    />
                   {(this.state.error && true)?(<div className="error">{this.state.error}</div>):null}
                    <section className="action">
                        <Button 
                            caption="Update" 
                            onClick={this.onSaveBtnClick} 
                            customClass="primary"
                        />
                        <br></br>
                        <Button 
                            caption="Cancel" 
                            customClass="secundary" 
                            onClick={ (e)=> { this.props.history.push('/backlog')}}
                        />
                    </section>
                    
                </section>
            </section>
        );
    }



}