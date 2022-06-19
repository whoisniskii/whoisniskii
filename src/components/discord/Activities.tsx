import { useLanyardWs } from 'use-lanyard';
import { SpotifyActivity } from './activity/Spotify';

function DiscordActivities() {
  const discordUserData = useLanyardWs('847865068657836033');

  return <div>{discordUserData?.listening_to_spotify && <SpotifyActivity />}</div>;
}

export { DiscordActivities };
