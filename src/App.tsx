import React from "react";
import { Route, Switch } from "react-router-dom";

import { URL } from './common/constants';

import { CatchedPockemon } from "./features/CatchedPockemon";
import { Footer } from "./features/Footer";
import { Header } from "./features/Header";
import { MainPage } from "./features/MainPage";
import { PockemonInfo } from "./features/PockemonInfo";

export const App = (): React.ReactElement => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path={URL.mainPage}>
                    <MainPage />
                </Route>
                <Route exact path={URL.pockemonInfo}>
                    <PockemonInfo />
                </Route>
                <Route exact path={URL.catchedPockemon}>
                    <CatchedPockemon />
                </Route>
            </Switch>
            <Footer />
        </>
    );
};
