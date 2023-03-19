import { useEffect, useState } from "react";
import axios from "axios";
import { endpoints } from "../ENDPOINTS/endpoints";

export const List = ({ characterList }) => {
  const [characterIdsName, setCharacterIdsName] = useState();
  const [characterLists, setCharacterLists] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const characters = await axios.get(endpoints.getCharacter);
        console.log(characters.data.results);
        setCharacterLists(characters.data.results);
      } catch (error) {
        alert(error);
      }
    };
    fetch();
  }, []);
  const onCharacterClick = (characterId) => {
    /*console.log(characterId)*/
    setCharacterIdsName(characterId);
  };
  console.log(characterIdsName);
  return (
    <div style={{display:'flex',
                flexWrap:'wrap',
                justifyContent:'center'}} className='ListCharacter'>
      {characterLists.map((character) => {
        return (
          <div className="card m-5" style={{ width: "12rem" }}>
            <img
              src={character.image}
              className="card-img-top"
              alt="Chicago Skyscrapers"
            />
            <div className="card-body">
              <h5
                className="card-title"
                onClick={() => onCharacterClick(character.id)}
                key={character.name}
              >
                {character.name}
              </h5>
            </div>
            <ul className="list-group list-group-light list-group-small">
              <li className="list-group-item px-4">
                Status:<b style={{ color: "red" }}>{character.status}</b>{" "}
              </li>
            </ul>
          </div>
        );
      })}
      {/* */}
    </div>
  );
};
