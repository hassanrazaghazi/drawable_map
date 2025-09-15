'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

// Fix for default markers in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function Map() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [showTitleInput, setShowTitleInput] = useState(false);
  const [currentLayer, setCurrentLayer] = useState(null);
  const [title, setTitle] = useState('');

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Avoid reinitializing
    if (mapInstanceRef.current) return;

    // Initialize the map and set its view to Islamabad
    const map = L.map(mapRef.current).setView([33.7, 73.0], 12);
    mapInstanceRef.current = map;

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create a layer group to hold the shapes we draw
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    // Initialize the Leaflet-Draw controls
    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems
      },
      draw: {
        polygon: true,
        polyline: false,
        rectangle: true,
        circle: false,
        marker: false,
      }
    });

    // Add the drawing controls to the map
    map.addControl(drawControl);

    // Listen for the 'draw:created' event
    map.on('draw:created', function (event) {
      const layer = event.layer;

      // Add the drawn shape to our layer group
      drawnItems.addLayer(layer);

      // Store the layer and show title input
      setCurrentLayer(layer);
      setShowTitleInput(true);

      // Get the data in GeoJSON format
      const geojsonData = layer.toGeoJSON();

      // Log it to the console
      console.log("A shape was drawn! Here is its GeoJSON data:");
      console.log(JSON.stringify(geojsonData, null, 2));
    });

    console.log("Interactive Map with Drawing Tools is ready!");
    console.log("Use the drawing controls on the left side to draw polygons or rectangles.");

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleTitleSubmit = () => {
    if (currentLayer && title.trim()) {
      // Create a popup with the title
      currentLayer.bindPopup(`<b>${title}</b>`).openPopup();

      // Add title to the GeoJSON properties
      const geojsonData = currentLayer.toGeoJSON();
      geojsonData.properties.title = title;

      console.log("Shape with title created:");
      console.log(JSON.stringify(geojsonData, null, 2));

      // Reset states
      setShowTitleInput(false);
      setCurrentLayer(null);
      setTitle('');
    }
  };

  const handleTitleCancel = () => {
    // Remove the layer if cancelled
    if (currentLayer && mapInstanceRef.current) {
      mapInstanceRef.current.removeLayer(currentLayer);
    }

    // Reset states
    setShowTitleInput(false);
    setCurrentLayer(null);
    setTitle('');
  };

  return (
    <div className="w-full h-screen">
      <div
        ref={mapRef}
        className="w-full h-full"
        style={{ height: '100vh', width: '100%' }}
      />

      {/* Title Input Modal */}
      {showTitleInput && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Add Title to Shape</h3>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title for this shape..."
              className="w-full p-3 border border-gray-300 rounded-md mb-4 text-gray-700"
              autoFocus
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleTitleSubmit();
                }
                if (e.key === 'Escape') {
                  handleTitleCancel();
                }
              }}
            />

            <div className="flex gap-3">
              <button
                onClick={handleTitleSubmit}
                disabled={!title.trim()}
                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Add Title
              </button>
              <button
                onClick={handleTitleCancel}
                className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}