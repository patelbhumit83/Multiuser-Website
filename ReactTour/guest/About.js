import React from "react";
import ReactDOM from "react-dom";
export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showing: "about"};
        
    }
    
    login(role){
        console.log("hi");
        this.setState({showing : role});
    }
    
    
    render() {
        return <div>
        
        <main>
        <h1> Pacific Tours and Travels </h1>
        
        <p>There are various branches all over world. We have various cars available for rent and self drive purpose with cheaper price and also a lot of offer for new and exisiting customers.There are various branches all over world. We have various cars available for rent and self drive purpose with cheaper price and also a lot of offer for new and exisiting customers.There are various branches all over world. We have various cars available for rent and self drive purpose with cheaper price and also a lot of offer for new and exisiting customers.
        </p>
        <br/><br/><br/>
        <div id = "contact">
        <h2>Contact us </h2>
        <br/>
        <h5> Mobile :- +1(234)718-1831 </h5>
        <h5> Email :- patelbhumit83@gmail.com </h5>
        <h5> Name :- Bhumit Patel </h5>
        </div>
            </main>
            
            </div>
            }
}
ReactDOM.render(<About />, document.getElementById("root"));



