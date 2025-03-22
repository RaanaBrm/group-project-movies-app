import React from "react";
import { Boxes } from "./components/ui/background-boxes";
import Navbar from "./components/navbar/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider"


import { Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './context/MoviesContext';
import Home from './pages/home/home';
import Movies from './pages/all movie/movies';
import Movie from './pages/movie/movie';
import Add from './pages/add/add';
import Aboutus from './pages/about us/aboutus';

import Wrapper from "./components/container/container"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative w-full overflow-x-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Navbar className="top-2" />
        <Boxes className="fixed top-0 left-0 w-full h-full opacity-60" />
        <Wrapper>
          <MoviesProvider> {/* Wrap the routes with the MoviesProvider */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/add" element={<Add />} />
              <Route path="/movie/:id" element={<Movie />} />
              <Route path="/aboutus" element={<Aboutus />} />
            </Routes>
          </MoviesProvider>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;

