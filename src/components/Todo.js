import React from 'react'

const Todo = ({todo, onDelete}) => {
  

  return (
    <div className='todo p-3 mb-2 bg-secondary text-align-center mx-auto'>
        <div className='d-flex justify-content-between rounded-p1' style={{width:'100%', justifyContent: 'right'}}>
          <input className='form-check-input d-flex' style={{width:'25px', height:'25px',justifyContent:'left',textDecoration:'line-through'}} type="checkbox" value='' id="checked"/>
          <h4>{todo.text}</h4>
          <h4>{todo.description}</h4>
          <h4>{todo.date}</h4>
          <button className='btn btn-danger' onClick={()=> onDelete(todo.id)}>x</button>
    </div>
    </div>
    
  )
}

export default Todo