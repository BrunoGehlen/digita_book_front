import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyAcount from "./pages/MyAcount"

import MiniDrawer from "./components/UI/Menu"

const Routes = () => {
  return (
    <>
      <MiniDrawer></MiniDrawer>
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
