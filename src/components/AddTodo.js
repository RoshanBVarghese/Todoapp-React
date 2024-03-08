import React,{useState} from "react";
import { db } from "../Firebase";
import {collection, addDoc} from "firebase/firestore";

function AddTodo(){
    const [title,setTitle]=useState("");
    const handleSubmit= async(e)=>{
        e.preventDefault();
        if (title !==""){
            await addDoc(collection(db,"list"),{
                title,
            });
            setTitle("");
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <div className="input_container">
                <input type="text" placeholder="Add Todo" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="btn_container">
                <button>Add</button>
            </div>
        </form>
    )
}

export default AddTodo;