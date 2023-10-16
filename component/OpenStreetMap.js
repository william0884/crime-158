import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map2 = () => {
  const [center, setCenter] = useState({ lat: -41.838875, lng: 171.7799 });
  const ZOOM_LEVEL = 6;
  const [geoJsonData, setGeoJsonData] = useState(null);

  useEffect(() => {
    fetch('/output.geojson') // Replace with the correct path to your GeoJSON file
      .then((response) => response.json())
      .then((data) => setGeoJsonData(data))
      .catch((error) => console.error(error));
  }, []);


  return (
    <div className='container'>
      <div className='container'></div>
      <div className='row'>
        <div className='col'>
          <div className='container'>
            <MapContainer center={center} zoom={ZOOM_LEVEL}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              {geoJsonData && geoJsonData.features.map((feature, index) => (
                <Marker
                  key={index}
                  position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
                >
                  <Popup>
                    {feature.properties.popupContent}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map2;