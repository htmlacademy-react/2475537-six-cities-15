import { Host } from '../../types/offer';

type HostCardProps = {
  host: Host;
};


function HostCard({ host }: HostCardProps) {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper user__avatar-wrapper ${host.isFavorite ? 'offer__avatar-wrapper--pro' : ''}`}>
          <img
            className="offer__avatar user__avatar"
            src={host.image}
            width={74}
            height={74}
            alt={host.name}
          />
        </div>
        <span className="offer__user-name">{host.name}</span>
        <span className="offer__user-status">{host.category}</span>
      </div>
      <div className="offer__description">
        {host.description.split('\n').map((str) => (<p className="offer__text" key={Math.random()}>{str}</p>))}
      </div>
    </div>
  );
}

export default HostCard;
