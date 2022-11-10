import Task from './Task'


const Tasks=({tasks, onDelete, onToggle}) =>{
    
    return (
        <>
        {tasks.map((task) => (<Task key = {task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    )
}

//Each child in a list should have a unique key prop with a unique id


export default Tasks