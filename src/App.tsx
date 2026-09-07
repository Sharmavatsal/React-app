// this is for list display and operations...

/*import ListGroup from "./components/ListGroup";

function App(){
  let items = [
          'New York',
          'San Francisco',
          'Tokyo',
          'London',
          'Paris'
      ];

      const handleSelectItem = (item: string) => {
        console.log(`Selected item: ${item}`);
      }

  return <div><ListGroup items={items} heading="cities" onSelectItem={handleSelectItem}/> </div>
}

export default App;*/

// this is for alert display and operations...

import Alert from "./components/Alert";
import Button from "./components/Button";

function App(){
  return( <div>
    <Alert>
        Hello <span>world!</span> This is an alert message. 
    </Alert>

    <Button>My button...</Button>
  </div>// here span is used as we used ReactNode in Alert component so we can pass any type of data to the component like string, number, boolean, object, array, etc. ReactNode is a type that represents any valid React child element. It can be a string, number, boolean, null, undefined, React element, or an array of React nodes.
    
   );
  }

export default App;
