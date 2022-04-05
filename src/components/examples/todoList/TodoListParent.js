import React, { useState } from 'react';
import TodoList from './todoList';
import TodoForm from './todoForm';

TodoListParent.propTypes = {

};

function TodoListParent() {
    const [todoList, setTodoList] = useState([
        { id: 1, title: "abc" },
        { id: 2, title: "akf" },
        { id: 3, title: "ahi" },
    ]);

    function TodoClick(todo) {
        const index = todoList.findIndex(x => x.id === todo.id);
        if (index < 0) return;

        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    function onTodoSubmit(formValue) {
        const newTodoList = [...todoList];

        const newTodo = {
            id: newTodoList.length + 1,
            ...formValue,
        }

        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }

    return (
        <div>
            <TodoForm onTodoSubmit={onTodoSubmit} />
            <TodoList todos={todoList} onTodoClick={TodoClick} />
        </div>
    );
}

export default TodoListParent;