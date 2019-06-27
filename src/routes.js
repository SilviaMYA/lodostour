//Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'

//Components
import App from './App'
import Home from './Components/Content/Home'
import About from './Components/Info/About'
import Contact from './Components/Info/Contact'
import Page404 from './Components/Info/Page404'



const AppRoutes = () => 

<App>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Page404} />
    </Switch>
</App>

export default AppRoutes;
