import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
import Portal from "./Portal";

const AppRouter: React.FC<RouterProps> = ({}) => {
    return (
        <Router>
            <Link to="/">Portal</Link>
            <Link to="/resize-test">Resize Test</Link>
            <hr />
            <Route exact path="/" component={Portal} />
            <Route path="/resize-test" component={App} />
        </Router>
    );
};

export interface RouterProps {}

export default AppRouter;
