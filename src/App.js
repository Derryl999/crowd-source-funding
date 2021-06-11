import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Post from "./components/main/Posts";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route component={Home} exact path="/"></Route>
        <Route component={Login} exact path="/login"></Route>
        <Route component={Signup} exact path="/signup"></Route>
        <Route component={Post} exact path="/main"></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
