import './styles.css';

const MovieCard = ({title, type, description, posterURL, rating}) => {
    return (
        <>
            <section>
                <div className='movie-img'>
                    <img src={posterURL} alt='movie-stan' />
                </div>
                <div className='movie-content'>
                    <h2>{title}</h2>
                    <p><span>{type}</span></p>
                    <p>{description}</p>
                    <p><span>Rating:</span> {rating}</p>
                </div>
            </section>
        </>
    )
}

export default MovieCard;