import React from 'react';

function ImageDisplay({ imageData }) {
  return (
    <div>
      {imageData ? (
        <img src={`data:image/jpeg;base64,${imageData}`} alt="Hostel" className='hostelimage' />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
}

export default ImageDisplay;
