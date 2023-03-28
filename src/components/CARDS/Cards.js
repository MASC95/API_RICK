import React, { useState, useEffect } from "react";
import { getCharacters } from "./api/rickAndMortyApi";

export const Cards = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters().then(characters => setCharacters(characters));
  }, []);
  
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {characters.map(character => (
          <div className="card m-5" key={character.id} style={{ width: "18rem" }}>
            <img src={character.image} alt={character.name} />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <ul className="list-group list-group-light list-group-small">
                <li className="list-group-item px-4 position-relative">
                  Status:<b className="position-absolute badge bg-danger">{character.status}</b>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
    
}; 

export default Cards;



