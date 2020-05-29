import React, {Component} from 'react'
import './Backlog.css';
import {paxios} from '../../../../Utilities';
import InfiniteScroll from 'react-infinite-scroller';
import {IoIosInformationCircleOutline, IoMdAddCircle, IoIosSync} from 'react-icons/io'
import {Link} from 'react-router-dom';

export default class Backlog extends Component{
    constructor(){
        super();
        this.state ={
            expenses:[],
            hasMore:true,
            page:1,
            itemsToLoad:10
        }
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore(page){
        const items = this.state.itemsToLoad;
        const uri = `/api/expenses/expenses/page/${page}/${items}`;
        paxios.get(uri)
            .then(
            ({data})=>{
                for (const key in data ){
                    console.log("Data es :" + data[key]);
                }
                const {expenses, totalExpenses} = data;
                const loadedExpenses = this.state.expenses;
                expenses.map((e)=>loadedExpenses.push(e));
                if(totalExpenses){
                    this.setState({
                        "expenses": loadedExpenses,
                        "hasMore": (page * items < totalExpenses)
                    })
                }else{
                    this.setState({
                        "hasMore":false
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
        const items = this.state.expenses.map(
        (expens)=>{
            return(
            <div className="thingItem" key={expens._id}>
                <span>{expens.expenseDesc}</span>
                <span className="updateThing">
                    <Link to={`/detailupdate/${expens._id}`}>
                        <IoIosInformationCircleOutline size="2em"/>
                    </Link>
                </span>
            </div>);
        }
    );

    if(!items.length) items.push(
        <div className="thingItem" key="pbBackLogAddOne">
            <span>New Thing</span>
            <Link to="/detailadd">
                <IoMdAddCircle size="2.5em"/>
            </Link>
        </div>
    );
    return(
        <section>
            <h1>I spent on ...</h1>
            <div className="backlog" ref={(ref)=>this.scrollParentRef = ref}>
                <InfiniteScroll pageStart={0}
                    pageStart={0}
                    loadMore={this.loadMore}
                    hasMore={this.state.hasMore}
                    useWindow={false}
                    getScrollParent={()=>this.scrollParentRef}
                    loader={<div key="pbBackLogLoading" className="thingItem center"><IoIosSync/></div>}
                >
                    {items}
                </InfiniteScroll>
            </div>
            </section>
        );
    }
}