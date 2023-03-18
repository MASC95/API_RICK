import axios from "axios";
import React, { useEffect,useState } from "react";
import { Cards } from "./CARDS/Cards";
import { endpoints } from "./ENDPOINTS/endpoints";
import {List} from './CARDS/List'

export const Navbar = () => {
useEffect(()=>{
  const fetch=async()=>{
    try {
      const character=await axios.get(endpoints.getCharacter)
      console.log(character.data.results)
    } catch (error) {
      alert(error)
    }
  }
  fetch()
},[])

  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <form class="d-flex input-group w-auto">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span class="input-group-text text-white border-0" id="search-addon">
        <i class="fas fa-search"></i>
      </span>
    </form>
  </div>
</nav>
<div class="container-fluid">
  <div className="row">
    <div className="col-4">
        <h1>PERSONAJE</h1> 
        <Cards/>
    </div>
    <div className="col-8">
    <h1>CONTENIDO DE PERSONAJES</h1> 
    <List/>
    </div>

  </div>
</div>
    </div>
    
  );
};

/*export default Navbar; */