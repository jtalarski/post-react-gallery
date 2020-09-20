//import axios from 'axios';
import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {

state= {
 
}


render(){

    return (

        <div>
{this.props.imagesProp.map(image=>
<GalleryItem key={image.id}
id={image.id}
path={image.path}
description={image.description}
likes={image.likes}
/>
)}
</div>
    )
}
}


export default GalleryList;