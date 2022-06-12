import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainPage from './pages/MainPage';
import NewEntry from './pages/NewEntry';
import EditData from './pages/EditData';
import Details from './pages/Details';
import NotFoundPage from './pages/NotFound';

import Layout from './components/UI/Layout';
import Graphic from './pages/Graphic';

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/all' />
          </Route>

          <Route path='/all' exact>
            <MainPage />
          </Route>

          <Route path='/new-entry' exact>
            <NewEntry />
          </Route>

          <Route path='/edit-entry/:id'>
            <EditData />
          </Route>

          <Route path='/appointment-detail/:id'>
            <Details />
          </Route>

          <Route path='/graphic' exact>
            <Graphic />
          </Route>

          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </>
  )
}

export default App;