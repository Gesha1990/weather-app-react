import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// Pages
import HomePage from './components/HomePage/index';
import CityWeatherPage from './components/CityWeatherPage/index';


class App extends Component {
    render() {
        return (
          <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route  path="/:city">
                        <CityWeatherPage />
                    </Route>
                </Switch>
        );
    }
}

export default withRouter(App);
