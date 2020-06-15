import React from "react";
import ReactDOM from "react-dom";
import one from '../images/first.jpg';
import second from '../images/second.jpg';
import Home from "../guest/Home.js";
import About from "../guest/About.js";
import AdminTour from "./AdminTour.js";
export default class AdminApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showing: "home"};
        
    }
    
    login(role){
        console.log("hi");
        this.setState({showing : role});
    }
    
    tourmanagement(event){
        this.setState({showing : "tourmanagement"});
    }
    
    customermanagement(event){
        this.setState({showing : "customermanagement"});
    }
    
    about(event){
        this.setState({showing : "about"});
    }
    
    home(event){
        this.setState({showing : "home"});
    }
    
    logout(){
        this.props.logoutindex();
    }
   
    render() {
        
        var nav =<nav>
        <ul>
        <li><h3> Pacific Tours And Travels</h3></li>
        <li><a href = "#" onClick = {this.tourmanagement.bind(this)}> Tours Management</a></li>
        <li><a href = "#" onClick = {this.customermanagement.bind(this)}> Customer Management</a></li>
        <li><a href = "#" onClick = {this.about.bind(this)}> About Us</a></li>
        <li><a href = "#" onClick = {this.home.bind(this)}> Home </a></li>
        <li><a href = "#" onClick = {this.logout.bind(this)}> Logout </a></li>
        </ul>
        
        </nav>;
        
        var contents;
        
        switch(this.state.showing) {
            case  "admin" :
                contents = <Home login={this.state.showing}/>;
                break;
            case  "tourmanagement" :
                contents = <AdminTour />;
                break;
            case  "customermanagement" :
                contents = <main><h4> Customer Management Warning : Not Implemented yet </h4></main>
                break;
            case  "about" :
                contents = <About login={this.state.showing}/>;
                break;
            case  "home" :
                contents = <Home login={this.state.showing}/>;
                break;
            default :
                contents = <main><h4> Warning something went wrong </h4></main>
                break;
        }
        
        
        return <div>
        
        {nav}
        
        {contents}
            </div>
            }
}
ReactDOM.render(<AdminApp />, document.getElementById("root"));

