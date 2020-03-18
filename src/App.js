// Import React components
import React, { Component } from "react";

// Import children components
import MenuItemContainer from "./menuItem/components/MenuContainer";
import "./App.scss";
import { Route } from "react-router-dom";

// ###### Import Material UI components #########
// Import the Grid components
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AuthenticatedRoute from "./auth/components/AuthenticatedRoute";
import Header from "./header/Header";
import SignUp from "./auth/components/SignUp";
import SignIn from "./auth/components/SignIn";
import SignOut from "./auth/components/SignOut";
import ChangePassword from "./auth/components/ChangePassword";
import AlertDismissible from "./auth/components/AlertDismissible";

import MenuItemContainer from "./menuItem/components/MenuContainer";
import OrderList from './order/components/orderList';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

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
        
        {/* <MenuCont></MenuCont> */}
        {/* ######## The Content of the Page #############files // add the grid  to the page */}

        {/* Return all components for the home page */}
        <AuthenticatedRoute
          user={user}
          path="/"
          render={() => (
            <div>
              <Grid container direction="column">
                <Grid item container spacing={2}>
                  <Grid item xs={0} sm={1} />
                  <Grid item xs={11} sm={4}>
                    <Paper>
                      <h1> This is where the orders will be</h1>
                    </Paper>
                  </Grid>
                  <Grid item xs={0} sm={6}>
                    <Paper>
                      {/* adding the menu container components  */}
                      <MenuItemContainer
                        menuItems={this.state.menuItems}
                        setMenuItems={this.setMenuItems}
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={1} sm={1} />
                </Grid>
              </Grid>

              {/* <ReportApp /> */}
            </div>
          )}
        ></AuthenticatedRoute>
      </React.Fragment>
    );
  }
}

export default App;
