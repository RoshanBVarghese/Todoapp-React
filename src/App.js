import React, {useEffect, useState} from "react";
import { db } from "./Firebase";
import Title from "./components/Title";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { collection,query,onSnapshot,doc,updateDoc,deleteDoc } from "firebase/firestore";

function Todoapp() {
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    const q=query(collection(db,"list"));
    const unsub=onSnapshot(q,(querySnapshot)=>{
      let todosArray=[];
      querySnapshot.forEach((doc)=>{
        todosArray.push({...doc.data(),id:doc.id});
      });
      setTodos(todosArray);
    });
    return ()=>unsub();
  },[]);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "list", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "list", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "list", id));
  };
  return(
    <div className="todo">
      <div>
        <Title/>
      </div>
      <div>
        <AddTodo/>
      </div>
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  )
}

export default Todoapp;