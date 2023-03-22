import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cards } from "./CARDS/Cards";
import { endpoints } from "./ENDPOINTS/endpoints";
import { List } from "./CARDS/List";

//let api = `https://rickandmortyapi.com/api/character/?name`;

export const Navbar = () => { 
  const [characterList, setCharacterList] = useState([]);
  // const [characterIdsName,setCharacterIdsName ] = useState()
  let [search,setSearch] = useState("Smith");
  const onformsubmit = async (event) =>{
    event.preventDefault();
    const newApi =  `https://rickandmortyapi.com/api/character/?name=${search}` 
     const response = await axios.get(newApi);
     console.log(response.data.results);
     
     setCharacterList(response.data.results);
    
  }
  
  useEffect(() => {
    const fetch = async () => {
      try {
        const characters = await axios.get(endpoints.getCharacter);
        console.log(characters.data.results);
        setCharacterList(characters.data.results);
      } catch (error) {
        alert(error);
      }
    };
    fetch();
    
  }, []);
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <form className="d-flex input-group w-auto" onSubmit={onformsubmit}>
            
            <input 
              onChange={e=>{
                setSearch(e.target.value);
              }}
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span
              className="input-group-text text-white border-0"
              id="search-addon"
            >
              <input className="fas fa-search mx-4" type={"submit"} value="buscar..."/>
            </span>
          </form>
        </div> 
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <h1>PERSONAJE</h1>
            {/* {characterIdsName} */}
            <Cards />
          </div>
          <div className="col-8" >
            <h1 className="text-center ubuntu my-4">Rick & Morty Wiki<span className="text-primary"> Characters Ranked </span></h1>
            <List characterList={characterList} />
          </div>
        </div>
      </div>
    </div>
    
    
  );
};
