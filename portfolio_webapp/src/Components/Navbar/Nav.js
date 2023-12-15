import './Nav.css'
import { Link } from 'react-router-dom';
import { Component } from 'react';


class Nav extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <nav>
                    <Link to="/"><img src="https://static.vecteezy.com/system/resources/thumbnails/003/651/643/small/v-letter-logo-icon-for-business-and-company-vector.jpg" alt="logo"></img></Link>
                    
                    <div>
                        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><Link className='active' to="/">Home</Link></li>
                            <li><Link to="/Bio">Bio</Link></li>
                            <li><Link to="/Awardscertificate">Awards/Certificate</Link></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
            </>
        )
    }
}
export default Nav
