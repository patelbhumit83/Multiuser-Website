import React from "react";
import ReactDOM from "react-dom";
import tours from "../tours.json";
import Tourtable from "./Tourtable.js";
export default class AdminTour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {addname : "", adddate : "", addtype : "virtual_tour", tours : {physical_tour : tours.physical_tour, virtual_tour : tours.virtual_tour, }};
    }

    namechange(event) {
        this.setState({addname : event.target.value});

    }

    datechange(event) {
        this.setState({adddate : event.target.value});
    }

    type(event) {
        this.setState({addtype : event.target.value});
    }

    addbtn() {
        var newtour = {"name" : this.state.addname, "date" : this.state.adddate, type : this.state.addtype};
        this.refs.child.tourtb(newtour);
    }


    render() {

        var tourtype = <select onChange = {this.type.bind(this)}><option defaultValue = "virtual_tour">virtual_tour</option><option value = "physical_tour">physical_tour</option></select>;
        var nameinput = <input type = "text" onChange = {this.namechange.bind(this)}/>;
        var dateinput = <input type = "text" onChange = {this.datechange.bind(this)}/>;

        return <div>

        <main>

        <div id = "contact">

        <table align = "center"  ><tbody><tr><td>Type</td><td>{tourtype}</td></tr><tr><td>Name</td><td>{nameinput}</td></tr><tr><td>Date(s)</td><td>{dateinput}</td></tr><tr><td><button onClick = {this.addbtn.bind(this)}>Add Tour</button></td></tr></tbody></table>


        <Tourtable ref = "child"/>




        </div>
        </main>

        </div>
    }
}
ReactDOM.render(<AdminTour />, document.getElementById("root"));
