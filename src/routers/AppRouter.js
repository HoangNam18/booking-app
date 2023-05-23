import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import AboutPage from '../components/AboutPage';
import Header from '../components/Header';
import RoomListPage from '../components/RoomTypes/RoomListPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/about" component={AboutPage} />
                <Route path="/room-list" component={RoomListPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>                
    </BrowserRouter>
);

export default AppRouter;