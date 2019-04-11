import React from "react";
export class ToDoList extends React.Component{
    constructor(){
        super();
        this.state={
            itemAlreadyinList:[],
            newItemtobeAdded:'',
            priorityColor:''
        };
    };

    AddIteminList(){
        const itemAlreadyinList=this.state;
        let priorityColor=this.state;
        if(this.newItem.value===''){
            alert("Please Enter a Task");
        }else{
        if(this.priority.value==='1'){
                this.setState({
                    priorityColor:"Red"
                });
            }
        else if(this.priority.value==='2'){
            this.setState({
                priorityColor:"Blue"
            });
            }
        else if(this.priority.value==='3'){
            this.setState({
                priorityColor:"Yellow"
            });
            }
        else{
                alert("Choose Priority Again");
            }
           
        const newItemtobeAdded=this.newItem.value;
        this.setState({
            itemAlreadyinList:[...this.state.itemAlreadyinList, newItemtobeAdded]
        });
        this.newItem.value='';
        this.priority.value='';
    }};

    clearAllItemsinList(){
        this.setState({itemAlreadyinList:[]});
    };

    SearchIteminList(){
        const itemAlreadyinList=this.state;
        const ItemtobeSearched=this.searchItem.value;
        if(itemAlreadyinList.find(ItemtobeSearched)){
            alert("Yes Item Exists");
        }
        else{
            alert("Specified Item doesn't exist");
        }
    };
    render(){
        return(
            <div className="container">
                <div className="col-xs-10 col-xs-offset-1">
                <p>
                    Your To-Do List for Today
                </p>
                <ol>
                    {this.state.itemAlreadyinList.map((item, i)=><li style={{color:this.state.priorityColor}}key={i}>{item}</li>)}
                </ol>
                <input ref={input=>this.newItem=input} placeholder="Add Item Here" type="text"></input>
                <input ref={input=>this.priority=input} placeholder="Add DEFCON 1/2/3" type="text"></input>
                <button onClick={this.AddIteminList.bind(this)} >Add Item in List</button>
                <hr/>
                <button onClick={this.clearAllItemsinList.bind(this)} className="btn btn-primary">Clear List</button>
                <p>
                <div>
                    <h4>Key to be Used:</h4>
                    <ol>
                        <li>DEFCON 1: (Action Must be Taken by EOD) ->Assigned Color: <span style={{backgroundColor:"Red"}}>Red</span></li>
                        <li>DEFCON 2: (Action Must be Taken by EOW) ->Assigned Color: <span style={{backgroundColor:"Blue"}}>Blue</span></li>
                        <li>DEFCON 3: (Action Must be Taken by EOM) ->Assigned Color: <span style={{backgroundColor:"Yellow"}}>Yellow</span></li>
                    </ol>
                </div>
                </p>
                {/* <input ref={input=>this.searchItem=input} placeholder="Item to be searched" type="text"></input>
                <button onClick={this.SearchIteminList.bind(this)}>Search in List</button> */}
                </div>
            </div>
        );
        
    };
}