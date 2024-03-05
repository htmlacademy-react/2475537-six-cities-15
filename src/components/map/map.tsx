import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import useMapMarkers from '../../hooks/useMapMarkers';
import { OfferInfo } from '../../types/offer';

type MapProps = {
  offers: OfferInfo[];
  activeOffer: number;
};

function Map({ offers, activeOffer }: MapProps) {
  const [firstOffer] = offers;

  const mapRef = useRef(null);
  const map = useMap(mapRef, {
    lat: firstOffer.coords.lat,
    lng: firstOffer.coords.lng,
  }, 10);
  useMapMarkers(map, offers, activeOffer);

  return (
    <section className="cities__map map" ref={mapRef} />
  );
}

export default Map;
