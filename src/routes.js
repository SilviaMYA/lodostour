//Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'

//Components
import App from './App'
import Home from './Components/Content/Home'
import Contact from './Components/Info/Contact'
import InboxContact from './Components/Info/InboxContact'

import CityFound from './Components/Content/CityFound'

import Page404 from './Components/Info/Page404'
// import insertContactForm from './insertContactForm'
// /insertContactForm


const AppRoutes = () => 

<App>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/city_found/:cityName/:codeCountry" component={CityFound} /> {/*:cityName  will be the param */}
        
        <Route exact path="/inbox_contact" component={InboxContact} />

        {/* <Route exact path="/insertContactForm" component={insertContactForm} /> */}
        <Route component={Page404} />
    </Switch>
</App>

export default AppRoutes;
