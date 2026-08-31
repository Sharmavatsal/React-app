// PascalCasing
function Message(){
    // JSX: JavaScript XML
    const name = "jon snow";
    if (name)
        return <h1>Hello {name}</h1>; // here this code is converted to the suitable javascript code by itself in React
    return <h1>Hello World</h1>; // here this code is converted to the suitable javascript code by itself in React
}

export default Message;