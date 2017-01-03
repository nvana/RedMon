import React from "react";
import { createStore, combineReducers } from 'redux'
import ReactDOM from "react-dom";




const todos = (state=[], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed:false
          }
        ]
      case 'REMOVE_TODO':
        console.log(action.id)
        return state.splice(1)
      default:
        return state
    }
  }

let myID = 0;
export default class TodoList extends React.Component {

  render() {
    var list = this.props;
    //console.log(list)
    /*list.map(function(objectKey, index){
      console.log(list[objectKey])
    });*/
    console.log(this.props.todos)
    return (
      <div>

        <div className="container">
          <div className="row">
            <input type="text" ref={node => {this.input=node;}} />
            <button type="button" onClick={()=>store.dispatch({ type: 'ADD_TODO', text: this.input.value, id:myID++ })} >ADD</button>
            <h3>Tasks List</h3>

            {this.props.todos.map(todo =>
              <li key={todo.id}>{todo.text}<button onClick={()=>store.dispatch({ type: 'REMOVE_TODO', id:todo.id })} >Remove</button></li>
            )}
          </div>
        </div>

      </div>

    );
  }
}

const app = document.getElementById('app');

const render = () => {
  //this.state = {todos: ""};
  ReactDOM.render(
    <TodoList todos={store.getState().todos} />,
  app);
}


const todoApp = combineReducers({
  todos
});

let store = createStore(todoApp)

store.subscribe(render)

render()
