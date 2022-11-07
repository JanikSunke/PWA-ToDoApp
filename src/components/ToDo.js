import DragableList from "./DragableList";
import React, { useState } from "react";

function ToDo() {
  const [toDoList, setToDoList] = useState(["Hey","You"]);

  function addItem(event) {
    event.preventDefault();
    setToDoList([...toDoList, event.target.input.value])
  }

  return (
    <div>
      <DragableList title={"To Do"} list={toDoList} setList={setToDoList}/>
      <form onSubmit={addItem}>
        <input type="text" name="input" ></input>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
  }
  
  export default ToDo;
  