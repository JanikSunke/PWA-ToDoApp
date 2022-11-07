import React, { useState } from "react";


export default function DragableList({list, setList, title}) {
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
              <ul>
                {list.map((item, idx) => (
                  <li key={item} onDragOver={() => onDragOver(idx)}>
                    <div
                      className="drag"
                      draggable
                      onDragStart={(e) => onDragStart(e, idx)}
                    >
                    <p className="burgermenu">|||</p>
                    </div>
                    <span className="content">{item}</span>
                  </li>
                ))}
              </ul>
          </div>
        );
    }