import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Card, CardContent } from '@/components/ui/card';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom orange marker icon
const customIcon = L.divIcon({
  html: `
    <div style="
      background-color: #ea580c;
      width: 30px;
      height: 30px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid #ffffff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <span style="
        color: white;
        font-weight: bold;
        font-size: 14px;
        transform: rotate(45deg);
      ">S</span>
    </div>
  `,
  className: 'custom-marker',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
});

const InteractiveMap = () => {
  // Siyalele Projects address coordinates (eMalahleni, South Africa)
  const siyaleleLocation: [number, number] = [-25.8667, 29.2333];

  return (
    <Card className="border-0 bg-white">
      <CardContent className="p-0">
        <div className="w-full h-64 rounded-lg overflow-hidden relative">
          <MapContainer
            center={siyaleleLocation}
            zoom={15}
            style={{ height: '100%', width: '100%' }}
            className="rounded-lg"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={siyaleleLocation} icon={customIcon}>
              <Popup className="custom-popup">
                <div style={{ padding: '10px', maxWidth: '280px' }}>
                  <h3 style={{ 
                    margin: '0 0 10px 0', 
                    color: '#1a202c', 
                    fontWeight: 'bold', 
                    fontSize: '16px' 
                  }}>
                    Siyalele Projects (Pty) Ltd
                  </h3>
                  <p style={{ 
                    margin: '0 0 8px 0', 
                    color: '#4a5568', 
                    lineHeight: '1.4' 
                  }}>
                    <strong>Address:</strong><br />
                    Monet St Arabella Villas 9<br />
                    Benfluer, eMalahleni<br />
                    1049, South Africa
                  </p>
                  <p style={{ 
                    margin: '0 0 8px 0', 
                    color: '#ea580c', 
                    fontWeight: 'bold' 
                  }}>
                    📞 +27 73 217 8184
                  </p>
                  <p style={{ 
                    margin: '0', 
                    color: '#ea580c', 
                    fontWeight: 'bold' 
                  }}>
                    ✉️ siyalele.pty.ltd@gmail.com
                  </p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
          
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-muted-foreground">
            📍 Siyalele Projects - eMalahleni, South Africa
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveMap;