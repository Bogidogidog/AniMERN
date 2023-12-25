import React from "react";

const getAnime = ({ animeResult }) => {
  
    function showDetails() {}
    return (
        <div id="animelist">
            <div className="container text-center">
                <h2> Anime list</h2>
                <div className="row justify-content-md-center">
                    {animeResult.map((anime, i) => (
                        <div key={i} className="col-md-3">
                            <div className="card w-75 mb-3">
                                <div className="card-header bg-transparent">
                                    <h4 className="text-center">
                                        {anime.title}
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <div className="mx-auto text-center">
                                        <button
                                            className="btn"
                                            onClick={() => showDetails(anime)}
                                        >
                                            <img
                                                src={anime.images.jpg.image_url}
                                                alt={anime.title}
                                                className="w-50"
                                            />
                                        </button>
                                    </div>
                                    <p>Episodes: {anime.episodes}</p>
                                    <p>Rating: {anime.rating}</p>
                                    <p>Score: {anime.score}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default getAnime;
