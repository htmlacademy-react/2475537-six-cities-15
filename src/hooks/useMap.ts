import { useEffect, useState, useRef, MutableRefObject } from 'react';
import leaflet, { LayerGroup, TileLayer } from 'leaflet';
import { Coords } from '../types/offer';

function useMap(mapRef: MutableRefObject<LayerGroup<TileLayer> | null>, center: Coords, zoom: number) {
  const [map, setMap] = useState<LayerGroup<TileLayer> | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: center.lat,
          lng: center.lng,
        },
        zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, center]);

  return map;
}

export default useMap;
