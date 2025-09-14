import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const InteractiveMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Siyalele Projects address coordinates (eMalahleni, South Africa)
  const siyaleleLocation = {
    lat: -25.8667,
    lng: 29.2333
  };

  const loadGoogleMapsScript = (apiKey: string) => {
    if (window.google || isScriptLoaded) return;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    window.initMap = initializeMap;
    
    script.onload = () => setIsScriptLoaded(true);
    document.head.appendChild(script);
  };

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: siyaleleLocation,
      zoom: 15,
      mapTypeId: 'roadmap',
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'on' }]
        }
      ]
    });

    // Create custom marker
    const marker = new window.google.maps.Marker({
      position: siyaleleLocation,
      map: map,
      title: 'Siyalele Projects (Pty) Ltd',
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="#ea580c" stroke="#ffffff" stroke-width="3"/>
            <circle cx="20" cy="20" r="8" fill="#ffffff"/>
            <text x="20" y="25" text-anchor="middle" fill="#ea580c" font-size="12" font-weight="bold">S</text>
          </svg>
        `),
        scaledSize: new window.google.maps.Size(40, 40),
        anchor: new window.google.maps.Point(20, 20)
      }
    });

    // Create info window
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 15px; max-width: 300px;">
          <h3 style="margin: 0 0 10px 0; color: #1a202c; font-weight: bold; font-size: 16px;">
            Siyalele Projects (Pty) Ltd
          </h3>
          <p style="margin: 0 0 8px 0; color: #4a5568; line-height: 1.4;">
            <strong>Address:</strong><br>
            Monet St Arabella Villas 9<br>
            Benfluer, eMalahleni<br>
            1049, South Africa
          </p>
          <p style="margin: 0 0 8px 0; color: #ea580c; font-weight: bold;">
            📞 +27 73 217 8184
          </p>
          <p style="margin: 0; color: #ea580c; font-weight: bold;">
            ✉️ siyalele.pty.ltd@gmail.com
          </p>
        </div>
      `
    });

    // Open info window on marker click
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    // Auto-open info window after a short delay
    setTimeout(() => {
      infoWindow.open(map, marker);
    }, 1000);

    setIsMapLoaded(true);
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (googleMapsApiKey.trim()) {
      loadGoogleMapsScript(googleMapsApiKey.trim());
    }
  };

  useEffect(() => {
    if (isScriptLoaded && window.google) {
      initializeMap();
    }
  }, [isScriptLoaded]);

  if (!isMapLoaded && !googleMapsApiKey) {
    return (
      <Card className="border-0 bg-white">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-industrial">Interactive Map Setup</h3>
            <p className="text-sm text-muted-foreground">
              To display the interactive Google Map, please enter your Google Maps API key.
              <br />
              Get yours at: <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Maps Platform</a>
            </p>
            <form onSubmit={handleApiKeySubmit} className="space-y-3 max-w-md mx-auto">
              <div className="space-y-2">
                <Label htmlFor="google-maps-key">Google Maps API Key</Label>
                <Input
                  id="google-maps-key"
                  type="text"
                  value={googleMapsApiKey}
                  onChange={(e) => setGoogleMapsApiKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className="font-mono text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                disabled={!googleMapsApiKey.trim()}
              >
                Load Google Map
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
          <div ref={mapRef} className="absolute inset-0" />
          {!isMapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                <p className="text-sm text-muted-foreground">Loading Google Maps...</p>
              </div>
            </div>
          )}
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-muted-foreground">
            📍 Siyalele Projects - eMalahleni, South Africa
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveMap;