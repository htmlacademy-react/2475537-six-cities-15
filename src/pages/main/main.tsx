import Loader from '../../components/loader/loader';
import { useAppSelector } from '../../hooks';
import { useIsDataLoadingSelector, useOffersSelector } from '../../store/reducer/data/selectors';
import CityOffers from '../../components/cityOffers/cityOffers';
import CityOffersEmpty from '../../components/cityOffers/cityOffersEmpty';

type MainProps = {
  cardsCount: number;
};

function Main({ cardsCount }: MainProps) {
  const isDataLoading = useAppSelector(useIsDataLoadingSelector);
  const offers = useAppSelector(useOffersSelector);

  if (isDataLoading) {
    return (<Loader />);
  }

  const isEmpty = offers.length == 0;

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <div className="cities">
        {isEmpty ? <CityOffersEmpty /> : <CityOffers cardsCount={cardsCount} /> }
      </div>
    </main>);
}

export default Main;
