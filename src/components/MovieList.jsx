import MovieCard from './MovieCard';
import Sidepane from './Sidepane';
import './styles.css';

const MovieList = ({movies}) => {

    const sortedTitle = movies.map( item => item.title).sort();

    return (
        <>
            <main className='movie-list'>
                {movies.map( (items, i) => <MovieCard {...items} key={i} />)}
            </main>
            <div className='aside'>
                <h2><span>Available Movies</span></h2>
                {sortedTitle.map( (item, i) => <Sidepane title={item} key={i} />)}
            </div>
        </>
    )
}

export default MovieList;