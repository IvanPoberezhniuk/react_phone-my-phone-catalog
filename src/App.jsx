import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PhoneCatalog from './components/PhoneCatalog';
import NotFound from './components/NotFound';
import PhoneDetails from './components/PhoneDetails';
import BasketPage from './components/BasketPage';
import BasketProvider from './components/basket/BasketProvider';

const App = () => (
  <div className="App">
    <BasketProvider>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/phones/" component={PhoneCatalog} />
          <Route exact path="/phones/:phoneId" component={PhoneDetails} />
          <Route path="/basket" component={BasketPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </BasketProvider>
  </div>
);

export default App;
