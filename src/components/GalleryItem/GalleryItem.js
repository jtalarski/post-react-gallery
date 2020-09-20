import React, { Component } from "react";
import axios from "axios";
class GalleryItem extends Component {
  state = {
    isToggled: false,
    //changeLikes: false,
  };

  onLoveIt = () => {
    console.log("Ilove it", this.props.id);
     
    // failed attempt at using state change to refresh the DOM
    // this.setState({
    //     changeLikes: !this.state.changeLikes
    //   });
    axios({
      method: "PUT",
      url: `/gallery/like/${this.props.id}`,
      data: { id: "id" },
    }).then((response) => {
        console.log("response from server", response);
       
    }).catch(function (err) {
        console.log("Error increasing loves", err);
        alert("not a good thing");
    });
  };


  toggleDescritpion = () => {
    console.log("Toggle Description", this.props.description)
    this.setState({
      isToggled: !this.state.isToggled
    });
  };

  render() {
    console.log("Image props in GalleryItem", this.props);
    // using conditional rendering to toggle between displaying an
    // image and a description. Uses the state value of isToggled to
    // control what is displayed.

    // Capture the change
    

    if (this.state.isToggled) {
        console.log("Toggle Me");
  
        return (
          <div key={this.props.id} className="displayDiv">
            <p className="descDisplay" onClick={this.toggleDescritpion}>{this.props.description} </p>
            <p>
              <button onClick={this.onLoveIt}>I Love It</button>
            </p>
            <p>{this.props.likes} people like this</p>
          </div>
        );
      } else {
        console.log("Show Me");
  
        return (
          <div key={this.props.id} className="displayDiv">
            <input type="image" src={this.props.path} alt="random" onClick={this.toggleDescritpion} width="100" height="100"></input>
            <p>
              <button onClick={this.onLoveIt}>I Love It</button>
            </p>
            <p>{this.props.likes} people like this</p>
          </div>
        );
      }
  }
}

export default GalleryItem;
