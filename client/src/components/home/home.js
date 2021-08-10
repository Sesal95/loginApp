import React from 'react';
import DashBoard from '../dashBoard/dashBoard';
import Login from '../login/login';

const Home = () => {
    const isAuth  = localStorage.getItem('jwt') || false;

    return (
        <div>
            {isAuth ? <DashBoard /> : <Login />}
        </div>
    )
}

export default Home;
