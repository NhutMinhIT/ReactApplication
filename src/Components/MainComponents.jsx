import React, { Component } from 'react';
import Home from './HomeComponents';
import Menu from './MenuComponents';
//import DishDetail from './DishdetailComponent';
import Header from './HeaderComponents';
import Footer from './FooterComponents';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );

    }
}

export default Main;