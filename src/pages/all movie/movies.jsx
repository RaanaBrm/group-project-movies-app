import React, { Suspense, useContext } from 'react';
import Navbar from '../../components/navbar/navbar';
import Wrapper from '../../components/container/container';
import styled from "./movies.module.css";
const Singlemovie = React.lazy(() => import('../../components/movie/singlemovie'));

import { MoviesContext } from "../../context/MoviesContext";

function Movies() {
    const { movies, loading, handleDelete } = useContext(MoviesContext);

    return (
        <Wrapper>
            <div>
                <Navbar />
                <div className="px-4 py-8 m-auto max-w-screen-xl mx-auto">
                    {loading ? (
                        <div className="text-white text-center text-lg">Loading...</div>
                    ) : (
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-6 px-4 max-w-screen-xl mx-auto p-5">
                            {movies.map((movie) => (
                                <Suspense fallback={<div>Loading movie...</div>} key={movie._id}>
                                    <Singlemovie article={movie} handleDelete={handleDelete} />
                                </Suspense>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>

    );
}

export default Movies;
