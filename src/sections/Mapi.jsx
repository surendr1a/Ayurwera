import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const MapComponent = () => {
  const position = [51.505, -0.09]; // Coordinates for map center (e.g., London)

  const customIcon = new Icon({
    iconUrl: 'https://example.com/marker-icon.png', // Ensure this is a valid image URL
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className="map-container " style={{ marginTop: '50px', marginBottom: '50px', height: '500px' }}>
      <h2 className="text-center">Interactive Map</h2>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>Your Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
