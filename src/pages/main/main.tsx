import { useState } from 'react';
import RentCardList from '../../components/rentCardList/rentCardList';
import { OfferInfo } from '../../types/offer';
import Map from '../../components/map/map';

type MainProps = {
  cardsCount: number;
  offers: OfferInfo[];
};

function Main({ cardsCount, offers }: MainProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardChanged = (newActiveCard: number | null) => {
    setActiveCard(newActiveCard);
  };

  return (
    <main className="page__main page__main--index">
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--closed">
                <li className="places__option places__option--active" tabIndex={0}>
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <RentCardList cardsCount={cardsCount} offers={offers} onActiveCardChanged={handleCardChanged}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map" style={{background: 'none'}}>
              <Map offers={offers} activeOffer={activeCard} height={800} />
            </section>
          </div>
        </div>
      </div>
    </main>);
}

export default Main;
