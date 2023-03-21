import React, { useState, useEffect } from "react";
import "./App.css";
/*import Navbar from './components/Navbar'*/
import { Navbar } from "./components/Navbar";
function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  let { info, results } = fetchedData;
  /*info es para la información de las páginas (PAGINATION)
   results es para visualizar los componentes de las cards*/
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
