import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuthanicated,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            isAuthanicated ? (
                <Redirect to="/dashbord" />
            ) : (
                    <Component {...props} />
                )
        )} />
    );

const mapStateToProps = (state) => ({
    isAuthanicated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);