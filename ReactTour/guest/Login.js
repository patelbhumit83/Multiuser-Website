import React from "react";
import ReactDOM from "react-dom";
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role : "login"};
        this.state = {email : "", pass : ""};
        }

    login(role){
        console.log("hi");
        this.setState({role : role});
    }



    emailchange(event) {
        this.setState({email : event.target.value});
    }

    passchange(event) {
        this.setState({pass : event.target.value});
    }

    btnclick() {

    var that = this;

    fetch('/login', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password : this.state.pass
            })
        }).then(function(response) {
            console.log('Request status code: ', response.statusText, response.status, response.type);
            if(response.status == 200)
            {
            return response.json();
          }
          else {
            var info = `response statusText ${response.statusText}`;
            return Promise.reject(info);
          }
        })
        .then(function(data) {
            console.log(data);
            that.setState({role: data.role});
          switch ( that.state.role) {
              case "admin" :
                  that.props.logintoguest("admin", {id:data._id, email:data.email, name : data.firstName, lastname : data.lastName});
                  break;
              case "customer" :
                  that.props.logintoguest("customer", {id:data._id, email : data.email, name : data.firstName, lastName : data.lastName});
                  break;
              default :
                  that.props.logintoguest("guest", {});

          }

        })
        .catch(function(msg){
          console.log(msg);
          alert(`Unauthorise access`);
        })



    }





    render() {

        var inputstyle = { width : 250};

        return <div>

        <main>
        <div id = "contact">
        <h3> Enter Your Credential </h3>
        <br/><br/>

        <label> Email :-</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
        <input type = "email" onChange = {this.emailchange.bind(this)} style = {inputstyle}/>
        <br/><br/>

        <label> Password :-</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <input type = "password" onChange = {this.passchange.bind(this)} style = {inputstyle}/>
        <br/><br/><br/>
        <button onClick = {this.btnclick.bind(this)}> Login </button>

        </div>
            </main>

            </div>
            }
}
ReactDOM.render(<Login />, document.getElementById("root"));
