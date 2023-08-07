import React from 'react';
import myImage from './HIM.jpg';
import {useState, useEffect} from "react";
import MyComponent from './components/MyComponent';
import AestheticSection from './components/AestheticSection';





 function App() {
  const [aesthetic, setAesthetic] = useState("Nostalgic");
  const [secondary, setSecondary] = useState("Timeless");
  const [name, setName] = useState("");
  console.log(aesthetic);

  useEffect(() => {
    console.log('The fasion era aesthetic right now');
  }, [aesthetic, secondary]);
  
  useEffect(() => {
    console.log('Clothes are Timeless all the time');
  }, [secondary]);

  const items = [
    { id: 1, name: 'Rick Owen', profession: 'Designer'},
     { id: 2, name: 'Yeezy', profession: 'Shoes'},
   { id: 3, name: 'Burberry', profession: 'Cologne'},
   { id: 4, name: 'Gold', profession: 'Accessorie'},
  { id: 5, name: 'Essentials', profession: 'Streetwear'},
  ];
 

return (
    <React.Fragment>
      <h1>Welcome to Khalil App!</h1>
      <MyComponent message="Fashion also contributes to my overall satisfaction as well" />
    <AestheticSection aesthetic={aesthetic} setAesthetic={setAesthetic} />

      <h3>
        Current secondary aesthetic is {secondary}.
      </h3>
      <button onClick={() => setSecondary("Timeless")}>
        Fashion
      </button>
    
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - {item.profession}</li>
        ))}
      </ul>
      <img src={myImage} alt="My Image" />
      </React.Fragment>
    
  );
}

export default App;


