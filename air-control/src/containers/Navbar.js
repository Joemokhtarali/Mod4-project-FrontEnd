import React from "react";
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'react-bootstrap/Navbar' // css 
import 'bootstrap/dist/css/bootstrap.min.css' // bootstrap
import LoginForm from '../components/LoginForm'
import Signup from "../components/Signup";
import "../App.css";
import Test from "../components/Test";

const NavBar = (props) => {
  return (


    <div className="navbar" >
      <div className="top">
        <div className="home-button">
          <img src="https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22330-deciduous-tree-icon.png" alt='Air Control' className="logo" />
        </div>
      
          <NavLink style={{marginLeft:'10px'}} to='/'> Home </NavLink>
          {/* <NavLink style={{marginLeft:'10px'}} to='/test'> Test </NavLink> */}
          <Route exact path="/test" component={Test}/>
          
          {(props.currentUser) ? null : <NavLink style={{marginLeft:'10px'}} to='/login'> Login </NavLink>}
          {(props.currentUser) ? null : <NavLink style={{marginLeft:'10px'}} to='/signup'> Signup </NavLink>}
            <Route exact path="/login" render={() => <LoginForm setUser={props.setUser} />} />
            <Route exact path="/signup" render={() => (!props.currentUser) ? <Signup setUser={props.setUser} /> : null} />
            {props.currentUser ? <Link onClick={props.logout} >Logout</Link> : null}
            
        
      </div>
      </div>
  )
}

export default NavBar;

// return (
    //   <div className="navbar">
    //     <div className="top">
    //       <HomeButton />
    //       <SearchBar handleChange={props.handleChange} searchTerm={props.searchTerm}/>
    //       <UserControls logout={props.logout} currentUser={props.currentUser} />
    //     </div>
    //     <div className="bottom">
    //       <FilterBar cardMode={props.cardMode} listMode={props.listMode}/>
    //     </div>
    //   </div>
    // )