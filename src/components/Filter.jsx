import './styles.css';

const Filter = ({filterinput}) => {
    return (
        <>
            <input type='text' placeholder='Search by Title' className='input-field' onChange={ e => filterinput("title", e.target.value)}/>
            <input type='text' placeholder='Search by Rating' className='input-field' onChange={ e => filterinput("rating", e.target.value)}/>
        </>
    )
}

export default Filter;