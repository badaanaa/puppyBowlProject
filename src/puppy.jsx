import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useParams } from "react-router-dom";

function Puppy() {
  const [pup, setPuppy] = useState({});
  const params = useParams();
  useEffect(() => {
    fetchPuppies();
  }, []);
  async function fetchPuppies() {
    let response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/" +
        params.id
    );
    let puppies = await response.json();
    setPuppy(puppies);
    console.log(puppies);
  }
  if (pup.data === undefined) {
    return <div>loading</div>;
  } else {
    return (
      <table id="puppies">
        <thead>
          <th>Name</th>
          <th>Breed</th>
          <th>Status</th>
          <th>Photo</th>
        </thead>

        <tr className="pup">
          <td>{pup.data.player.name}</td>
          <td>{pup.data.player.breed}</td>
          <td>{pup.data.player.status}</td>
          <td>
            <img src={pup.data.player.imageUrl} />{" "}
          </td>
        </tr>
      </table>
    );
  }
}
export default Puppy;
