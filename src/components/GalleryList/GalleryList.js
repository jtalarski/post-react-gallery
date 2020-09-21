//import axios from 'axios';
import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {

state= {
 
}


render(){

    return (
<div>
        <div>
        {this.props.imagesProp.map(image => 
          <GalleryItem image={image} key={image.id} onLoveIt={this.props.onLoveIt} />
        )}
      </div>
</div>
    )
}
}


export default GalleryList;