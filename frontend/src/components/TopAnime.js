import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ConstGeneral from "../constants/ConstGeneral";


const TopAnime = () => {
    const user = useLocation().state?.user;
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedAnime, setSelectedAnime] = useState(null);

    useEffect(() => {
        fetchList();
    }, []);

    async function fetchList() {
        try {
            const response = await fetch(ConstGeneral.API_URL + "/anime/animetop");
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
            const data = await response.json();
            console.log(data);
            if (data) {
                setList(data.data);
            } else {
                throw new Error("Invalid data format");
            }
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    function showDetails(anime) {
        setSelectedAnime(anime);
    }

    return (
        <div id="animelist">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div className="container text-center">
                    <h2>Top Anime list</h2>
                    <div className="row justify-content-md-center">
                        {list.map((anime, i) => (
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
            )}
        </div>
    );
};

export default TopAnime;
