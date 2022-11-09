

//Basic const Button declaration
// const Button = (props) =>{
//     return <button className = 'btn'>Button from Button component</button>
// }


//const Button declaration
//destructured props 
// const Button = ({color, text}) => {
//     return (
//         <button style={{backgroundColor: color}} className = 'btn'> {text} </button>
//     )
// }


///EVENTS
// Calling event functions
//# 

// const Button = ({color, text}) => {
//     //not the best way to call this because you want different Buttons to serve different functions
//     //not everything will be console.log('click)
//     const onClick = () => {
//         console.log('click')
//     }

//     return (
//         <button onClick ={onClick} style={{backgroundColor: color}} className = 'btn'> {text} </button>
//     )
// }



const Button = ({color, text, onClick}) => {
    return (
        <button onClick = {onClick} style={{backgroundColor: color}} className = 'btn'> {text} </button>
    )
}



export default Button