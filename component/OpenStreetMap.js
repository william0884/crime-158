import React, { useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map2 = () => {
  const [center, setCenter] = useState({ lat: -41.838875, lng: 171.7799 })
  const ZOOM_LEVEL = 6
  const mapRef = useRef()
  const position = [-36.848461, 174.763336]


  return (
    <>
      <div className='container'>
        <div className='container'>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='container'>
              <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker
                    position={[
                      -35.9412143,
                      173.8685702,
                    ]}
                  >
                    <Popup>
                    Dargaville:
                    2013/2014: 629
                     </Popup>
                    
                  </Marker>

                  <Marker
                    position={[
                      -35.4069776,
                      173.8685702,
                    ]}
                  >
                    <Popup>
                    Kaikohe:
                    2013/2014: 2741
                     </Popup>
                    
                  </Marker>
                  <Marker
                    position={[
                      -35.7275268,
                      173.8685702,
                    ]}
                  >
                    <Popup>
                    Whangārei:
                    2013/2014: 2741
                     </Popup>
                    
                  </Marker>
                  

                
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Map2