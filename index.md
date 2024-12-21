# My Leaflet Map Tutorial
 sdk

## Installation

To use Leaflet in your React app, you'll need to install the following libraries:

leaflet: The core mapping library.
react-leaflet: The official React wrapper for Leaflet.

<div class="code-container">
  <button class="copy-btn" onclick="copyCode()">Copy</button>
  <pre id="codeBlock"> npm install leaflet react-leaflet
  </pre>
  <span class="copied-notification" id="copiedNotification">Copied!</span>
</div>

## Template code
MapComponent.jsx

<div class="code-container">
  <button class="copy-btn" onclick="copyCode()">Copy</button>
  <pre id="codeBlock">// MapComponent.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import the Leaflet CSS

const MapComponent = () => {
  // Map center and zoom level
  const position = [51.505, -0.09]; // Coordinates of the initial map center (London)
  const zoom = 13; // Zoom level

  return (
    <div style={{ height: '500px' }}>
      <MapContainer center={position} zoom={zoom} style={{ width: '100%', height: '100%' }}>
        {/* TileLayer for the background map */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marker and Popup */}
        <Marker position={position}>
          <Popup>
            A simple popup! <br />
            You can put anything here.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;</pre>
  <span class="copied-notification" id="copiedNotification">Copied!</span>
</div>

it will render map



You can learn more on the [New Page](doc/newpage.md).
<!-- Link to External CSS -->
<link rel="stylesheet" type="text/css" href="style.css">

<!-- Link to External JavaScript -->
<script src="script.js"></script>



