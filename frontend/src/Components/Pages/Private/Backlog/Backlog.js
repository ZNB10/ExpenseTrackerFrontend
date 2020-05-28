import React, {Component} from 'react'
import './Backlog.css';
import {paxios} from '../../../../Utilities';
import InfiniteScroll from 'react-infinite-scroller';
import {IoIosInformationCircleOutline} from 'react-icons/io'

export default class Backlog extends Component{
    constructor(){
        console.log("Entro a constructor");
        super();
        this.state ={
            things:[],
            hasMore:true,
            page:1,
            itemsToLoad:10
        }
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore(page){
        console.log("Entro a load More");
        const items = this.state.itemsToLoad;
        const uri = `/api/things/page/${page}/${items}`;
        console.log("Uri   "+ uri);
        paxios.get(uri)
        .then(
            (data)=>{
                console.log(data);
                const {things, totalThings} = data;
                const loadedThings = this.state.things;
                things.map((o)=>{loadedThings.push(o)});
                if(totalThings){
                    this.setState({
                        "things": loadedThings,
                        "hasMore": (page * items < totalThings)
                    })
                }else{
                    this.setState({
                        hasMore:false
                    });
                }
            }
        )
        .catch(
            (err)=>{
                console.log(err);
            }
        );
    }
    render(){
        console.log("Holaaaa its render"+this.state.things);
        console.log(this.state.things);
        if(!this.state.things){
            console.log("No esta definida");
        }else{
            const items = this.state.things.map(
                (thing)=>{
                    return(
                    <div className="thingItem" key={thing._id}>
                        <span>{thing.descripcion}</span>
                        <IoIosInformationCircleOutline size="2em"/>
                    </div>);
                }
            );
        }
        
        return(
            <section>
                <h1>My Things Backlog</h1>
                <div className="backlog" ref={(ref)=>this.scrollParentRef = ref}>
                    <InfiniteScroll pageStart={0}
                        pageStart={0}
                        loadMore={this.loadMore}
                        hasMore={this.state.hasMore}
                        useWindow={false}
                        getScrollParent={()=>this.scrollParentRef}
                        loader={(<div>Cargando..</div>)}
                    >
                    </InfiniteScroll>
                </div>
                    
            </section>
        );
    }
}