import './App.css';
import Header from './MyComponents/Header';
import { AddTodo } from './MyComponents/AddTodo';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useEffect, useState } from 'react';

function App() {

  let initTodo;
  //
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    //converts a JavaScript object or value to a JSON string
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I'm onDelete for todo", todo);

    //this way in React we cannot Delete The Contents..
    //let index = todos.indexOf(todo);
    //todos.splice(index,1);

    //This Way in React We Delete the Contents..
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    //localstorage for store data dynamically set
    //converts a JavaScript object or value to a JSON string
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("im adding Todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    //Add a Todos List 
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    console.log("itsworking addTodooooo");
  }
 
  // Declare a new state variable, which we'll call "todos"..
  const [todos, setTodos] = useState(initTodo);

  //Data fetching, setting up a subscription, and manually -> 
  //-> changing the DOM in React components are all examples ->
  //-> of side effects. 
  //and help to save data after refresh
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <div className='main-cont'>
        <Header tittle="My ToDos" />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
      </div>
    </>
  );
}

export default App;