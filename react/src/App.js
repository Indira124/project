import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import User from "./components/user.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';
import EventBus from "./common/EventBus";
import home from "./components/home";
import menulist from './menu/menulist';
import item from './menu/item';
import ButtonAddRemoveItem from "./ButtonAddRemoveItem";
import ButtonCartCount from "./ButtonCartCount";
import cart from './components/cart';
import EmptyCart from "./components/Emptycart";
import payment from "./components/payment";
import Notify from "./components/Notify";
import Forgetpassword from "./components/Forgetpassword";



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); 
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser} = this.state;

    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand navbar-light bg-transparent shadow">

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLxlpmGLUn8j7Lgig3K0I3L5Pop2lkZq70A&usqp=CAU" alt="" width="40" height="34" class="ml-1 mt-1 rounded-circle" />
            <Link to={"/"} className="navbar-brand">
              People's mart
            </Link>

            
            <div className="navbar-nav mr-auto">
              {!currentUser && (
            
                <div className="head" >
                <h3 class="heading"><center>Welcome to the store</center></h3>
                <h6 class="blockquote-footer">best sales & best vendors</h6>
                </div>
                
              )}
            </div>

            <div className="navbar-nav mr-auto">
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    Products
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/user" component={User} />
            </Switch>
          </div>
          <Route exact path="/home" component={home} />
          <Route exact path="/menulist" component={menulist} />
          <Route exact path="/item" component={item} />
          <Route exact path="/buttonaddremoveitem" component={ButtonAddRemoveItem} />
          <Route exact path="/buttoncartcount" component={ButtonCartCount} />
          <Route exact path="/cart" component={cart} />
          <Route exact path='/emptycart' component={EmptyCart} />
          <Route exact path="/payment" component={payment} />
          <Route exact path="/paymentsucessful" component={Notify} />
          <Route exact path="/forgetpassword" component={Forgetpassword} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);