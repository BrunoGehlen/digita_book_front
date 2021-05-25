import LoginPage from './pages/LoginPage'
import Menu from './components/UI/Menu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register">
            <LoginPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/auth">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
