import React from "react";
import { Route, Redirect } from "react-router-dom";
// context
import { UserContext } from "App";

function AuthRoute({ component: Component, render }) {
    return (
        <UserContext.Consumer>
            {(user) => (
                <Route
                    render={(props) =>
                        user.accessToken ? (
                            render ? (
                                render(props)
                            ) : (
                                <Component user={user} {...props} />
                            )
                        ) : (
                            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                        )
                    }
                />
            )}
        </UserContext.Consumer>
    );
}

export default AuthRoute;
