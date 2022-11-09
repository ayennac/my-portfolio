import Task from './Task'

const Tasks=({tasks}) =>{
    
    return (
        <>
        {tasks.map((task) => (<Task key = {task.id} task={task.text}/>))}
        </>
    )
}

//Each child in a list should have a unique key prop with a unique id


export default Tasks