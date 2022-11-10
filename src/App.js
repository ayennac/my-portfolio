import './App.css';

//https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=3214s

import { useState } from 'react'


import Header from './components/Header'

import Button from './components/Button'

import Tasks from './components/Tasks'

//Using JS and variables above the return function
const name = 'Brad';

function App() {

  const onClick = () =>{
        console.log('Click')
  }


  /* This function is deleting the tasks on the UI but not in the server */
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  /* */
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id ===id ? {...task, reminder: !task.reminder}: task))
  }

  /*State is immutable. You can't use 'tasks.push()' to update tasks. Everytime you update tasks it sends task again to change state*/
  /*Task is here rather than in the component tasks because we ultimately will use the data of tasks everywhere in the app. 
  By putting it in the component tasks. we limit it to just tasks.js. 
  */
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
    <div className="App">

      {/*Header is declared as a component and imported from the components folder */}
      <div className ='container'>
        <Header />
        <h1>Hello {name}</h1>

      {/* JS operations can be done in line with the curly braces */}
      <p>{1 + 1}</p>

      {/*one way to initializate a button*/}
      <button className = 'btn'>Button 1</button>

      <Button color = 'green' text ='Hello'/>
      <Button color = 'blue' text = 'Add' onClick = {onClick} />
      <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      </div>

      


    </div>
  );
}

/*

// the following is a class declaration of a component rather than a function declaration
// this replaces the function App above 

import React from 'react'

class App extends React.Component {
  render () {
    return <h1> hello from a class</h1>
  }
}
*/

/*
Keep in mind what you want in the global state and 
what can be handed down as props from the global state
to the components

--> for example, we have the tasks data in App.js but to delete the task
  we will have to click an icon all the way in Task.js. 
  We can create a delete function at the app.js level and pass it down to Task.js 
*/

export default App;
