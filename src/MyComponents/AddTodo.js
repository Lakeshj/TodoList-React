import React, { useState } from 'react';
export const AddTodo = ({addTodo}) => {
    let addtodostyle = {
        background: "rgb(42,19,37)"
    }

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const Submit = (e) => {
        //prevent page from reload 
        e.preventDefault();
        
        if (!title || !desc) {
            alert("Title And Desc Cannot be Blank..");
        }
        else{
            addTodo(title, desc);
            // title and desc value will be blank after adding Todo
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div>
            <form onSubmit={Submit} className='container my-4 py-2 text-secondary' style={addtodostyle}>
                <h4 className='text-center'>Add Todo</h4>
                <div className="form-group py-2 ">
                    <label htmlFor="todoTitle" >Todo Title</label>
                    <input type="text" value={title} onChange={
                        (e) => {
                            setTitle(e.target.value)
                        }
                    }
                        className="form-control" id="todoTitle" />
                </div>
                <div className="form-group py-2">
                    <label htmlFor="todoDesc" >Description</label>
                    <input type="text" value={desc}
                        onChange={
                            (e) => {
                                setDesc(e.target.value)
                            }
                        }
                        className="form-control" id="todoDesc" />
                </div>
                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}
