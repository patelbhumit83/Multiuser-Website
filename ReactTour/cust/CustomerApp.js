import React from "react";
import ReactDOM from "react-dom";
import one from '../images/first.jpg';
import second from '../images/second.jpg';
import Home from "../guest/Home.js";
import About from "../guest/About.js";
import Comingtours from "../guest/Comingtours.js";
export default class CustomerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showing : "home"};
        
    }
    
    login(role){
        console.log("hi");
        this.setState({showing : role});
    }
    
    comingtours(event){
        this.setState({showing : "comingtours"});
    }
    
    mytours(event){
        this.setState({showing : "mytours"});
    }
    
    about(event){
        this.setState({showing : "about"});
    }
    
    home(event){
        this.setState({showing : "home"});
    }
    
    logout(event){
        this.props.logoutindex();
    }
    
    
    
    render() {
        
        var nav =<nav>
        <ul>
        <li><h3> Pacific Tours And Travels</h3></li>
        <li><a href = "#" onClick = {this.comingtours.bind(this)}> Coming Tours</a></li>
        <li><a href = "#" onClick = {this.mytours.bind(this)}> My Tours</a></li>
        <li><a href = "#" onClick = {this.about.bind(this)}> About Us</a></li>
        <li><a href = "#" onClick = {this.home.bind(this)}> Home </a></li>
        <li><a href = "#" onClick = {this.logout.bind(this)}> Logout </a></li>
        </ul>
        
        </nav>;
        
        var contents;
        
        switch(this.state.showing) {
            case  "customer" :
                contents = <Home login={this.state.showing}/>;
                break;
            case  "comingtours" :
               contents = <Comingtours Login={this.state.showing} />;
                break;
            case  "mytours" :
                contents = <main><h4> My Tours Warning : Not Implemented yet </h4></main>
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

ReactDOM.render(<CustomerApp />, document.getElementById("root"));


