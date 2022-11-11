//Each input will have it's own component level state

import { useState } from 'react'

//React DevTools will show the current state aka value of each stateful object


const AddTask = ({ onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    /*rather than passing onAdd directly into the form
    we create an onSubmit function that will prevent 
    the default behavior to do some validation.  
    */

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type = 'text' placeholer='Add Task' value ={text} onChange={(e) => setText(e.target.value)}/>
                {/*the value {text} comes from the const above  from text,setText useState
                    the value of e is the details of the event on onChange*/}
            </div>
            <div className='form-control'>
                <label>Day & Time </label>
                <input type = 'text' placeholer='Add Day & Time' value ={day} onChange ={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type = 'checkbox' checked ={reminder} value = {reminder} onChange={(e) =>setReminder(e.currentTarget.checked)} />
            </div>
            <input className = 'btn btn-block' type = 'submit' value = 'saveTask' />
        </form>
    )
}



export default AddTask