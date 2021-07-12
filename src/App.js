import './App.css';
import Header from "./MyComponents/Header"
import Todos from "./MyComponents/Todos"
import Footer from "./MyComponents/Footer"
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

  let initTodo;
  if (localStorage.getItem("todos_list") == null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos_list"));
  }


  const addTodo = (title, desc) => {
    console.log("Add Todo", title, desc);
    let len = todos_list.length;
    let sno = 0;
    len === 0 ? sno = 1 : sno = todos_list[len - 1].sno + 1;
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos_list, newTodo]);

  }


  const onDelete = (todo) => {
    setTodos(todos_list.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos_list", JSON.stringify(todos_list));
  }
  // let todos_list = [
  // using state hook to store todo in todo_list array
  const [todos_list, setTodos] = useState(initTodo);


  // saving todos to local storage
  useEffect(() => {
    localStorage.setItem("todos_list", JSON.stringify(todos_list));
  }, [todos_list])


  return (
    <>
      <Router>
        <Header title="Todos App" search={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Todos todos_list={todos_list} onDelete={onDelete} addTodo={addTodo} />
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
