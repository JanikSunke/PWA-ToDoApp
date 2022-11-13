import { createContext, useState } from "react";


export const TodoListContext = createContext([]);

export const DoneListContext = createContext([]);

export default function ListProvider(props) {
    const [todoList, setToDoList] = useState(["Dinner","Assignment"]);
    const [doneList, setDoneList] = useState(["Tesst"]);

    return (
        <TodoListContext.Provider value={[todoList, setToDoList]}>
            <DoneListContext.Provider value={[doneList, setDoneList]}>
                {props.children}
            </DoneListContext.Provider>
        </TodoListContext.Provider>
    );
}