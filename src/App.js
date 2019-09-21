import React { useState, useEffect}from "react";
import Header from "./components/Header.js";
import axios from "axios";
import CharacterCard from "./components/CharacterCard.js";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => { 
    axios
    .get ("https://rickandmortyapi.com/character")
    .then(response =>{
      setData(rsponse.data.results);
    }) 
    .catch(error =>{
      console.log
    });
   });
   
  
  
  
  
  return (
    <main>
      <Header />
      data.map((value, key) => {
      return < CharacterCard key={key} value={value} >
      })
      <div>
      
    </main>
  );
};
