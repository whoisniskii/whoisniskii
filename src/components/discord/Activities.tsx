import { getPresence } from '../../utils';
import { CustomActivity } from './activity/Custom';
import { SpotifyActivity } from './activity/Spotify';

function DiscordActivities() {
  const activity = getPresence();

  return (
    <div>
      {activity ? (
        <div>
          {activity?.activities.find(x => x.type === 4)?.state && <CustomActivity />}
          {/* {activity?.activities.find(x => x.type === 0) && <GameActivity />} */}
          {activity?.activities.find(x => x.type === 2)?.assets?.large_image && <SpotifyActivity />}
        </div>
      ) : null}
    </div>
  );
}

export { DiscordActivities };
