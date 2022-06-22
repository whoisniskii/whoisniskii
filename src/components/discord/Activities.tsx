import { useLanyard } from 'use-lanyard';
import { CustomActivity } from './activity/Custom';
import { GameActivity } from './activity/Game';
import { SpotifyActivity } from './activity/Spotify';

function DiscordActivities() {
  const discordUserData = useLanyard('847865068657836033');

  return (
    <div>
      {discordUserData?.data?.activities.find(x => x.type === 4) && <CustomActivity />}
      {discordUserData?.data?.activities.find(x => x.type === 0) && <GameActivity />}
      {discordUserData?.data?.listening_to_spotify && <SpotifyActivity />}
    </div>
  );
}

export { DiscordActivities };
