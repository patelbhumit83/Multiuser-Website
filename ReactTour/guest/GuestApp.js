import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home.js";
import About from "./About.js";
import Login from "./Login.js";
import Comingtours from "./Comingtours.js";
export default class GuestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showing: "home"};
    }

    login(role){
        this.setState({showing : role});
    }


    Homehandler(event) {
        this.setState({showing : "home"});
    }

    about(event) {
        this.setState({showing : "about"});
    }

    NewsLetterhandler(event)
    {
        this.setState({showing : "newsletter"});
    }

    loginhandler(event)
    {
        this.setState({showing : "login"});
    }

    comingtours(event)
    {
        this.setState({showing : "comingtours"});
    }

    logintoguest(role, user){
        console.log(role);
        this.props.guesttoindex(role, user);
    }

    render() {

        var nav = <nav>
        <ul>
        <li><h3> Pacific Tours And Travels</h3></li>
        <li><a href = "#" onClick = {this.comingtours.bind(this)}> Coming Tours</a></li>
        <li><a href = "#" onClick = {this.loginhandler.bind(this)}> Login </a></li>
        <li><a href = "#" onClick = {this.NewsLetterhandler.bind(this)}> NewsLetter SignUp</a></li>
        <li><a href = "#" onClick = {this.about.bind(this)}>  About us</a></li>
        <li><a href = "#" onClick = {this.Homehandler.bind(this)}> Home </a></li>
        </ul>
        </nav>;


        var contents;

        switch (this.state.showing) {
            case "guest":
                contents = <Home login={this.state.showing}/>;
                break;
            case "home":
                contents = <Home login={this.state.showing}/>;
                break;
            case "about":
                contents = <About login={this.state.showing}/>;
                break;
            case "newsletter":
                console.log(this.state.showing);
                contents = <main><h4> NewsLetter Warning : Not Implemented yet. </h4></main>
                break;
            case "login":
                contents = <Login logintoguest={this.logintoguest.bind(this)} />;
                break;
            case "comingtours":
                contents = <Comingtours Login={this.state.role} />;
                break;
            default:
                contents = <main><h4>Warning something went wrong!!!</h4></main>;
                break;
        }

        return <div>
        {nav}

        {contents}


            </div>
            }
}
ReactDOM.render(<GuestApp />, document.getElementById("root"));
