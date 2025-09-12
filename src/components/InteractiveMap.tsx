import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Card, CardContent } from '@/components/ui/card';

// Fix for default markers in Leaflet with React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.divIcon({
  html: `
    <div style="
      background-color: #ea580c;
      width: 25px;
      height: 41px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 2px solid #fff;
      position: relative;
    ">
      <div style="
        width: 8px;
        height: 8px;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        top: 6px;
        left: 6px;
        transform: rotate(45deg);
      "></div>
    </div>
  `,
  className: 'custom-div-icon',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const InteractiveMap = () => {
  // Siyalele Projects coordinates (eMalahleni area) - [lat, lng] for Leaflet
  const coordinates: [number, number] = [-25.8667, 29.2333];

  return (
    <Card className="border-0 bg-white">
      <CardContent className="p-0">
        <div className="w-full h-64 rounded-lg overflow-hidden relative">
          <MapContainer
            center={coordinates}
            zoom={12}
            style={{ height: '100%', width: '100%' }}
            zoomControl={true}
            scrollWheelZoom={true}
          >
            {/* OpenStreetMap tile layer - completely free */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              maxZoom={19}
            />
            
            {/* Custom orange marker for Siyalele Projects */}
            <Marker position={coordinates} icon={DefaultIcon}>
              <Popup>
                <div style={{ padding: '10px', minWidth: '200px' }}>
                  <h3 style={{ 
                    margin: '0 0 5px 0', 
                    color: '#1a202c', 
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }}>
                    Siyalele Projects (Pty) Ltd
                  </h3>
                  <p style={{ 
                    margin: '0', 
                    color: '#4a5568',
                    lineHeight: '1.4'
                  }}>
                    Monet St Arabella Villas 9<br/>
                    Benfluer, eMalahleni, 1049
                  </p>
                  <p style={{ 
                    margin: '5px 0 0 0', 
                    color: '#ea580c', 
                    fontWeight: 'bold'
                  }}>
                    📞 +27 73 217 8184
                  </p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
          
          {/* Location indicator overlay */}
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-muted-foreground">
            📍 Siyalele Projects Location
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveMap;
