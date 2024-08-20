import React, { useState, useEffect } from 'react';
import { useJsApiLoader, GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { Skeleton } from '@mui/material';

const MapComponent = ({ mapLink }) => {
  const [position, setPosition] = useState(null); // Initialize as null
  const [infoOpen, setInfoOpen] = useState(false);
  useEffect(() => {
    if (mapLink) {
      const extractCoordinates = (url) => {
        const match = url.match(/@([0-9.]+),([0-9.]+)/);
        if (match) {
          const lat = parseFloat(match[1]);
          const lng = parseFloat(match[2]);
          console.log('Extracted coordinates:', lat, lng);
          setPosition({ lat, lng });
        } else {
          console.error('Failed to extract coordinates from the URL');
        }
      };
      extractCoordinates(mapLink);
    } else {
      console.log('No map link provided');
    }
  }, [mapLink]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDUPOEO3GDrPlKc1nmOyqPDo1P23gXrAU8', // Use environment variable for API key
  });

  if (!isLoaded) {
    return <Skeleton />;
  }
  
  const center = {lat:22.7296431 ,lng:75.8705821}
 
 
  return (
    <div className='h-fit flex items-center justify-center'>
      <div className='h-[20rem] w-[20rem] flex items-center rounded-3xl'>
        {position ? ( // Render the map only if position is available
          <GoogleMap
            center={center}
            zoom={20}
            mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '10px' }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
          >
            <MarkerF
              position={center}
              icon={{
                path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                fillColor: "#FFD700", // Yellow color
                fillOpacity: 1,
                strokeWeight: 2,
                scale: 1.5,
                anchor: new window.google.maps.Point(12, 24), // Adjust anchor based on your icon size
              }}
              onClick={() => setInfoOpen(true)}
            >
           {infoOpen && (
                <InfoWindowF
                  onCloseClick={() => setInfoOpen(false)} // Close InfoWindow
                >
                  <div>
                    <h2>Beiyo invictus</h2>
                    <p>Beiyo hostel</p>
                  </div>
                </InfoWindowF>
              )}
            </MarkerF>
          </GoogleMap>
        ) : (
          <div>Loading map...</div> // Display a message while position is not available
        )}
      </div>
    </div>
  );
};

export default MapComponent;
