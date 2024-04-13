import { useEffect } from 'react';
import { Map, Icon, Marker} from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const';
import { OfferPreview } from '../types/offer';

function useMapMarkers(map: Map | null, offers: OfferPreview[], activeOffer: string | null) {
  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        if (offer) {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === activeOffer)
              ? currentCustomIcon
              : defaultCustomIcon,
          });
          marker.addTo(map);
        }
      });
    }
  }, [map, offers, activeOffer]);
}

export default useMapMarkers;
