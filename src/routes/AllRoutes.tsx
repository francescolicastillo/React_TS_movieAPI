import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MovieDetails, MoviesList, PageNotFound, Search } from '../pages/index'

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<MoviesList apiPath="movie/now_playing" title="Home"/>} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/movies/popular' element={<MoviesList apiPath="movie/popular" title="Popular"/>} />
        <Route path='/movies/top' element={<MoviesList apiPath="movie/top_rated" title="Top movies"/>} />
        <Route path='/movies/upcoming' element={<MoviesList apiPath="movie/upcoming" title="Upcoming"/>} />
        <Route path='/movies/search' element={<Search apiPath="search/movie" title="Results for"/>} />
        <Route path='/*' element={<PageNotFound title="Page not found"/>} />
      </Routes>
    </main>
  )
}
