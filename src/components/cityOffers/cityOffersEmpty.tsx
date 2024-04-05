function CityOffersEmpty() {
  return (
    <div class="cities__places-container cities__places-container--empty container">
      <section class="cities__no-places">
        <div class="cities__status-wrapper tabs__content">
          <b class="cities__status">No places to stay available</b>
          <p class="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
        </div>
      </section>
      <div class="cities__right-section"></div>
    </div>);
}

export default CityOffersEmpty;
