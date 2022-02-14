import React from 'react'
import {Todoitems} from './Todoitems';

export const Todos = (props) => {
    let TodosStyle = {
        
        background: "rgb(12,19,26)",
        width: "100vw",
     }
    return (
        <div className='container p-4 ' style={TodosStyle}>
            <h4 className='text-center my-3 py-3 text-success '>TODOS List</h4>
            <div className="TodosCont">
                {   //map() function and return JSX from the callback function
                    props.todos.length === 0? <h4 className='text-success'>No Todos To Display..!</h4> :
                    props.todos.map(
                        (todo) => (
                            <Todoitems todo = {todo} key = {todo.sno} onDelete = {props.onDelete} />
                        )
                    )
                }
            </div>
        </div>
    )
}