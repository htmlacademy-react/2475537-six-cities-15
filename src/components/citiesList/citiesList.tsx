import { City } from '../../types/location';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/reducer/application/reducer';
import { Namespace } from '../../store/const';

type CitiesListProps = {
  cities: City[];
};

function CitiesList({ cities }: CitiesListProps) {
  const activeCity = useAppSelector((state) => state[Namespace.Application].currentCity);
  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city.code}>
              <a className={`locations__item-link tabs__item ${city.code === activeCity?.code ? 'tabs__item--active' : ''}`} href="#" onClick={() => dispatch(changeCity(city))}>
                <span>{city.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
