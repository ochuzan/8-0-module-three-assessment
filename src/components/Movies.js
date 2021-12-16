import { Component } from "react";
import "../App.css";

class Movies extends Component {
  constructor(){
      super();
      this.state = {
        movieData: [],
        selectedMovie: null
      }
  }

  
  fetchMovies = () => {
      fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then((data) => {
          this.setState({
              movieData: data
            })
        })
    }
    
    componentDidMount = () => {
        this.fetchMovies();
    }

    handleDropdownChange = (e) => {
        this.setState({
            selectedMovie: e.target.value
        })
    }

    render(){
        let movieOptions = this.state.movieData.map((movie) => {
            return <option key={movie.id} value={movie.title}>{movie.title}</option>
        })

        let selectedMovieObj = this.state.movieData.find(movie => {
            return movie.title === this.state.selectedMovie;
        })

    return (
      <div className="movies">
        <main>
            <h1>Select a Movie</h1>

            <div>
                <select onChange={this.handleDropdownChange}>
                    <option></option>
                    {movieOptions}
                </select>
            </div>

            <div>
                <h3>{this.state.selectedMovie? "Title:": null} {selectedMovieObj?.title}</h3>
                {selectedMovieObj ? (<img src={selectedMovieObj.image} alt="Selected movie"/>) : null}
                <h3>{this.state.selectedMovie? "Release Date:": null} {selectedMovieObj?.release_date}</h3>
                <h3>{this.state.selectedMovie? "Description:": null} {selectedMovieObj?.description}</h3>
            </div>
        </main>
      </div>
    );
  }
}

export default Movies;