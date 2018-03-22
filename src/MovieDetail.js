import React, { Component } from 'react';
import styled from 'styled-components';
import { Poster } from './Movie';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'; 
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'; 

class MoviesDetail extends Component {

  state = {
    movie: [] 
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=ab8356e075fc49f45bcecd2802a2c5dd`);
      const movie = await res.json();
      console.log(movie)
      this.setState({
        movie
      })
    } catch(err) {
      console.log(err);
    }
  }

  render() {
      const { movie } = this.state;
    return (
        <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title}>
            <MovieInfo>
            <Overdrive id={movie.id}>
                <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
            </Overdrive>
                  <div>
                    <h1>{movie.title}</h1>
                    <h3>{movie.release_date}</h3>
                    <p>{movie.overview}</p>
                  </div>
            </MovieInfo>
        </MovieWrapper>
    
    );
  }
}

export default MoviesDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;