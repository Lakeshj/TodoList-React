import React from 'react';

export const Todoitems = ({todo, onDelete}) => {
    let pstyle= {
        color:"navy",    
    }
    let divstyle = {
        background: "darkkhaki",
        border: "0.2rem solid #ffb1b1",
        color:"darkgreen"
    }

    return (
        <div className=' py-2 px-3 Todositem1' style={divstyle}>
            <h4> 
                <span className='item1'> &#9755; &ensp;</span>
                <span>  {todo.title} </span>
            </h4>
            <p style={pstyle}>
                <span className='item1'> &#10002; &ensp;</span>
                <span className='items2'>{todo.desc}</span>
            </p>
            <button className="btn btn-sm btn-danger mx-5" 
                onClick={() => {
                    return onDelete(todo) }
                }> Delete </button>
        </div>
    )
}
