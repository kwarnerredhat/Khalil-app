import React, { useState } from 'react';


    const AestheticSection = ({setAesthetic, aesthetic}) => {
        const [newAesthetic, setNewAesthetic] = useState("");
        

        const handleSubmit = (e) => {
            e.preventDefault();
            setAesthetic(newAesthetic);
            setNewAesthetic(""); 
        };

    return (
        <div>
            
            <h2>Current aesthetic is {aesthetic}</h2>

      <button onClick={() => setAesthetic("Rick Owen")}>
        Rick Owen
      </button>
      <button onClick={() => setAesthetic("Yeezy")}>
        Yeezy
      </button>
      <form onSubmit={handleSubmit}>
        <label>
          New Aesthetic:
          <input
            type="text"
            value={newAesthetic}
            onChange={(e) => setNewAesthetic(e.target.value)}
          />
        </label>
        <button type="submit">Change Aesthetic</button>
      </form>
        </div>
      
    );
};

export default AestheticSection;