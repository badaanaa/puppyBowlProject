import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [puppy, setPuppy] = useState([]);
  useEffect(() => {
    fetchPuppies();
  }, []);
  async function fetchPuppies() {
    let response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players"
    );
    let puppies = await response.json();
    setPuppy(puppies.data.players);
  }
  return (
    <div className="App">
      <table id="puppies">
        <thead>
          <th>Name</th>
          <th>Breed</th>
          <th>Status</th>
          <th>Photo</th>
          <th> action</th>
        </thead>
        {puppy.map((pup) => {
          return (
            <tr className="pup" key={pup.id}>
              <td>{pup.name}</td>
              <td>{pup.breed}</td>
              <td>{pup.status}</td>
              <td>
                <img src={pup.imageUrl} />{" "}
              </td>
              <td>
                <a href={"/puppy/" + pup.id}>view</a>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
