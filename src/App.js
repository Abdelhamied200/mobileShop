import { Route, Switch } from "react-router";
import "./App.scss";
import Add from "./pages/add";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={Add} />
      </Switch>
    </div>
  );
}

export default App;
