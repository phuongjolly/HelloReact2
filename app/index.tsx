import * as React from "react";
import * as ReactDOM from "react-dom";
import {TodoList} from "./todoList";

interface Person {
    id: number;
    name: string;
    age: string;
}

interface AppState {
    data?: Person[];
    query?: string;
}

interface TableRowProps {
    data: Person;
}

export class App extends React.Component<{}, AppState> {
    state = {
        data:
            [
                {
                    "id":1,
                    "name":"Foo",
                    "age":"20"
                },

                {
                    "id":2,
                    "name":"Bar",
                    "age":"30"
                },

                {
                    "id":3,
                    "name":"Baz",
                    "age":"40"
                }
           ],
        query: ""

    };

    searchQueryChange(value: string) {
        console.log("Hello" + value);
        this.setState({query: value.toLowerCase()})

    }
    render() {
        /** var rows = [];

        for (var i = 0; i < this.state.data.length; i++) {
            rows.push(<TableRow data={this.state.data[i]} key={this.state.data[i].id} />)
        } **/

        /*return (
            <div>
                <Header/>
                <input type="text" onChange={(event)=>this.searchQueryChange(event.target.value)}/>
                <table>
                    <tbody>
                    {this.state.data
                        .filter(person => +person.name.toLowerCase().indexOf(this.state.query) >= 0)
                        .map(person => <TableRow key={person.id} data={person}/>)}
                    </tbody>
                </table>
            </div>
        );*/
        return <TodoList/>
    }

}

export class Header extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

export class TableRow extends React.Component<TableRowProps,{}> {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));