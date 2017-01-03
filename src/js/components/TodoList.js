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
      default:
        return state
    }
  }

let myID = 0;
export default class TodoList extends React.Component {

  render() {
    var list = this.props;
    console.log(list)
    return (
      <div>

        <div className="container">
          <div className="row">
            <input type="text" ref={node => {this.input=node;}} />
            <button type="button" onClick={()=>store.dispatch({ type: 'ADD_TODO', text: this.input.value, id:myID++ })} >ADD</button>
            <h3>Liste des taches</h3>
            
          </div>
        </div>

      </div>

    );
  }
}

const app = document.getElementById('app');

const render = () => {
  //this.state = {todos: new Date()};
  ReactDOM.render(
    <TodoList todos={store.getState().todos} />,
  app);
}


const todoApp = combineReducers({
  todos
});

let store = createStore(todoApp)

store.subscribe(render)

