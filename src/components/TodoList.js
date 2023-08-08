import React from 'react'

export default function TodoList(props) {
  
  return (
    <>
    
    <div className='my-3 container text-center'>
         {
           props.list.map((element,idx) => 
           <ol key ={idx} className="list-group">
           <li className="list-group-item d-flex justify-content-between align-items-start">
           <div className="ms-2 me-auto">
             <div className="fw-bold">Title: [{element.title}] </div>
             <p>
               DueDate: <i>({element.DueDate})</i>
             </p>
             <p>
             Description: {element.desc}
             </p>
             
           </div>
           </li>
           <div className="container">
            <button type="button" className="btn btn-primary btn-sm my-3 " onClick={()=>{console.log("fc");props.deleteTodo(idx)}}>Delete</button>
            <button type="button" className="btn btn-primary btn-sm mx-3" onClick={()=>{console.log("fc");props.updateTodo(idx)}}>Update</button>
           </div>
           
           </ol>
           
           )
         }
         
    </div>
    </>
  )
}
