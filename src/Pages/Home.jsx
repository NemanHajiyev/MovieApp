import React, { useState } from 'react'
import '../Css/Home.css'
import { useEffect } from 'react';
import { getPopularMovies, searchMovies } from '../Services/Api'
import MovieCard from '../Components/MovieCard';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch (error) {
                console.log(error)
                setError("Error movie...")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        if (loading) return;
        setLoading(true);

        try {
            const searchResult = await searchMovies(searchQuery);
            console.log(searchResult)
            setMovies(searchResult)
            setError(null)
        }
        catch (err) {
            console.log(err)
            setError("Failed to search movies ...")
        }
        finally {
            setLoading(false)
        }

    }

    return (
        <div className='home'>
            <div className='search-box'>
                <input
                    type="text"
                    placeholder='Search Movies...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='search-btn' onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div className='movie-grid'>

                {error && <div className='error-message'>{error}</div>}

                {loading ? <div className='loading'>Loading...</div> :
                    movies?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }

            </div>
        </div>

    )
}

export default Home
