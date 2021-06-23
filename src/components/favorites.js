import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Movie.css';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
//import SearchBox from '../components/SearchBox';
//import AddFavourites from '../components/AddToFavourites';
import RemoveFavourites from '../components/RemoveFavourites';


const Favorite = () => {
    const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [favourites, setFavourites] = useState([]);
    const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
    const saveToLocalStorage = (items) => {
		//localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
		console.log(JSON.parse(localStorage.getItem('react-movie-app-favourites')));
	};


	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		setFavourites(movieFavourites);
	}, []);
    console.log(JSON.parse(localStorage.getItem('react-movie-app-favourites')));
    return (
        <div className='container-fluid movie-app'>
    <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
            </div>
            );
};

export default Favorite;