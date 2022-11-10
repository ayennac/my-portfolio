import { FaTimes } from  'react-icons/fa'

//imported FaTimes like a react component 
//
const Task = ({ task, onDelete, onToggle}) =>{
    return (

        /* Below is a good expression for active/inactive states of CSS. adds the reminder class if task reminder is true*/

        <div className = {`task ${task.reminder ? 'reminder': ''}`} onDoubleClick ={()=> onToggle(task.id)}>
            <h3>{task.text} <FaTimes onClick ={()=>onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task