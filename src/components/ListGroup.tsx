import { Fragment } from "react";
// here we are using Fragment to avoid adding extra nodes to the DOM. It is a common practice in React to use Fragment when you want to return multiple elements without adding an extra div or other container element.
// in the return statement we are using <> and </> which is a shorthand for <Fragment> and </Fragment>. It is a common practice in React to use this shorthand when you want to return multiple elements without adding an extra div or other container element.
function ListGroup() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    

    return (
        <> 
        <h1>List</h1>

    <ul className="list-group">
    {items.map(item => (
        <li key={item}>{item}</li>
        ))} 
  </ul>
  </>
  );
}

export default ListGroup;