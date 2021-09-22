import './App.css';
import Header from './MyComponents/Header.js';
import Todos from "./MyComponents/Todos.js";
import TodoItem from "./MyComponents/TodoItem.js";
import Footer from './MyComponents/Footer.js';

function App() {
  let todos = [
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
  ]
  return(
    <>
    <Header/>
    <Todos todos = {Todos}/>
    <TodoItem/>
    <Footer/>
    </>
    );
}

export default App;
