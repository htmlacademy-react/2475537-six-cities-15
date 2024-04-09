import { Host } from '../../types/offer';

type HostCardProps = {
  host: Host;
  description: string;
};


function HostCard({ host, description }: HostCardProps) {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper user__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''}`} data-testid='host-pro'>
          <img
            className="offer__avatar user__avatar"
            src={host.avatarUrl}
            width={74}
            height={74}
            alt={host.name}
          />
        </div>
        <span className="offer__user-name">{host.name}</span>
        <span className="offer__user-status"></span>
      </div>
      <div className="offer__description">{description}</div>
    </div>
  );
}

export default HostCard;
