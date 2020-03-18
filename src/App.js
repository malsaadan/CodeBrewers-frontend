import React, { Component } from "react";
import "./App.scss";
import { Route } from "react-router-dom";

import AuthenticatedRoute from "./auth/components/AuthenticatedRoute";
import Header from "./header/Header";
import SignUp from "./auth/components/SignUp";
import SignIn from "./auth/components/SignIn";
import SignOut from "./auth/components/SignOut";
import ChangePassword from "./auth/components/ChangePassword";
import AlertDismissible from "./auth/components/AlertDismissible";
import MenuItemContainer from "./menuItem/components/MenuContainer";
import OrderList from './order/components/orderList';



class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      alerts: [],
      menuItems: [],
      orders:[]
    };
  }



  setUser = user => this.setState({ user });
  clearUser = () => this.setState({ user: null });
  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] });
  };

  setOrders = (orders) => {
    console.log(`UPDATED`)
    this.setState({ orders: [...this.state.orders] });
    console.log(`WHAT HAPPEN M8`,this.state.orders.name)
  }



  setMenuItems = menuItems => {
    this.setState({ menuItems: menuItems });
  };




  render() {
    const { alerts, user } = this.state;

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible
            key={index}
            variant={alert.type}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route
            path="/sign-up"
            render={() => <SignUp alert={this.alert} setUser={this.setUser} />}
          />
          <Route
            path="/sign-in"
            render={() => <SignIn alert={this.alert} setUser={this.setUser} />}
          />
          <AuthenticatedRoute
            user={user}
            path="/sign-out"
            render={() => (
              <SignOut
                alert={this.alert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path="/change-password"
            render={() => <ChangePassword alert={this.alert} user={user} />}
          />
        </main>
<>
        <MenuItemContainer
        orders={this.state.orders} 
        setOrders={this.setOrders}
        menuItems={this.state.menuItems}
        setMenuItems={this.setMenuItems}
        />

        <OrderList 
        orders={this.state.orders} 
         setOrders={this.setOrders}
        setMenuItems={this.setMenuItems}
        menuItems={this.state.menuItems} />
        </>
        
      </React.Fragment>
    );
  }
}

export default App;
