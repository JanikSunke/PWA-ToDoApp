import DragableList from "./DragableList";
import React, { useState } from "react";
import { InputGroup, Form, Button, Container } from "react-bootstrap";

function ToDo() {
  const [toDoList, setToDoList] = useState(["Dinner","Assignment"]);
  const [doneList, setDoneList] = useState(["Tesst"]);

  function addItem(event) {
    event.preventDefault();
    if (event.target.input.value !== "") {
      setToDoList([...toDoList, event.target.input.value])
    }
  }

  function moveToDone(idx) {
    setDoneList([...doneList, toDoList[idx]])
    deleteFromToDo(idx);
  }

  function deleteFromToDo(idx) {
    let tempList = toDoList.filter((_, i) => i !== idx);
    setToDoList(tempList);
  }

  function deleteFromDone(idx) {
    let tempList = doneList.filter((_, i) => i !== idx);
    setDoneList(tempList);
  }

  return (
    <Container>
      <Form onSubmit={addItem} className="m-3">
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Insert Item
        </InputGroup.Text>
        <Form.Control
          name="input"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
        <Button type="submit">Submit</Button>
      </Form>
      <hr/>
      <DragableList title={"To Do"} list={toDoList} setList={setToDoList} onCheck={(idx) => moveToDone(idx)} onDelete={(idx) => deleteFromToDo(idx)}/>
      <DragableList title={"Done"} list={doneList} setList={setDoneList} onDelete={(idx) => deleteFromDone(idx)}/>
    </Container>
  );
  }
  
  export default ToDo;
  