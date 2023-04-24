import React, { useState } from 'react';

const Movie = () => {
    const [movies, setMovies] = useState([]);



    function fetchMoviesHandler() {
        fetch('https://swapi.dev/api/films').then(response => {
            return response.json();
        }).then(data => {
            setMovies(data.results);
        })
    }



    return <React.Fragment>
        <button onClick={fetchMoviesHandler}>click me</button>
{movies.map(data=>{
    return <div>
        <h1>{data.title}</h1>
        <i>Directed by: {data.director} Produced by: {data.producer} </i>
        <br></br>
        <strong>{data.release_date}</strong>
        <p>{data.opening_crawl}</p>
        
    </div>
})}
    </React.Fragment>


};

export default Movie;