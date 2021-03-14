import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/HeaderComponent';
import HomePage from './pages/homepage/Homepage';
import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';

const Routes = () => {
    return (
        <div className="app-container">
            <div className="main-header-container">
                <Header />
            </div>
            <div className="main-content-container">
                <Switch>
                    <Route exact path={["/", "/home"]} component={HomePage} />
                    <Route exact path="/signin" component={SignInSignUpPage} />
                </Switch>
            </div>
        </div>
    );
};

export default Routes;