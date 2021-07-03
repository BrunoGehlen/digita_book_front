import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyAcount from "./pages/MyAcount"
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login"></Route>
        <Route exact path="/register"></Route>
        <Route exact path="/acount">
          <MyAcount />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
