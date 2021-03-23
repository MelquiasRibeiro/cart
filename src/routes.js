import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Cart from './pages/cart';

export default function Routes() {
    return (
        <Switch>
            <Route path="/"  component={Cart}/>
        </Switch>
      
    )
}
