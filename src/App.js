import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Authorization from "./screens/Authorization/Authorization";
import Main from "./screens/Main/Main";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./redux/rootReducer";

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // chrome devtools thing
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Authorization} />
            <Route path="/mainScreen" component={Main} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
