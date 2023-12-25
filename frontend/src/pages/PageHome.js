import React, {useState} from 'react'
import TopAnime from '../components/TopAnime'
import Searchbar from '../components/Searchbar'

const PageHome = () => {
    const [status, setStatus] = useState(false)

    function handleClick() {
        console.log(status)
        setStatus(!status)
        console.log(status)
    }
  return (
    <div>
        <button onClick={ ()=> handleClick()}>Top Animes</button>
        <Searchbar></Searchbar>
        {(status)?<TopAnime></TopAnime>:<div>nope</div>}
    </div>
  )
}

export default PageHome