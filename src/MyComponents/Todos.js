import React from 'react'
import Todo from "./Todo"
import AddTodo from './AddTodo'
import NoTodos from './NoTodos'

export default function Todos(props) {
    return (
        <>
            <div className="container mt-5 mb-5 pt-4 pb-5">
                <AddTodo addTodo={props.addTodo} />
                {props.todos_list.length === 0 ?
                    <NoTodos /> :
                    props.todos_list.map((todo) => {
                        return (<Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />)
                    })
                }
            </div>
        </>
    )
}
