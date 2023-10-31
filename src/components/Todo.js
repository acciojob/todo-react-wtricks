import React from 'react'

export default function Todo() {
    const [todo, setTodo] = React.useState([])
    const input = React.useRef()

    const addTodo = () => {
        if (input.current == '') {
            return
        }

        setTodo(p => ([...p, { text: input.current, id: Math.random() }]))
        input.current = ''
    }

    const removeTodo = (_item) => {
        setTodo(todo.filter(item => item.id != _item.id))
    }

    return (
        <>
            <h2>To-Do List</h2>
            <div className="top-container">
                <input 
                    type="text"
                    placeholder="Task"
                    id="input"
                    name="input"
                    ref={input}
                />

                <button 
                    type="button"
                    onClick={addTodo}
                >Add Todo</button>
            </div>

            <ul>
                {todo.map((item) => (
                    <li key={item.id}>
                        <span>{item.text}</span>
                        <button 
                            type="button"
                            onClick={() => removeTodo(item)}
                        >Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}