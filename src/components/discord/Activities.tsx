import { getPresence } from '../../utils';
import { CustomActivity } from './activity/Custom';
import { GameActivity } from './activity/Game';
import { SpotifyActivity } from './activity/Spotify';

function DiscordActivities() {
  const discordUserData = getPresence();

  return (
    <div>
      {discordUserData?.activities.find(x => x.type === 4) && <CustomActivity />}
      {discordUserData?.activities.find(x => x.type === 0) && <GameActivity />}
      {discordUserData?.listening_to_spotify && <SpotifyActivity />}
    </div>
  );
}

export { DiscordActivities };
