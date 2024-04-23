import React from 'react'
import {AdvancedMarker,Map,Pin,InfoWindow,APIProvider} from '@vis.gl/react-google-maps'
const page = () => {
    const position={lat:53.54,lng:10}
    const [open,setOpen]=useState(false)
  return (
    <APIProvider apiKey=''> 
        <div style={{height:"100vh",width:'100vw'}}>
            <Map
            zoom={9}
            center={position}
            >

            </Map>
        </div>
    </APIProvider>
  )
}

export default page