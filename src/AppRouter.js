import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "module/ScrollToTop";
import { Login, Home, AuthRedirect } from "page";

const AppRouter = () => {
    return (
        <div className="AppRouter">
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        {/*api 전체 리스트 페이지*/}
                        <Route path="/list/:apilist" />
                        {/*특정api 조회 페이지*/}
                        <Route path="/list/:apiname" />
                        {/*api 추가페이지*/}
                        <Route path="/list/add" />
                        <Route path="/authredirect" component={AuthRedirect} />
                    </Switch>
                </ScrollToTop>
            </Router>
        </div>
    );
};

export default AppRouter;
