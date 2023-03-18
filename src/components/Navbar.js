import axios from "axios";
import React, { useEffect,useState } from "react";
import { Cards } from "./CARDS/Cards";
import { endpoints } from "./ENDPOINTS/endpoints";
/*import {List} from './CARDS/List'*/

export const Navbar = () => {
const [characterList, setCharacterList] = useState([])
const [characterIdsName,setCharacterIdsName ] = useState()
useEffect(()=>{


    
  const fetch=async()=>{
    try {
      const characters = await axios.get(endpoints.getCharacter)
      console.log(characters.data.results)
      setCharacterList(characters.data.results);
    } catch (error) {
      alert(error)
    }
  }
  fetch()
},[]) 
const onCharacterClick = (characterId) =>{
 /*console.log(characterId)*/
 setCharacterIdsName(characterId);
}
console.log(characterIdsName)
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <form className="d-flex input-group w-auto">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text text-white border-0" id="search-addon">
        <i className="fas fa-search"></i>
      </span>
    </form>
  </div>
</nav>
<div className="container-fluid">
  <div className="row">
    <div className="col-4">
        <h1>PERSONAJE</h1> 
        {characterIdsName}
        <Cards/>
    </div>
    <div className="col-8">
    <h1>CONTENIDO DE PERSONAJES</h1> 
   
    {/* <List/> */}
     { characterList.map((character)=>{
        return(
            <p onClick={()=> onCharacterClick(character.id)} key={character.name}>{character.name}</p>
            
        )
     })

     }
    
    </div>

  </div>
</div>
    </div>
    
  );
};

/*export default Navbar; */


