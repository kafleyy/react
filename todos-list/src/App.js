import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header.js';
import Todos from "./MyComponents/Todos.js";
import Todo from "./MyComponents/Todo.js";
import Footer from './MyComponents/Footer.js';

function App() {
  return(
    <>
    <Header/>
    <Todos/>
    <Footer/>
    </>
    );
}

export default App;
