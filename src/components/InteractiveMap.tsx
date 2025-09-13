import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  // Siyalele Projects coordinates (eMalahleni area)
  const coordinates: [number, number] = [29.2333, -25.8667]; // eMalahleni coordinates

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      // Initialize map
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: coordinates,
        zoom: 12,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker for Siyalele Projects location
      new mapboxgl.Marker({
        color: '#ea580c', // Orange color matching the brand
        scale: 1.2
      })
        .setLngLat(coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div style="padding: 10px;">
                <h3 style="margin: 0 0 5px 0; color: #1a202c; font-weight: bold;">Siyalele Projects (Pty) Ltd</h3>
                <p style="margin: 0; color: #4a5568;">Monet St Arabella Villas 9<br>Benfluer, eMalahleni, 1049</p>
                <p style="margin: 5px 0 0 0; color: #ea580c; font-weight: bold;">📞 +27 73 217 8184</p>
              </div>
            `)
        )
        .addTo(map.current);

      setIsTokenSet(true);

      // Cleanup
      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setIsTokenSet(true);
    }
  };

  if (!isTokenSet) {
    return (
      <Card className="border-0 bg-white">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-industrial">Interactive Map Setup</h3>
            <p className="text-sm text-muted-foreground">
              To display the interactive map, please enter your Mapbox public token.
              <br />
              Get yours at: <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
            </p>
            <form onSubmit={handleTokenSubmit} className="space-y-3 max-w-md mx-auto">
              <div className="space-y-2">
                <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
                <Input
                  id="mapbox-token"
                  type="text"
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  placeholder="pk.eyJ1Ijoi..."
                  className="font-mono text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                disabled={!mapboxToken.trim()}
              >
                Load Map
              </button>
            </form>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 bg-white">
      <CardContent className="p-0">
        <div className="w-full h-64 rounded-lg overflow-hidden relative">
          <div ref={mapContainer} className="absolute inset-0" />
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-muted-foreground">
            📍 Siyalele Projects Location
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveMap;
