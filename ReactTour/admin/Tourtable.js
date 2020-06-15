import React from "react";
import ReactDOM from "react-dom";
import tours from "../tours.json";
var that = null;
export default class Tourtable extends React.Component {
  constructor(props) {
      super(props);
      this.state = {tours : []}
      that = this;

  }



  componentDidMount(){
    fetch('/tours').then(response => response.json())
               .then((response) =>
              {
                 this.setState({tours : response})
             });
          }

  delete(id) {
    console.log(that.state.tours);
    console.log("deleting tour " + id );
    fetch(`/tours/${id}`, {
        method: 'DELETE',
        })
    .then(response =>  {
        console.log('Request status code: ', response.statusText, response.status, response.type);
        return fetch('/tours');
    })
    .then(response => {
      if(response.ok)
      {
      console.log('Request status code: ', response.statusText, response.status, response.type);
      return response.json()
    }
    else {
      console.log("Something wrong");
      alert("Something Wrong");
      var info = `Status Code ${response.status}`;
      return Promise.reject(info);
    }
    })
    .then(data =>
              {
                that.setState({tours : data});
             })
    .catch(function(msg){
      console.log("something wrong" + msg);
    })


   }

   tourtb(tour){
     var that = this;
     fetch('/tours', {
              method: 'POST',
              headers: {
              "Content-type": "application/json"
              },
              body: JSON.stringify({
                                   name: tour.name,
                                   date: tour.date,
                                   type: tour.type
                                   })
              }).then(function(response) {
                      if(response.ok)
                      {
                      console.log('Request status code: ', response.statusText, response.status, response.type);
                      return response.json();
                    }
                    else {
                      var info = `response status ${response.status}`
                      return Promise.reject(info);
                    }
                      })
        .then(function(data) {
              console.log(data);
              var newtour = {"name" : data.name, "date" : data.date, "type": data.type};
              that.state.tours.push(newtour);
              that.setState({tours: that.state.tours})
              })
          .catch(function(msg){
            console.log("something Bad" + msg);
            alert("Something wrong" + msg);
          })
   }

  render() {
    var that = this;
    var pt = this.state.tours.filter(itm =>  itm.type == "physical_tour")
    var vt = this.state.tours.filter(itm =>  itm.type == "virtual_tour")
    var vtrow = vt.map(function(itm, index){return (<tr key={index}><td><button id = "del" onClick = {that.delete.bind(this, itm._id)}> Delete </button></td><td>{itm.name}</td><td>{itm.date}</td></tr>)})
    var ptrow = pt.map(function(itm, index){return (<tr key={index}><td><button id = "del" onClick = {that.delete.bind(this, itm._id)}> Delete </button></td><td>{itm.name}</td><td>{itm.date}</td></tr>)})

      return <div>

      <main>
      <div id = "contact">
      <h1>Virtual Tours </h1>

      <table align = "center"><tbody><tr><th></th><th>Name</th><th>Date</th></tr>{vtrow}</tbody></table>
      <h1>Physical Tours</h1>
      <table align = "center"><tbody><tr><th></th><th>Name</th><th>Date</th></tr>{ptrow}</tbody></table>

      </div>
      </main>

          </div>
          }
}
ReactDOM.render(<Tourtable />, document.getElementById("root"));
