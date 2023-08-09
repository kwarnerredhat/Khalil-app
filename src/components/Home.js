import React from 'react';
import MyComponent from './MyComponent';
import AestheticSection from './AestheticSection';
import myImage from '../HIM.jpg';
  
const Home = ({ aesthetic, setAesthetic }) => {
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

      <h3>Current secondary aesthetic is Timeless.</h3>
      <button onClick={() => Home("Timeless")}>Fashion</button>

      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - {item.profession}</li>
        ))}
      </ul>
      <img src={myImage} alt="HIM"/>
    </React.Fragment>
  );
};

export default Home;
