import React from 'react'

export default function Todo(props) {
    return (
        <div className="container mt-5">
            <ul className="list-group">
                <li className="list-group-item">
                    <p className="fw-bold">{props.todo.sno}. {props.todo.title}</p>
                    <p className="">{props.todo.desc}</p>
                    <div className="btn btn-danger w-100 mt-1" onClick={()=>props.onDelete(props.todo)}>Delete</div>
                </li>
            </ul>
        </div>
    )
}
