import * as React from "react";
import {TodoItem} from "./todoItem";


interface Props{
    data: TodoItem;
    onSetCompleted(isCompleted: boolean);
}

export class TodoListItem extends React.Component<Props, {}>{

    isCompleted(){
        this.props.onSetCompleted(!this.props.data.isComplete);
    }
    render(){
        return (
            <div>
                <div key={this.props.data.id}>
                    <p>{this.props.data.title}</p>
                    <p>{this.props.data.content}</p>
                </div>
                <div className="ui checkbox">
                    <input type="checkbox" name="example" checked={this.props.data.isComplete} onChange={()=> this.isCompleted()} key={this.props.data.id}/>
                    <label>Done</label>
                </div>
            </div>
        );
    }
}