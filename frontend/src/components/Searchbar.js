import React, {useState} from 'react'
import GetAnime from './GetAnime'
import ConstGeneral from "../constants/ConstGeneral";

const Searchbar = () => {
    const [anime, setAnime] = useState("")
    const [animeResult, setAnimeResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(ConstGeneral.API_URL + '/anime/anime', {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain'},
          body: JSON.stringify(anime),
        })
        const data = await response.json()
        setAnimeResult(data.data)
    };

  return (
    <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={anime} onChange={(event) => setAnime(event.target.value)} />
                <button type="button" onClick={() => setAnime("")}>Clear</button>
            </form>
            {animeResult !== null && (
                animeResult ? <GetAnime animeResult={animeResult} /> : animeResult.message
            )}
    </div>
  )
}

export default Searchbar