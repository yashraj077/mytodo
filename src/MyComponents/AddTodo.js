import React, { useState } from 'react';

export default function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if (!title || !desc){
            alert("Title or Description cannot be blank.")
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <>
            <div className="d-flex justify-content-center pt-3">
                <button type="button" className="btn btn-primary w-25" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Todo
                </button>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header justify-content-center">
                            <h5 className="modal-title" id="exampleModalLabel">Add Todo</h5>
                        </div>
                        <form onSubmit={submit} className="d-flex flex-column justify-content-center mt-2 p-2">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">Description </label>
                                <textarea type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                            </div>
                            <button type="submit" className="btn btn-success w-25 m-auto" data-bs-dismiss="modal">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
