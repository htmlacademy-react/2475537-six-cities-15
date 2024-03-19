import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import useMapMarkers from '../../hooks/useMapMarkers';
import { OfferInfo } from '../../types/offer';
import { Coords } from '../../types/location';

type MapProps = {
  offers: OfferInfo[];
  activeOffer: number | null;
  className: string;
  center: Coords | undefined;
};

const INITIAL_MAP_ZOOM = 10;

function Map({ offers, activeOffer, className, center }: MapProps) {
  const mapRef = useRef<HTMLElement>(null);
  const map = useMap(mapRef, center, INITIAL_MAP_ZOOM);
  useMapMarkers(map, offers, activeOffer);

  return (
    <section className={`${className}__map map`} ref={mapRef} />
  );
}

export default Map;
