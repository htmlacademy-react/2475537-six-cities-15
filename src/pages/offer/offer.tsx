import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { OfferInfo, OfferPreview } from '../../types/offer';
import { AppRoute, CardType } from '../../const';
import RentCardFull from '../../components/rentCardFull/rentCardFull';
import RentCard from '../../components/rentCard/rentCard';
import Map from '../../components/map/map';
import Loader from '../../components/loader/loader';
import { fetchNearOffers, fetchSingleOffer } from '../../api/api-calls';

function Offer() {
  const [isOfferLoading, setIsOfferLoading] = useState(true);
  const [isNearOffersLoading, setIsNearOffersLoading] = useState(true);
  const [offer, setOffer] = useState<OfferInfo | null>(null);
  const [nearOffers, setNearOffers] = useState<OfferPreview[]>([]);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const { id } = useParams();

  const handleCardChanged = (newActiveCard: string | null) => {
    setActiveCard(newActiveCard);
  };

  useEffect(() => {
    fetchSingleOffer(id)
      .then((data) => {
        setIsOfferLoading(false);
        setOffer(data);
      })
      .catch(() => setIsOfferLoading(false));
  }, []);

  useEffect(() => {
    fetchNearOffers(id)
      .then((data) => {
        setIsNearOffersLoading(false);
        setNearOffers(data);
      })
      .catch(() => setIsNearOffersLoading(false));
  }, [offer]);

  if (isOfferLoading) {
    return (<Loader />);
  }

  if (!offer) {
    return (<Navigate to={AppRoute.NotFound} />);
  }

  return (
    <main className="page__main page__main--offer">
      {!offer && (<Navigate to={AppRoute.Root} />)}
      {offer && (
        <RentCardFull offer={offer} >
          <Map activeOffer={activeCard} className="offer" offers={nearOffers} center={offer.city.location} />
        </RentCardFull>
      )}
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          {isNearOffersLoading && (<Loader />)}
          {!isNearOffersLoading && (
            <div className="near-places__list places__list">
              {nearOffers.map((o) => (<RentCard offer={o} key={o.id} cardType={CardType.Regular} onActiveCardChanged={handleCardChanged} />))}
            </div>
          )}
        </section>
      </div>
    </main>);
}

export default Offer;
