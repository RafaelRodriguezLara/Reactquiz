import React from 'react';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import Start from './components/Start';
import Quiz from './components/Quiz'; 

export default class Router extends React.Component{
    render(){

        return(
            <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Start}></Route>
            <Route exact path='/quiz' component={Quiz}></Route>
        </Switch>
            </BrowserRouter>

        )
    }
}