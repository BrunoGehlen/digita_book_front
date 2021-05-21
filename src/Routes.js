import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login"></Route>
        <Route exact path="/register"></Route>
      </Switch>
    </>
  );
};

export default Routes;
