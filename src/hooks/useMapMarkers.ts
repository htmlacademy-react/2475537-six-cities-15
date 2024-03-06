import { useEffect } from 'react';
import leaflet, { LayerGroup, TileLayer } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const';
import { OfferInfo } from '../types/offer';

function useMapMarkers(map: LayerGroup<TileLayer> | null, offers: OfferInfo[], activeOffer: number | null) {
  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.coords.lat,
            lng: offer.coords.lng,
          }, {
            icon: (offer.id === activeOffer)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);
}

export default useMapMarkers;
