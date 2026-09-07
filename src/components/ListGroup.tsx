import { Fragment, useState } from "react";
// here we are using Fragment to avoid adding extra nodes to the DOM. It is a common practice in React to use Fragment when you want to return multiple elements without adding an extra div or other container element.
// in the return statement we are using <> and </> which is a shorthand for <Fragment> and </Fragment>. It is a common practice in React to use this shorthand when you want to return multiple elements without adding an extra div or other container element.

interface Props {
    items: string[];
    heading: string;

    onSelectItem: (item: string) => void; // optional prop to handle item selection
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    
    
    // Hook  
    const [selectedIndex, setSelectedIndex]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(-1);
 
    //items = [];
    

    return (
        <> 
        <h1>{heading}</h1>
        {items.length === 0 && <p>No items found</p> }   
    <ul className="list-group">
    {items.map((item, index) => ( // here we are using map function to iterate over the items array and return a list item for each item in the array. The key prop is used to give each list item a unique identifier. The onClick event handler is used to log the item and index to the console when the list item is clicked.
        <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' } 
          key={item} 
          onClick={() => { setSelectedIndex(index); 
          onSelectItem(item);

          } } 
                 
          >{item}
        </li>
        ))} 
  </ul>
  </>
  );
}

export default ListGroup;