import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";
import "./index.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  // console.log(puppies);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div className='App'>
      {/* && checks if both are ture/= */}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <img src={featuredPup.image} alt={featuredPup.name} />
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {featuredPup && <p>{featuredPup.name}</p>}
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              console.log("puppy id", puppy.id);
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
