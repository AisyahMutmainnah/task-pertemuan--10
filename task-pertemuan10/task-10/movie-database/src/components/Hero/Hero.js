import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";





function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");
  
   async function fetchMovie() {
    // melakukan side effect fetch data movie (API);  
    const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
  
    const data = await response.json();

    // setMovie dengan data movie hasil fetch
    setMovie(data);
  }

  useEffect(fetchMovie, []);

  console.log(movie);
  return (
    <StyledHero>
      <section>
        <div>
          <h2>{movie.Title}</h2>
          <h3>Genre: {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          
          <Button variant="primary" size="md">Watch Movie</Button>
        </div>
        <div>
          <img
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
