import { getPresence } from '../../utils';
import { CustomActivity } from './activity/Custom';
import { SpotifyActivity } from './activity/Spotify';

function DiscordActivities() {
  const activity = getPresence();

  return (
    <div>
      {activity ? (
        <div>
          {activity?.activities.find(x => x.type === 4) && <CustomActivity />}
          {/* {activity?.activities.find(x => x.type === 0) && <GameActivity />} */}
          {activity?.activities.find(x => x.type === 2) && <SpotifyActivity />}
        </div>
      ) : null}
    </div>
  );
}

export { DiscordActivities };
