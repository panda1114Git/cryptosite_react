// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { HomePage } from '../pages/HomePage';
import { LatestDrop } from '../pages/LatestDrop';
import { ZipCodesPage } from '../pages/ZipCodesPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/zipcodes' component={ZipCodesPage} />
                <Route path='/drop' component={LatestDrop} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </Fragment>
    </BrowserRouter>
);