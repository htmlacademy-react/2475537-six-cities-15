import { useState } from 'react';
import { SortOrder } from '../../types/sort';

type OfferSortingProps = {
  allowedSorting: SortOrder[];
  currentSorting: SortOrder;
  onSortChanged: (newSorting: SortOrder) => void;
};


function OfferSorting({ allowedSorting, currentSorting, onSortChanged }: OfferSortingProps) {
  const [sortingOpened, setSortingOpened] = useState(false);

  const handleSortingChanged = (newSorting: SortOrder) => {
    onSortChanged(newSorting);
    setSortingOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setSortingOpened(!sortingOpened)}>
        {currentSorting.title}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${sortingOpened ? 'opened' : 'closed'}`}>
        {allowedSorting.map((sort) => (
          <li className={`places__option ${sort.type === currentSorting.type ? 'places__option--active' : ''}`} key={sort.type} onClick={() => handleSortingChanged(sort)}>
            {sort.title}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default OfferSorting;
