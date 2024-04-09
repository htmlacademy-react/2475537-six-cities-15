import { configureMockStore } from '@jedmao/redux-mock-store';
import { createApi } from './api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes } from '../mocks/mocks';
import { State } from '../types/state';
import {
  fetchOffers,
  fetchSingleOffer,
  fetchNearOffers,
  fetchOfferReviews,
  fetchAddReview,
  fetchFavorites,
  fetchSetFavoriteStatus,
  fetchSetNotFavoriteStatus,
  checkAuthorization,
  authorize,
  signOut,
} from './api-actions';
import { APIRoutes } from './routes';
import * as tokenStorage from '../services/token';
import { clearFavorites } from '../store/reducer/data/reducer';
import { Credentials } from '../types/user';

describe('Async actions', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({});
  });

  describe('fetchOffers', () => {
    it('should dispatch "fetchOffers.pending" and "fetchOffers.fulfilled" with thunk fetchOffers succeeded', async () => {
      mockAxiosAdapter.onGet(APIRoutes.OffersList).reply(200);

      await store.dispatch(fetchOffers());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffers.pending.type,
        fetchOffers.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchOffers.pending" and "fetchOffers.rejected" with thunk fetchOffers rejected', async () => {
      mockAxiosAdapter.onGet(APIRoutes.OffersList).reply(500);

      await store.dispatch(fetchOffers());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffers.pending.type,
        fetchOffers.rejected.type,
      ]);
    });
  });

  describe('fetchSingleOffer', () => {
    const offerId = 'id1';

    it('should dispatch "fetchSingleOffer.pending" and "fetchSingleOffer.fulfilled" with thunk fetchSingleOffer succeeded', async () => {
      mockAxiosAdapter.onGet(APIRoutes.Offer.replace('{offerId}', offerId)).reply(200);

      await store.dispatch(fetchSingleOffer(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSingleOffer.pending.type,
        fetchSingleOffer.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchSingleOffer.pending" and "fetchSingleOffer.fulfilled" with thunk fetchSingleOffer if no id passed', async () => {
      await store.dispatch(fetchSingleOffer());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSingleOffer.pending.type,
        fetchSingleOffer.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchSingleOffer.pending" and "fetchSingleOffer.rejected" with thunk fetchSingleOffer rejected', async () => {
      mockAxiosAdapter.onGet(APIRoutes.Offer.replace('{offerId}', offerId)).reply(500);

      await store.dispatch(fetchSingleOffer(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSingleOffer.pending.type,
        fetchSingleOffer.rejected.type,
      ]);
    });
  });

  describe('fetchNearOffers', () => {
    const offerId = 'id1';

    it('should dispatch "fetchNearOffers.pending" and "fetchNearOffers.fulfilled" with thunk fetchNearOffers succeeded', async () => {
      mockAxiosAdapter.onGet(APIRoutes.NearByOffers.replace('{offerId}', offerId)).reply(200);

      await store.dispatch(fetchNearOffers(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearOffers.pending.type,
        fetchNearOffers.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchNearOffers.pending" and "fetchNearOffers.fulfilled" with thunk fetchNearOffers if no id passed', async () => {
      await store.dispatch(fetchNearOffers());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearOffers.pending.type,
        fetchNearOffers.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchNearOffers.pending" and "fetchNearOffers.rejected" with thunk fetchNearOffers rejected', async () => {
      mockAxiosAdapter.onGet(APIRoutes.NearByOffers.replace('{offerId}', offerId)).reply(500);

      await store.dispatch(fetchNearOffers(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearOffers.pending.type,
        fetchNearOffers.rejected.type,
      ]);
    });
  });

  describe('fetchOfferReviews', () => {
    const offerId = 'id1';

    it('should dispatch "fetchOfferReviews.pending" and "fetchOfferReviews.fulfilled" with thunk fetchOfferReviews succeeded', async () => {
      mockAxiosAdapter.onGet(APIRoutes.Comments.replace('{offerId}', offerId)).reply(200);

      await store.dispatch(fetchOfferReviews(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferReviews.pending.type,
        fetchOfferReviews.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchOfferReviews.pending" and "fetchOfferReviews.fulfilled" with thunk fetchOfferReviews if no id passed', async () => {
      await store.dispatch(fetchOfferReviews(''));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferReviews.pending.type,
        fetchOfferReviews.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchOfferReviews.pending" and "fetchOfferReviews.rejected" with thunk fetchOfferReviews rejected', async () => {
      mockAxiosAdapter.onGet(APIRoutes.Comments.replace('{offerId}', offerId)).reply(500);

      await store.dispatch(fetchOfferReviews(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferReviews.pending.type,
        fetchOfferReviews.rejected.type,
      ]);
    });
  });

  describe('fetchAddReview', () => {
    const newReview = {
      offerId: 'id1',
      comment: 'comment',
      rating: 1,
    };

    it('should dispatch "fetchAddReview.pending" and "fetchAddReview.fulfilled" with thunk fetchAddReview succeeded', async () => {
      mockAxiosAdapter.onPost(APIRoutes.Comments.replace('{offerId}', newReview.offerId)).reply(200);

      await store.dispatch(fetchAddReview(newReview));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchAddReview.pending.type,
        fetchAddReview.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchAddReview.pending" and "fetchAddReview.rejected" with thunk fetchAddReview rejected', async () => {
      mockAxiosAdapter.onPost(APIRoutes.Comments.replace('{offerId}', newReview.offerId)).reply(500);

      await store.dispatch(fetchAddReview(newReview));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchAddReview.pending.type,
        fetchAddReview.rejected.type,
      ]);
    });
  });

  describe('fetchFavorites', () => {
    it('should dispatch "fetchFavorites.pending" and "fetchFavorites.fulfilled" with thunk fetchFavorites succeeded', async () => {
      mockAxiosAdapter.onGet(APIRoutes.Favorites).reply(200);

      await store.dispatch(fetchFavorites());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavorites.pending.type,
        fetchFavorites.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchFavorites.pending" and "fetchFavorites.rejected" with thunk fetchFavorites rejected', async () => {
      mockAxiosAdapter.onGet(APIRoutes.Favorites).reply(500);

      await store.dispatch(fetchFavorites());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavorites.pending.type,
        fetchFavorites.rejected.type,
      ]);
    });
  });

  describe('fetchFavorites', () => {
    it('should dispatch "fetchFavorites.pending" and "fetchFavorites.fulfilled" with thunk fetchFavorites succeeded', async () => {
      mockAxiosAdapter.onGet(APIRoutes.Favorites).reply(200);

      await store.dispatch(fetchFavorites());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavorites.pending.type,
        fetchFavorites.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchFavorites.pending" and "fetchFavorites.rejected" with thunk fetchFavorites rejected', async () => {
      mockAxiosAdapter.onGet(APIRoutes.Favorites).reply(500);

      await store.dispatch(fetchFavorites());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavorites.pending.type,
        fetchFavorites.rejected.type,
      ]);
    });
  });

  describe('fetchSetFavoriteStatus', () => {
    const offerId = 'id1';

    it('should dispatch "fetchSetFavoriteStatus.pending" and "fetchSetFavoriteStatus.fulfilled" with thunk fetchSetFavoriteStatus succeeded', async () => {
      mockAxiosAdapter.onPost(APIRoutes.SetFavoriteStatus.replace('{offerId}', offerId).replace('{status}', '1')).reply(200);

      await store.dispatch(fetchSetFavoriteStatus(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSetFavoriteStatus.pending.type,
        fetchSetFavoriteStatus.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchSetFavoriteStatus.pending" and "fetchSetFavoriteStatus.rejected" with thunk fetchSetFavoriteStatus rejected', async () => {
      mockAxiosAdapter.onPost(APIRoutes.SetFavoriteStatus.replace('{offerId}', offerId).replace('{status}', '1')).reply(500);

      await store.dispatch(fetchSetFavoriteStatus(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSetFavoriteStatus.pending.type,
        fetchSetFavoriteStatus.rejected.type,
      ]);
    });
  });

  describe('fetchSetNotFavoriteStatus', () => {
    const offerId = 'id1';

    it('should dispatch "fetchSetNotFavoriteStatus.pending" and "fetchSetNotFavoriteStatus.fulfilled" with thunk fetchSetNotFavoriteStatus succeeded', async () => {
      mockAxiosAdapter.onPost(APIRoutes.SetFavoriteStatus.replace('{offerId}', offerId).replace('{status}', '0')).reply(200);

      await store.dispatch(fetchSetNotFavoriteStatus(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSetNotFavoriteStatus.pending.type,
        fetchSetNotFavoriteStatus.fulfilled.type,
      ]);
    });

    it('should dispatch "fetchSetNotFavoriteStatus.pending" and "fetchSetNotFavoriteStatus.rejected" with thunk fetchSetNotFavoriteStatus rejected', async () => {
      mockAxiosAdapter.onPost(APIRoutes.SetFavoriteStatus.replace('{offerId}', offerId).replace('{status}', '0')).reply(500);

      await store.dispatch(fetchSetNotFavoriteStatus(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSetNotFavoriteStatus.pending.type,
        fetchSetNotFavoriteStatus.rejected.type,
      ]);
    });
  });

  describe('checkAuthorization', () => {
    it('should dispatch "checkAuthorization.pending", "fetchFavorites.pending" and "checkAuthorization.fulfilled" with thunk checkAuthorization succeeded', async () => {
      mockAxiosAdapter.onGet(APIRoutes.Login).reply(200);

      await store.dispatch(checkAuthorization());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthorization.pending.type,
        fetchFavorites.pending.type,
        checkAuthorization.fulfilled.type,
      ]);
    });

    it('should store token with thunk checkAuthorization succeeded', async () => {
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onGet(APIRoutes.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(checkAuthorization());

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });

    it('should dispatch "checkAuthorization.pending" and "checkAuthorization.rejected" whit thunk checkAuthorization rejected', async () => {
      mockAxiosAdapter.onGet(APIRoutes.Login).reply(400);

      await store.dispatch(checkAuthorization());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthorization.pending.type,
        checkAuthorization.rejected.type,
      ]);
    });
  });

  describe('authorize', () => {
    it('should dispatch "authorize.pending", "fetchFavorites", "authorize.fulfilled" with thunk authorize succeeded', async () => {
      const fakeUser: Credentials = { login: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoutes.Login).reply(200, fakeServerReplay);

      await store.dispatch(authorize(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        authorize.pending.type,
        fetchFavorites.pending.type,
        authorize.fulfilled.type,
      ]);
    });

    it('should store token once with thunk authorize succeeded', async () => {
      const fakeUser: Credentials = { login: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoutes.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(authorize(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });

  });

  describe('signOut', () => {
    it('should dispatch "signOut.pending", "clearFavorites", "signOut.fulfilled" with thunk signOut succeeded', async () => {
      mockAxiosAdapter.onDelete(APIRoutes.Logout).reply(204);

      await store.dispatch(signOut());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        signOut.pending.type,
        clearFavorites.type,
        signOut.fulfilled.type,
      ]);
    });

    it('should once call "dropToken" with think signOut succeeded', async () => {
      mockAxiosAdapter.onDelete(APIRoutes.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(signOut());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });
});
