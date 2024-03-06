import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import useMapMarkers from '../../hooks/useMapMarkers';
import { OfferInfo } from '../../types/offer';

type MapProps = {
  offers: OfferInfo[];
  activeOffer: number;
  height: number;
};

function Map({ offers, activeOffer, height }: MapProps) {
  const [firstOffer] = offers;

  const mapRef = useRef(null);
  const map = useMap(mapRef, {
    lat: firstOffer.coords.lat,
    lng: firstOffer.coords.lng,
  }, 10);
  useMapMarkers(map, offers, activeOffer);

  return (
    <div ref={mapRef} style={{ height: `${height}px` }}></div>
  );
}

export default Map;
