import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import ModalContext from './contexts/modalContext';
import Modal from './components/modal/modal';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import DashBoard from './components/dashBoard/dashBoard';
import NotFound from './components/notFound';

import './App.css';

const modalReducer = (data, action) => {
  const actionType = action.type || 'show';
  switch (actionType) {
    case 'show':
      return {
        ...data,
        show: true,
        text: action.payload || action.text || '',
        typeMsg: action.typeMsg || '',
      }
    case 'hide':
      return { ...data, show: false };
    default:
      return data;
  }
}

const App = () => {
  const [modalData, dispatchModal] = useReducer(modalReducer,
    {
      show: false,
      text: '',
      typeMsg: '',
    });

    const mData = {
      show: modalData.show,
      text: modalData.text,
      typeMsg: modalData.typeMsg,
      dispatchModal,
    }

  return (
    <ModalContext.Provider value={mData}>
        <Switch>
          <Route exact path={'/'}> <Home /> </Route>
          <Route path={'/signin'}> <Login /> </Route>
          <Route path={'/signup'}> <Register /> </Route>
          <Route path={'/dashboard'}> <DashBoard /> </Route>
          <Route> <NotFound /> </Route>
        </Switch>
        <Modal />
    </ModalContext.Provider>
  );
}

export default App;
