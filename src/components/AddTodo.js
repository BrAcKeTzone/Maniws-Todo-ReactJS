import React, {useState}from "react";

const AddTodo = ({onAdd}) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if(!text || !date){    
      alert('Please complete the form')
      return;
    }
    onAdd(text, date, description);
    setText('')
    setDate('')
    setDescription('')
  };
  return (
    <form style={{padding:'10px'}} onSubmit={onSubmit} method="POST">
      <input type="date" id="Date" onChange={(e) => setDate(e.target.value) }/>
      <input type="text" placeholder="Title"  value={text} onChange={(e) => setText(e.target.value)} style={{width:'100%',height:'30px', padding:'5px'}}/>
      <input type="text" placeholder="Description"  value={description} onChange={(e) => setDescription(e.target.value)} style={{width:'100%',height:'35px', padding:'5px'}}/>
      <button className="btn" style={{backgroundColor:'green', width:'100%',margin:'10px 0'}}>Save</button>
      
    </form>)
};

export default AddTodo;
