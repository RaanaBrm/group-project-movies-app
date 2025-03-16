import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:6603/movies")
			.then((result) => {
				console.log(result.data.data.movies);
				setMovies(result.data.data.movies);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	const handleEdit = (updatedMovie) => {
		axios
			.put(`http://localhost:6603/movies/${updatedMovie.id}`, updatedMovie)
			.then((result) => {
				const updatedMovies = movies.map((movie) =>
					movie.id === updatedMovie.id ? result.data.data.movie : movie
				);
				setMovies(updatedMovies);
			})
			.catch((error) => {
				console.error("Error updating movie:", error);
			});
	};

	const handleDelete = (id) => {
		axios
			.delete(`http://localhost:6603/movies/${id}`)
			.then(() => {
				const updatedMovies = movies.filter((movie) => movie._id !== id);
				console.log(updatedMovies);
				setMovies(updatedMovies);
			})
			.catch((error) => {
				console.error("Error deleting movie:", error);
			});
	};

	const handleAdd = (newMovie) => {
		axios
			.post("http://localhost:6603/movies", newMovie)
			.then((result) => {
				setMovies((movies) => [...movies, result.data.data.movie]);
				console.log("movie added");
			})
			.catch((error) => {
				console.error("Error adding movie:", error);
			});
	};

	return (
		<MoviesContext.Provider
			value={{ movies, loading, handleDelete, handleEdit, handleAdd }}
		>
			{children}
		</MoviesContext.Provider>
	);
};
