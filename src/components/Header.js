const Header = () => {
    return (
        <h1>Task Tracker</h1>
    )
}


export default Header

/*
Props can be passed into a component 
in App.js the JSX will look like this ->
    <Header title ='Hello'> 

    title is the prop

in Header.js 

you can use props as 
    {props.title}

another way to do it is setting the defualt Props like so 

Header.defaultProps = {
    title: 'My portfolio',
}

declaring proptypes

improt PropTypes from 'prop-types'
Header.propTypes={
    title: PropTypes.string,
}


*/

/*
You can declare css as a variable and pass it into the function aboove

<h1 style = {heading Style}>

const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}
*/