import * as React from "react";

export interface TodoItem {
    id: number,
    title: string,
    content: string,
    isComplete: boolean
}


//ReactDOM.render(<TodoList />, document.getElementById('root'));