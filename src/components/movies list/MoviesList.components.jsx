import { useSelector } from "react-redux";
import "./moviesList.style.css";
import Header from "../header/Header.component";
import SeatSelection from "../header/seatSelection/SeatSelection.component";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { setActiveMovie } from "../redux/todoSclice";

const MoviesList = () => {
  const user = useSelector((state) => state.todo.activeUser);
  const movies = useSelector((state) => state.todo.moviesList);
  const [selectedMovie, setSelectedMovie] = useState(null);
  //console.log(movies);

  const dispatch = useDispatch();
  const selectSeat = (movie) => {
    // console.log("Movie selected is:::> ",movie);
    setSelectedMovie(movie);
    dispatch(setActiveMovie(movie));
  }



  return (
    <div className="movieList">
      <Header user={user} movies={movies} />
      <div className="movie">
        {movies.map((movie, index) => {
          return (
            <div key={index}>
              <div className="cardComponent" key={index}>
                <img
                  src={movie.Poster}
                  alt="poster"
                  height="350px"
                  width="250px"
                />
                <div>
                  <span>{movie.Title}</span>
                  <p>
                    <b>Directed By </b>
                    <span>{movie.Director}</span>
                  </p>

                  <p className="imdb">
                    <b>IMDB </b>
                    <span>{movie.imdbRating}</span>
                  </p>
                </div>
                <div className="bookingButton">
                  <button onClick={()=>{selectSeat(movie)}}>Book Ticket</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {
        (selectedMovie===null)?null:<SeatSelection movie={selectedMovie} selectedListEmpty={[]}/>
      }
      
    </div>
  );
};

export default MoviesList;
