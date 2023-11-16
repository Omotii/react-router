
import './styles.css';

const Header = ({prop, movieDropDownBtn}) => {

    return (
        <>
            <header className='header'>
                <h1><span>CINEMA</span>Show</h1>
                <form>
                    {prop}
                </form>
                <div className='drop-down-btn' onClick={movieDropDownBtn}>Click to Add Movie to the List</div>
            </header>
        </>
    )
}

//{prop} is a component
//{movieDropDownBtn} is a function

export default Header;