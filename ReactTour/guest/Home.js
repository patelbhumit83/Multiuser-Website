import React from "react";
import ReactDOM from "react-dom";
import one from '../images/first.jpg';
import second from '../images/second.jpg';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showing : "home"};
    }
    
    login(role){
        this.setState({showing : role});
    }
    
    
    
    render() {
        return <div>
        
        <main>
        
        <h1> Pacific Tours and Travels </h1>
        <p>
        <img src = {one} height = "300" width = "300" id ="index"/><br/><br/><br/><br/>
        In the digital age, photography is the first engagement tool we have when advertising tours and activities. It's what attracts the website user, and what will set you apart from your competition. You need to choose a featured image that is eye-catching, unique and makes a customer want to click and find out more. Look at what your competitors are using, and select something different so that your tour stands out. You should also change your photo from time-to-time to see if engagement increases or decreases. This way you can find which one works best
        </p>
        <br/><br/>
        <img src = {second} height = "300" width = "300" id = "index"/>
        <br/><br/>
        <p>
        Our head office is in Glasgow, with agents also operating out of Aberdeen, Bournemouth, Leamington Spa and London.
        Our skilled team work daily with artist, tour, and production managers.
        The Tour Company prides itself on the quality of service and the attention that is given to all our clients no matter what the level of business. The company has employed the same core staff for several years meaning that we are all familiar with each others clients and are able to help if instant gratification is needed and your agent is not available.
            </p>
            <br/><br/>
            
            </main>
            
            </div>
            }
}
ReactDOM.render(<Home />, document.getElementById("root"));


