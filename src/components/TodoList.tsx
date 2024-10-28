import React from 'react'
import TodoItem from './TodoItem';

export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function fetchTodos() {
    try {
        const res = await fetch('http://localhost:3001/todos');
        const todos: Todo[] = await res.json();
        return todos;
    } catch (error) {
        if(error instanceof Error) {
            console.error('Error:', error.message);
        }
    }
}

const TodoList = async () => {
    const todos = await fetchTodos();

    let content;
    if(!todos || todos.length === 0) {
        content = <div>No 리스트가 없습니다.</div>;
    } else {
        const sortedTodos = todos.reverse();

        content = (
            <>
                {sortedTodos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </>
        )
    }

  return content
}

export default TodoList