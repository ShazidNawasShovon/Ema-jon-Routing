import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Shop from "./components/Shop/Shop";
import OrderReview from "./components/OrderReview/OrderReview";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter } from "react-router-dom";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Login from "./components/Login/Login";
import CreateAccount from "./Register/CreateAccount";
import ResetPassword from "./ResetPassword/ResetPassword";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Shipping from "./components/Shipping/Shipping";
function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <PrivateRoute path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <Route path="/order">
              <OrderReview></OrderReview>
            </Route>
            <PrivateRoute path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <CreateAccount></CreateAccount>
            </Route>
            <Route path="/resetPassword">
              <ResetPassword></ResetPassword>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
