// import React, { useState, useEffect } from 'react';
// import { useJsApiLoader, GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
// import { Skeleton } from '@mui/material';

// const MapComponent = () => {
   
//   const [infoOpen, setInfoOpen] = useState(false);


//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: 'AIzaSyDUPOEO3GDrPlKc1nmOyqPDo1P23gXrAU8', // Use environment variable for API key
//   });

//   if (!isLoaded) {
//     return <Skeleton />;
//   }
  
//   const center = {lat:22.7296431 ,lng:75.8705821}
 
 
//   return (
//     <div className='h-fit flex items-center justify-center'>
//       <div className='h-[20rem] w-[20rem] flex items-center rounded-3xl'>
//          {/* // Render the map only if position is available */}
//           <GoogleMap
//             center={center}
//             zoom={20}
//             mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '10px' }}
//             options={{
//               zoomControl: false,
//               streetViewControl: false,
//               mapTypeControl: false,
//               fullscreenControl: false,
//             }}
//           >
//             <MarkerF
//               position={center}
//               icon={{
//                 path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
//                 fillColor: "#FFD700", // Yellow color
//                 fillOpacity: 1,
//                 strokeWeight: 2,
//                 scale: 1.5,
//                 anchor: new window.google.maps.Point(12, 24), // Adjust anchor based on your icon size
//               }}
//               onClick={() => setInfoOpen(true)}
//             >
//            {infoOpen && (
//                 <InfoWindowF
//                   onCloseClick={() => setInfoOpen(false)} // Close InfoWindow
//                 >
//                   <div>
//                     <h2>Beiyo invictus</h2>
//                     <p>Beiyo hostel</p>
//                   </div>
//                 </InfoWindowF>
//               )}
//             </MarkerF>
//           </GoogleMap>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;

import React, { useState, useEffect } from 'react';
import { useJsApiLoader, GoogleMap, MarkerF, InfoWindowF, DirectionsRenderer } from '@react-google-maps/api';
import { Skeleton, Button } from '@mui/material';

const MapComponent = () => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDUPOEO3GDrPlKc1nmOyqPDo1P23gXrAU8', // Use environment variable for API key
  });

  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location: ', error);
        }
      );
    }
  }, []);

  const getDirections = () => {
    if (!userLocation) return;

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: userLocation,
        destination: center, // Destination is your predefined center
        travelMode: window.google.maps.TravelMode.DRIVING, // You can change to WALKING, BICYCLING, etc.
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`Error fetching directions: ${status}`);
        }
      }
    );
  };

  if (!isLoaded) {
    return <Skeleton />;
  }

  const center = { lat: 22.7296431, lng: 75.8705821 };

  return (
    <div className='h-fit flex items-center flex-col justify-center'>
      <div className='h-[20rem] w-[20rem] flex items-center rounded-3xl'>
        {/* Render the map only if position is available */}
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
              <InfoWindowF onCloseClick={() => setInfoOpen(false)}>
                <div>
                  <h2>Beiyo Invictus</h2>
                  <p>Beiyo Hostel</p>
                </div>
              </InfoWindowF>
            )}
          </MarkerF>

          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </div>
      <div className="mt-4">
        
      </div>
      <Button className='z-50' variant="contained" color="primary" onClick={getDirections}>
            Get Directions
          </Button>
    </div>
  );
};

export default MapComponent;

