

//Basic const Button declaration
// const Button = (props) =>{
//     return <button className = 'btn'>Button from Button component</button>
// }


//const Button declaration
//destructured props 
const Button = ({color, text}) => {
    return (
        <button style={{backgroundColor: color}} className = 'btn'> {text} </button>
    )
}

export default Button