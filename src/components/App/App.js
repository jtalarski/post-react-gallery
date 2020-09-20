import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

class App extends Component {
// set initial state
state = {
  images: []
}

componentDidMount () {
  console.log('App is ready');
this.getImages();
}
// get all of the images from the galler module
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
