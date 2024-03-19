import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { OfferInfo, Review } from '../../types/offer';
import { AppRoute, CardType } from '../../const';
import RentCardFull from '../../components/rentCardFull/rentCardFull';
import RentCard from '../../components/rentCard/rentCard';
import Map from '../../components/map/map';

type OfferProps = {
  offers: OfferInfo[];
  reviews: Review[];
};

function Offer({ offers, reviews }: OfferProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const { id } = useParams();
  const selectedId = parseInt(id ?? '0', 10);

  const offer = offers.find((o) => o.id === selectedId);
  const nearOffers = offers.filter((o) => o.id !== selectedId);

  const handleCardChanged = (newActiveCard: number | null) => {
    setActiveCard(newActiveCard);
  };

  return (
    <main className="page__main page__main--offer">
      {!offer && (<Navigate to={AppRoute.Root} />)}
      {offer && (
        <RentCardFull offer={offer} reviews={reviews}>
          <Map activeOffer={activeCard} className="offer" offers={nearOffers} />
        </RentCardFull>
      )}
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {nearOffers.map((o) => (<RentCard offer={o} key={o.id} cardType={CardType.Regular} onActiveCardChanged={handleCardChanged} />))}
          </div>
        </section>
      </div>
    </main>);
}

export default Offer;
