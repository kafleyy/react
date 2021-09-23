import './App.css';
import Header from './MyComponents/Header';
import {Todos} from "./MyComponents/Todos";
// import TodoItem from "./MyComponents/TodoItem.js";
import {Footer} from './MyComponents/Footer';

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
    <Todos/>
    <Footer/>
    </>
    );
}

export default App;
