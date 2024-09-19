import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return(
        <>
        <div className='nav-box'>
            <Link to='/'>Home </Link>
            <Link to='/login'>login </Link>
            <Link to='/users'>Users </Link>
        </div>
        </>
    )
}
export default Navbar