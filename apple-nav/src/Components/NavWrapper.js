import React from 'react';
import { Link } from 'react-router-dom';

class MainNav extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    render() {
        return(
            <div>
                <Link to='/'>Home</Link>
                <Link to='/mac'>Mac</Link>
                <Link to='/ipad'>iPad</Link>
                <Link to='/iphone'>iPhone</Link>
                <Link to='/watch'>Watch</Link>
                <Link to='/tv'>TV</Link>
                <Link to='/music'>Music</Link>
                <Link to='/support'>Support</Link>
            </div>
        )
    }
}

export default MainNav;