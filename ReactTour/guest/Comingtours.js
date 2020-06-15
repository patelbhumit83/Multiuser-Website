import React from "react";
import ReactDOM from "react-dom";

var tours = null;

export default class Comingtours extends React.Component {
    constructor(props) {
        super(props);
        this.state = {virtual_tour : "comingtours", physical_tour : "comingtours"};
    }

    login(role){
        console.log("hi");
        this.setState({virtual_tour : "comingtours", physical_tour : "comingtours"});
    }

    componentDidMount(){
      this.getdata();
  }

  getdata(){
    var that = this;
    fetch('/tours').then(response => response.json())
               .then(function(response){
                 var pt = response.filter(function(itm){return itm.type == "physical_tour"})
                 var vt = response.filter(function(itm){return itm.type == "virtual_tour"})

                 var vtrow = vt.map(function(itm, index){return (<tr key={index}><td>{itm.name}</td><td>{itm.date}</td></tr>)})
                 var ptrow = pt.map(function(itm, index){return (<tr key={index}><td>{itm.name}</td><td>{itm.date}</td></tr>)})
                that.setState({virtual_tour : vtrow, physical_tour : ptrow})

             });
  }


    render() {
      //var vt = this.state.showing.filter(vt =>  vt.type == "virtual_tour" );
      //var content = <table align = "center"><tbody><tr><th>Name</th><th>Date</th></tr>{vt.map((vtv, index) =>
        //(<tr key = {index}><td>{vtv.name}</td><td>{vtv.date}</td></tr>  ))}</tbody></table>
        return <div>

        <main>
        <div id = "contact">
        <h1>Virtual Tours </h1>

        <table align = "center"><tbody><tr><th>Name</th><th>Date</th></tr>{this.state.virtual_tour}</tbody></table>
        <h1>Physical Tours</h1>
        <table align = "center"><tbody><tr><th>Name</th><th>Date</th></tr>{this.state.physical_tour}</tbody></table>

        </div>
        </main>

            </div>
            }
}
ReactDOM.render(<Comingtours />, document.getElementById("root"));
