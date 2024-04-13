import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import useMapMarkers from '../../hooks/use-map-markers';
import { OfferPreview } from '../../types/offer';
import { Coords } from '../../types/location';

type MapProps = {
  offers: OfferPreview[];
  activeOffer: string | null;
  className: string;
  center: Coords;
};

const INITIAL_MAP_ZOOM = 12;

function Map({ offers, activeOffer, className, center }: MapProps) {
  const mapRef = useRef<HTMLElement>(null);
  const map = useMap(mapRef, center, INITIAL_MAP_ZOOM);
  useMapMarkers(map, offers, activeOffer);

  return (
    <section className={`${className}__map map`} ref={mapRef} />
  );
}

export default Map;
