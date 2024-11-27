import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ location }) => {
  const defaultPosition = [51.505, -0.09];

  return (
    <MapContainer
      center={location ? [location.lat, location.lng] : defaultPosition}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: 'calc(100vh - 0px)', width: '100vw',  }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {location && (
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            Latitude: {location.lat}, Longitude: {location.lng}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
