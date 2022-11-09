import './App.css';


import Header from './components/Header'

import Button from './components/Button'

//Using JS and variables above the return function
const name = 'Brad';

function App() {
  const onClick = () =>{
        console.log('Click')
  }
  return (
    <div className="App">

      {/*Header is declared as a component and imported from the components folder */}
      <div className ='container'>
        <Header />
      </div>

      <h1>Hello {name}</h1>

      {/* JS operations can be done in line with the curly braces */}
      <p>{1 + 1}</p>

      {/*one way to initializate a button*/}
      <button className = 'btn'>Button 1</button>

      <Button color = 'green' text ='Hello'/>
      <Button color = 'blue' text = 'Add' onClick = {onClick} />


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
