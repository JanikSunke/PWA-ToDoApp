import React, { useState } from "react";
import { Button, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";


export default function DragableList({list, setList, onCheck, onDelete, title}) {
    const [draggedItem, setDraggedItem] = useState();

    const onDragStart = (e, index) => {
        setDraggedItem(list[index]);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
      };
    
    const onDragOver = (index) => {
        const draggedOverItem = list[index];
    
        // if the item is dragged over itself, ignore
        if (draggedItem === draggedOverItem) {
          return;
        }
    
        // filter out the currently dragged item
        let items = list.filter((item) => item !== draggedItem);
    
        // add the dragged item after the dragged over item
        items.splice(index, 0, draggedItem);
    
        setList(items)
      };


        return (
          <div>
              <h3>{title}</h3>
              <ListGroup variant="flush">
                {list.map((item, idx) => (
                  <ListGroupItem key={idx} onDragOver={() => onDragOver(idx)}>
                    <Row direction="horizontal" gap={5}>
                      <Col
                        className="rotate-x"
                        draggable
                        onDragStart={(e) => onDragStart(e, idx)}
                      >
                      <p className="m-20">|||</p>
                      </Col>
                      <Col className="m-auto">{item}</Col>
                      <Col>
                      {onCheck != null && <Button variant="light" onClick={() => onCheck(idx)}>✔</Button>}
                      </Col>
                      <Col>
                      <Button variant="light" onClick={() => onDelete(idx)}>❌</Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))}
              </ListGroup>
          </div>
        );
    }

