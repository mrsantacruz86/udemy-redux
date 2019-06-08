import React from 'react';

const ImageList = (props) => {
    return props.images.map(image => {
      return <img key={image.id} src={image.urls.small} alt={image.description} />
    });

}

export default ImageList;