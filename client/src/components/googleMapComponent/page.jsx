import React, { useState, useEffect } from 'react';
import { useJsApiLoader, GoogleMap, MarkerF, InfoWindowF, DirectionsRenderer } from '@react-google-maps/api';
import { Skeleton, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import api from '@/api/apiKey';

const MapComponent = () => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);
  const [hostel, setHostel] = useState(null);
  const [hostelLocation, setHostelLocation] = useState(null); // Store fetched coordinates
  const { id } = useParams();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  useEffect(() => {
    const fetchSingleHostel = async () => {
      try {
        const URL = `https://beiyo-admin.in/api/hostels/${id}`;
        const response = await api.get(URL);
        const fetchedHostel = response.data;

        setHostel(fetchedHostel);

        // Use Places API to find location by name
       
        const service = new window.google.maps.places.PlacesService(document.createElement('div'));
        service.findPlaceFromQuery(
          {
            query: fetchedHostel.mapName, // Hostel name
            fields: ['geometry'], // Request geometry data
          },
          (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && results[0]?.geometry?.location) {
              const location = results[0].geometry.location;
              setHostelLocation({ lat: location.lat(), lng: location.lng() });
            } else {
              console.error('Places API failed:', status);
            }
          }
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleHostel();

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
  }, [id]);

  const getDirections = async () => {
    if (!userLocation || !hostelLocation) return;

    try {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: userLocation,
          destination: hostelLocation,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`Error fetching directions: ${status}`);
          }
        }
      );
    } catch (error) {
      console.error('Error getting directions:', error);
    }
  };

  if (!isLoaded) {
    return <Skeleton />;
  }

  const defaultCenter = { lat: 22.7296431, lng: 75.8705821 }; // Fallback center if location isn't set

  return (
    hostel&&hostel.mapName?(
      <div className='h-fit flex items-center flex-col justify-center '>
      <div className='h-[20rem] w-[21rem] flex items-center rounded-3xl'>
        <GoogleMap
          center={hostelLocation || defaultCenter}
          zoom={hostelLocation ? 19 : 10}
          mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '10px' }}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          {hostelLocation && (
            <MarkerF
              position={hostelLocation}
              icon={{
                path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                fillColor: "#FFD700",
                fillOpacity: 1,
                strokeWeight: 2,
                scale: 2,
                anchor: new window.google.maps.Point(12, 24),
              }}
              onClick={() => setInfoOpen(true)}
            >
              {infoOpen && (
                <InfoWindowF onCloseClick={() => setInfoOpen(false)}>
                  <div>
                    <h2>Beiyo {hostel.name}</h2>
                    <p>Beiyo Hostel</p>
                  </div>
                </InfoWindowF>
              )}
            </MarkerF>
          )}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
       
      </div>
      <div className='mt-4'>
          <button className='submit text-black' onClick={getDirections}>Get Directions</button>
        </div>
      </div>
    ):(
      null
    )
  );
};

export default MapComponent;
