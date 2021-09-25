import './App.css';
import Header from './MyComponents/Header';
import {Todos} from "./MyComponents/Todos";
import {AddToDo} from './MyComponents/AddToDo';
// import TodoItem from "./MyComponents/TodoItem.js";
import {Footer} from './MyComponents/Footer';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);
    // deleting this way in react doesnot work
    let index = todos.indexOf(todo);
    todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

  }

  const addToDo = (title, desc) => {
    console("I am adding this to list", title, desc)
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Goto market",
      desc: "Go fast to get the job done"
    },
    {
      sno: 2,
      title: "Goto Mall",
      desc: "Go fast to get the job done"
    },
    {
      sno: 3,
      title: "Goto Park",
      desc: "Go fast to get the job done"
    }
  ]);
  return(
    <>
    <Header />
    <AddToDo addToDo={addToDo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
    );
}

export default App;
