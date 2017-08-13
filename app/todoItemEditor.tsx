import * as React from "react";
import * as ReactDOM from "react-dom";
import {TodoItem} from "./todoItem";

interface Props{
    onCreated(item: TodoItem);
}


export class TodoItemEditor extends React.Component<Props, TodoItem> {

    state: TodoItem = {
        id: 1,
        title: "",
        content: "",
        isComplete: false
    }

    updateName(title: string) {
        console.log("name is: " + title);

        this.setState({title});
    }

    updateContent(value: string) {
        console.log("content is: " +value );

        this.setState({content: value  });
    }

    addTotoItem(){
        this.props.onCreated(this.state);
        this.setState({
            title: "",
            content: ""
        })
    }

    render() {
        return (
            <div>
                <div className="ui input">
                    <input type="text"
                           placeholder="Name"
                           value={this.state.title}
                           onChange={(event)=>this.updateName(event.target.value)}/>
                </div>
                <div className="ui input">
                    <input type="text"
                           placeholder="Content"
                           value={this.state.content}
                           onChange={(event)=>this.updateContent(event.target.value)}/>
                </div>
                <button className="ui button" onClick={()=>this.addTotoItem()}>
                    Add
                </button>
            </div>
        );
    }
}