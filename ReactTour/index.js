import React from "react";
import ReactDOM from "react-dom";
import one from './images/first.jpg';
import second from './images/second.jpg';
import AdminApp from "./admin/AdminApp.js";
import GuestApp from "./guest/GuestApp.js";
import CustomerApp from "./cust/CustomerApp.js";
import Login from "./guest/Login.js";

export default class App extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {role: "guest", userinfo : ""};
    }
    
    login(role){
        this.setState({role : role});
    }
    
    guesttoindex(role, user) {
        this.setState({role : role, userinfo : user})
    }
    
    logoutindex(){
        this.setState({role : "guest", userinfo : {} })
    }
    
    render() {
        
        switch (this.state.role){
            
            case "admin" :
                return <AdminApp logoutindex={this.logoutindex.bind(this)} />;
                break;
                
            case "guest" :
                return <GuestApp guesttoindex={this.guesttoindex.bind(this)} />;
                break;
                
            case "customer" :
                return <CustomerApp logoutindex={this.logoutindex.bind(this)} />;
                break;
                            
            default :
                return <h3> Warning </h3>
            
        }
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
