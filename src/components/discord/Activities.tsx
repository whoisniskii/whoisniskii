import { useLanyard } from 'use-lanyard';
import { CustomActivity } from './activity/Custom';
import { SpotifyActivity } from './activity/Spotify';

function DiscordActivities() {
  const discordUserData = useLanyard('847865068657836033');

  return (
    <div>
      {discordUserData?.data?.listening_to_spotify && <SpotifyActivity />}
      {discordUserData?.data?.activities.find(x => x.type === 4) && <CustomActivity />}
    </div>
  );
}

export { DiscordActivities };
