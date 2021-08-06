import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>
                WELCOME!
            </h1>
            <div>
                <Link to={'/singup'}>
                    Register
                </Link>
            </div>
            <div>
                <Link to={'/login'}>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Home;
