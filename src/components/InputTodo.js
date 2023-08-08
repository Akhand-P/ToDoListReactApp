import React from 'react'
import TodoList from './TodoList'
import {useState} from 'react'

export default function InputTodo() {
  const [Editable,setEditable] = useState(-1)
  const [data,setData] = useState([]);
  const [todo,settodo] = useState({});
  const [title,setTitle] = useState("");
  const [duedate,setDuedate] = useState("");
  const [desc,setDesc] = useState("");
  const [addUpdate,setAddUpdate] = useState(1);
  const AddTask = ()=>{
    if(todo?.title === undefined) {alert('Enter Todo Title'); return -1;}
    else if(todo?.desc === undefined) {alert('Enter Description') ;return -1;}
    else if(todo?.DueDate===  undefined) {alert('Enter DueDate') ;return -1;}
    const temp = data
    temp.push(todo);
    setData(temp);
    settodo({})
    console.log(data);
    document.getElementById('form').reset();
    setTitle("");
    setDuedate("");
    setDesc("");
  }
  const captureTitleField = (e)=>{
    setTitle(e.target.value)
    settodo({...todo,
        [e.target.name] : e.target.value
    })
   
  }
  const captureDuedateField = (e)=>{
    setDuedate(e.target.value)
    settodo({...todo,
        [e.target.name] : e.target.value
    })
    
  }
  const captureDescField = (e)=>{
    setDesc(e.target.value)
    settodo({...todo,
        [e.target.name] : e.target.value
    })
    
  }
  
  const updateTodo = (index)=>{
     setEditable(index);
     console.log(data[index])
     setTitle(data[index].title);
     setDuedate(data[index].DueDate);
     setDesc(data[index].desc);
     setAddUpdate(2);
     
  }
  const EditTodo = ()=>{
    console.log(Editable)
    let temp = data;
    temp[Editable].title = title;
    temp[Editable].DueDate = duedate;
    temp[Editable].desc = desc;
    setData(temp);
    setEditable(-1);
    settodo({})
    setTitle("");
    setDuedate("");
    setDesc("");
    setAddUpdate(1);
  }
  const deleteTodo = (index)=>{
      let temp = data;
      temp.splice(index,1);
      setData(temp);
      settodo({})
      
  }

  return (
    <div className='container'>
    <form id="form">
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Task title</label>
        <input type="text"  value = {title} name = "title" className="form-control" id="exampleFormControlInput1" onChange = {captureTitleField} placeholder="Enter title"/>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Due Date</label>
        <input type="date" value = {duedate} name = "DueDate" className="form-control" id="exampleFormControlInput2"  onChange = {captureDuedateField} placeholder=""/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea value = {desc} className="form-control" name = "desc" id="exampleFormControlTextarea1"  onChange = {captureDescField} rows="3"></textarea>
        </div>
    </form >
        <div className="mb-3">
            <button type="button" className="btn btn-primary" onClick={addUpdate ===1?AddTask:EditTodo}>{addUpdate ===1 ?"Add Task":"Update Task"}</button>
            
            

        </div>
        <h1 className='text-center my-3' style={{backgroundColor:"black",margin: "0px -12px", color: "white",borderRadius:"10px"}}> Your ToDos</h1>
        <TodoList list={data} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        

        </div>
  )
}
