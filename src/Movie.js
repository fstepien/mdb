import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({movie}) => (
	<div>
        <Link to={`/${movie.id}`}>
        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt=""/>
        </Link>
	</div>
);

export default Movie;

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
	}),
	desc: PropTypes.string
};
        
export const Poster = styled.img`
box-shadow: 0 0 35px black;`;