import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Home } from './Home'
import { AboutMe } from './AboutMe'
import { ProjectInfo } from './ProjectInfo';
import { ToDoList } from './ToDoList2';
import { Calculator } from './Calculator';
import { Book_Reviews } from './Book_Reviews';
import { FictionalReviewsAboutMe } from './FictionalReviewsAboutMe';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
export class Header extends React.Component {
    render(){
        var user={
            skills:["HTML","CSS","Javascript","Java","JQuery","ReactJS","Angular 6"]
        };
        var projectname={
            client: "UBS",
            title: "Chrome Remediation",
            tech_used: ["HTML","CSS","Javascript","JQuery"],
            additional_tasks: ["Discovery testing", "Regression Testing", "Sanity Testing"]
        };
        return(
            <div>
          <Router>
              <div>
              <Navbar className="navbar navbar-default" bg="dark" variant="dark">
                <div className="container-fluid">
                    <Navbar.Brand>Akshay's Profile</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                            <Nav.Link><Link to="/">Home </Link></Nav.Link>
                            <Nav.Link><Link to="/AboutMe">About Me </Link></Nav.Link>
                            <Nav.Link><Link to="/projectInfo">ProjectInfo </Link></Nav.Link>
                            <NavDropdown title="WebApps" id="basic-nav-dropdown" >
                                <NavDropdown.Item ><Link to="/ToDoList">ToDoList</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/Calculator">Calculator</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to="/Book Reviews">Book Reviews</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/FictionalReviewsAboutMe">Reviews About Me</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                        {/* <li><Link to="/">Home</Link></li>
                        <li><Link to="/AboutMe">About Me</Link></li>
                        <li><Link to="/projectInfo">ProjectInfo</Link></li>
                        <li><NavDropdown title="WebApps" id="basic-nav-dropdown">
                        <li><Link to="/ToDoList">ToDoList</Link></li>
                        <li><Link to="/Calculator">Calculator</Link></li>
                        <li><Link to="/Book Reviews">Book Reviews</Link></li>
                        </NavDropdown></li> */}
                    
                </div>
                </Navbar>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/AboutMe" render={(props)=><AboutMe {...props} name={"Akshay"} initialAge={22} experience={0.8} user={user}/>}></Route>
                  <Route path="/projectInfo" render={(props)=><ProjectInfo {...props} projectname={projectname}/>}></Route>
                  <Route path="/ToDoList" component={ToDoList}></Route>
                  <Route path="/Calculator" component={Calculator}></Route>
                  <Route path="/Book Reviews" component={Book_Reviews}></Route>
                  <Route path="/FictionalReviewsAboutMe" component={FictionalReviewsAboutMe}></Route>
              </div>
          </Router>
          </div>
        );
    }   
};
