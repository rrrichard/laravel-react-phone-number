import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';


const App = () => {
    return (
        <Router className="App__container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/add">
                    <Add />
                </Route>
                <Route exact path="/edit/:id">
                    <Edit />
                </Route>
            </Switch>
        </Router>
    );
};

// usually it's export default App;
// export default App;
// renders this component in the App.js file
ReactDOM.render(<App />, document.getElementById('app'));
