import React from "react"; 
import { Cards } from "./CARDS/Cards";

export const Navbar = () => {
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
        <h1>CONTENIDO DE CARDS</h1> 
        <Cards/>
    </div>
    <div className="col-8">
        <h1>LISTA DE CARDS</h1>
    </div>

  </div>
</div>
    </div>
    
  );
};

/*export default Navbar; */