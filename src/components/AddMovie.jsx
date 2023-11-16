import { useState } from 'react';
import './styles.css'

const AddMovie = ({addMovie}) => {

const [inputValue, setInputValue] = useState({
    title: "",
    type: "",
    description: "",
    rating: 0,
    posterURL: ""
})

const onChange = (e) => {
    const {name, value} = e.target;
    setInputValue( prev => ({...prev, [name]:value}))
}

const handleSubmit = (event) => {
    event.preventDefault();
    addMovie(inputValue);
    setInputValue({
    title: "",
    type: "",
    description: "",
    rating: 0,
    posterURL: ""
    })
}

    return (
        <form id='addMovieForm'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' placeholder='Add movie title' value={inputValue.title} onChange={onChange}/>
            <label htmlFor='type'>Movie Classification</label>
            <input type='text' id='type' name='type' placeholder='Add movie type' value={inputValue.type} onChange={onChange}/>
            <label htmlFor='description'>Description</label>
            <input type='text' id='description' name='description' placeholder='Add movie description' value={inputValue.description} onChange={onChange} />
            <label htmlFor='rating'>Rating</label>
            <input type='number' id='rating' name='rating' placeholder='Add movie rating' value={inputValue.rating} onChange={onChange}/>
            <label htmlFor='posterURL'>Movie Image</label>
            <input type='text' id='posterURL' name='posterURL' placeholder='Add image url' value={inputValue.posterURL} onChange={onChange}/>
            <button type='submit' onClick={handleSubmit} id='submit-btn'>Submit</button>
        </form>
    )
}

export default AddMovie;