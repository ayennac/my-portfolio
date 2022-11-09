
import { useState } from 'react'


//State is immutable. You can't use 'tasks.push()' to update tasks
//Everytime you update tasks

const Tasks=() =>{
    const[tasks, setTasks] = useState([{
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
            },
            {
            id: 2,
            text: 'Meating at school',
            day: 'Feb 6th at 1:30 pm',
            reminder: true,
            }
        ]
        )
    return (
        <>
        {tasks.map((task) => (<h3 key = {task.id}> {task.text}</h3>))}
        </>
    )
}

//Each child in a list should have a unique key prop with a unique id


export default Tasks