import { FaTimes } from  'react-icons/fa'

//imported FaTimes like a react component 
//
const Task = ({ task, onDelete}) =>{
    return (
        <div className = 'task'>
            <h3>{task.text} <FaTimes onClick ={()=>onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task