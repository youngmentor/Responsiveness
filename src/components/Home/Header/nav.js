import {Link} from "react-router-dom"
const Nav = () => {
    return (
        <div className='Nav-tab'>
            <Link to='/' className="Links">HOME</Link>
            <Link to='/products' className="Links">PRODUCTS</Link>
            <Link to='/Contact' className="Links">CONTACT</Link>
        </div>
    )
}

export default Nav