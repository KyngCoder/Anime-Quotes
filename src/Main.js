import React from "react";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Main({ searchTerm, category }) {

  const [animeList, setAnimeList] = useState([]);

  const getAnime = async () => {
    if (category === "random") {
      const animes = await axios
        .get(`https://animechan.vercel.app/api/quotes`)
        .then((response) => setAnimeList(response.data));
    } else if (category === "character") {
      const animes = await axios
        .get(
          `https://animechan.vercel.app/api/quotes/character?name=${searchTerm}`
        )
        .then((response) => setAnimeList(response.data));
    } else {
      const animes = await axios
        .get(
          `https://animechan.vercel.app/api/quotes/anime?title=${searchTerm}`
        )
        .then((response) => setAnimeList(response.data));
    }
  };

 
const checkState = () => {

}

<<<<<<< HEAD
  useEffect(() => {
    getAnime();
  }, [searchTerm]);
=======

import React from 'react'
import {v4} from 'uuid'
import {useEffect,useState} from 'react'
import Card from './Card'
import axios from 'axios'

function Main({searchTerm,category}) {

    const [animeList,setAnimeList] = useState([])

    const getAnime = async () => {
      
            if(category === 'random'){
            const animes = await axios.get(`https://animechan.vercel.app/api/quotes`) 
            .then(response => setAnimeList(response.data))
            }else if(category === 'character'){
                const animes = await axios.get(`https://animechan.vercel.app/api/quotes/character?name=${searchTerm}`) 
                .then(response => setAnimeList(response.data))
            }else {
                const animes = await axios.get(`https://animechan.vercel.app/api/quotes/anime?title=${searchTerm}`) .then(response => setAnimeList(response.data))
                
            }
        
       
      }
    
      useEffect(()=>{
       getAnime()
      },[searchTerm])
>>>>>>> 7c89be7aa4a7f2b21698abcd1b4d058c5c7b8b68
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-6">
      {animeList.map(anime => {
        return(
          <Card
            key={v4()}
            name={anime.anime}
            quote={anime.quote}
            character={anime.character}
          />
        )
      })}
    </div>
  );
}

<<<<<<< HEAD
export default Main;
=======
export default Main
>>>>>>> 7c89be7aa4a7f2b21698abcd1b4d058c5c7b8b68
