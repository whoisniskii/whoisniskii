import { useLanyard } from 'use-lanyard';
import { SpotifyActivity } from './activity/Spotify';

function DiscordActivities() {
  const discordUserData = useLanyard('847865068657836033');

  return <div>{discordUserData?.data?.listening_to_spotify && <SpotifyActivity />}</div>;
}

export { DiscordActivities };
