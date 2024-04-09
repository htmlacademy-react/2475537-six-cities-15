import Loader from '../../components/loader/loader';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useIsDataLoadingSelector, useOffersSelector } from '../../store/reducer/data/selectors';
import CityOffers from '../../components/cityOffers/cityOffers';
import CityOffersEmpty from '../../components/cityOffers/cityOffersEmpty';
import { fetchOffers } from '../../api/api-actions';
import { useAuthorizationStatusSelector } from '../../store/reducer/user/selectors';
import { AuthorizationStatus } from '../../const';

type MainProps = {
  cardsCount: number;
};

function Main({ cardsCount }: MainProps) {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(useAuthorizationStatusSelector);
  const isDataLoading = useAppSelector(useIsDataLoadingSelector);
  const offers = useAppSelector(useOffersSelector);

  useEffect(() => {
    if (authorizationStatus !== AuthorizationStatus.Unknown) {
      dispatch(fetchOffers());
    }
  }, [dispatch, authorizationStatus]);

  if (isDataLoading) {
    return (<Loader />);
  }

  const isEmpty = offers.length === 0;

  return (
    <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
      <div className="cities">
        {isEmpty ? <CityOffersEmpty /> : <CityOffers cardsCount={cardsCount} offers={offers}/> }
      </div>
    </main>);
}

export default Main;
