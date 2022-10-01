import React from 'react'

const Header = ({title, addTodo, showForm}) => {
  return (
    <div className='header'>
        <h3 className='mx-auto d-flex justify-content-center' style={{color:'orange', padding:'5px'}}>{title}</h3>
    </div>
  )
}

Header.defaultProps = {
    title: 'Todo List'
}

export default Header