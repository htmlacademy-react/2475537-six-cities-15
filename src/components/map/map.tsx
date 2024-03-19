import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import useMapMarkers from '../../hooks/useMapMarkers';
import { OfferInfo } from '../../types/offer';

type MapProps = {
  offers: OfferInfo[];
  activeOffer: number | null;
  className: string;
};

const INITIAL_MAP_ZOOM = 10;

function Map({ offers, activeOffer, className }: MapProps) {
  const [firstOffer] = offers;

  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, {
    lat: firstOffer.coords.lat,
    lng: firstOffer.coords.lng,
  }, INITIAL_MAP_ZOOM);
  useMapMarkers(map, offers, activeOffer);

  return (
    <section className={`${className}__map map`} ref={mapRef} />
  );
}

export default Map;
