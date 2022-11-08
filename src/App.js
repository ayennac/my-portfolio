import './App.css';


import Header from './components/Header'

import Button from './components/Button'

//Using JS and variables above the return function
const name = 'Brad';

function App() {
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

export default App;
