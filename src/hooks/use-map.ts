import { useEffect, useState, useRef, RefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Coords } from '../types/location';

function useMap(mapRef: RefObject<string | HTMLElement>, center: Coords, zoom: number) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: center.latitude,
          lng: center.longitude,
        },
        zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );
      layer.addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef]);

  useEffect(() => {
    if (map) {
      map.setView([center.latitude, center.longitude], zoom);
    }
  }, [map, center]);

  return map;
}

export default useMap;
