const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type = 'text' placeholer='Add Task' />
            </div>
            <div className='form-control'>
                <label>Day & Time </label>
                <input type = 'text' placeholer='Add Day & Time' />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type = 'checkbox' />
            </div>
            <input className = 'btn btn-block' type = 'submit' value = 'saveTask' />
        </form>
    )
}

export default AddTask