import * as React from "react";
import * as ReactDOM from "react-dom";
import {TodoItem} from "./todoItem";
import {TodoItemEditor} from "./todoItemEditor";
import {TodoListItem} from "./todoListItem";

interface AppSate {
    data?: TodoItem[],
    query?: boolean,
    filterType: string
}

export class TodoList extends React.Component<{}, AppSate> {

    state: AppSate = {
        data: [{
            id: 1,
            title: "Cooking",
            content: "Rice, fish, vegetables, etc...",
            isComplete: false
        }
        ],

        query: false,
        filterType: "All"
    };

    addItems(item: TodoItem){
        var currentMaxLength = this.state.data.length;
        item.id = this.state.data[currentMaxLength - 1].id + 1;

        this.setState({
            data: this.state.data.concat([item]),
        });
    }

    setCompleted(item: TodoItem, isComplete: boolean){
        const data = this.state.data;
        const index = data.indexOf(item);

        this.state.data[index].isComplete = isComplete;

        this.setState({data});
    }

    getItems(){
        if(this.state.filterType == "All"){
            return this.state.data;
        }
        else if(this.state.filterType == "Completed"){
            return this.state.data.filter(item => item.isComplete);
        }
        else
            return this.state.data.filter(item => !item.isComplete);
    }
    render(){
        return(
            <div>
                <div className="ui buttons">
                    <button className="ui button" onClick={()=> this.setState({filterType: "All"})}>All
                    </button>
                    <button className="ui button" onClick={()=> this.setState({filterType: "Completed"})}>Two</button>
                    <button className="ui button" onClick={()=> this.setState({filterType: "Not Completed"})}>Three</button>
                </div>

                <div>
                    <TodoItemEditor onCreated={item => this.addItems(item)}/>
                    <div className="ui raised segment" style={{'width': '400px'}}>

                        {this.getItems().map(
                            item => <TodoListItem data={item} key={item.id}
                                                  onSetCompleted={isComplete => this.setCompleted(item, isComplete)}/>)}
                    </div>
                </div>
            </div>
        );
    }
}