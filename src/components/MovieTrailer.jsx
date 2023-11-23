import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './styles.css'

const MovieTrailer = ({movies}) => {

    const { id } = useParams();
    const movieSearch = movies.find( movie => movie.title === id)

    return (
        <>
            <header className='header trailer-header'>
            <h1><span>CINEMA</span>Show</h1>
            <h2><span>{movieSearch.title}</span> Trailer</h2>
            </header>
            <main className='trailer-frame-container'>
                <iframe width="680" height="420" src={movieSearch.trailer.replace('watch?v=', 'embed/')} title={movies.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div><p>{movieSearch.description}</p></div>
            </main>
            <div className='back-to-home'><Link to='/' id='back-home'>Back to Home</Link></div>
        </>
    )
}

export default MovieTrailer;