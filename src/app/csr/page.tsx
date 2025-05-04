
'use client'

import { useEffect, useState } from "react";
import { Todo } from "../interfaces/todo";

export default function CSR() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const fetchTodos = () => {
        // CSR
        const fetchTodosAsync = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await res.json();
            setTodos(data);
        }
        fetchTodosAsync();
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <>
            {
                todos.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    todos.map((todo) => (
                        <div key={todo?.id}>
                            <p>
                                {todo.id}: {todo.title}
                            </p>
                        </div>
                    ))
                )
            }
        </>
    );
}
