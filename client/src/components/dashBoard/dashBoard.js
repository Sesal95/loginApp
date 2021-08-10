import React, { useReducer } from 'react';
import DashBoardView from './dashBoardView';
import ListContext from '../../contexts/listContext';

const renderLogin = () => {
    return window.location.pathname = "/signin"
}

const listReducer = (data, action) => {
    const actionType = action.type || 'gitHub';
    switch (actionType) {
        case 'gitHub':
            return {
                ...data,
                isGH: true,
            }
        case 'favs':
            return {
                ...data,
                isGH: false,
            }
        default:
            break;
    }
}

const DashBoard = () => {
    const isAuth = localStorage.getItem('jwt') || false;

    const [listData, dispatchList] = useReducer(listReducer, 
        {
            isGH: true,
        })
    
    const data = {
        isGH: listData.isGH,
        dispatchList,
    }

    if (!isAuth) {
        renderLogin();
    }

    return (
        <div>
            <ListContext.Provider value={data}>
                <DashBoardView />
            </ListContext.Provider>
        </div>
    )
}

export default DashBoard;
