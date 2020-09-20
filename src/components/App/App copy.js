import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';

class App extends Component {
// set initial state
state = {
  images: []
}

componentDidMount () {
  console.log('App is ready');
this.getImages();
}
// get all of the images from the gallery module
getImages = ( ) =>
axios({
  method: 'GET',
  url: '/gallery'
}).then(response => {
  console.log('response', response)
  console.log('response.data', response.data);

  this.setState({
    images: response.data
  })
})
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

  render() {
 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Travel Gallery</h1>
          <h4>Click image to toggle between image and description</h4>
        </header>
        <br/>
        <GalleryList imagesProp={this.state.images}/>
      </div>
    );
  }


}



export default App;
