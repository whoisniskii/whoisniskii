import { DiscordName } from './discord/DiscordName';
import { GitHub } from './socials/GitHub';
import { Instagram } from './socials/Instagram';
import { Spotify } from './socials/Spotify';
import { Twitter } from './socials/Twitter';

function Profile() {
  return (
    <div>
      <DiscordName />
      <div className="flex absolute text-2xl font-bold space-x-4">
        <GitHub />
        <Instagram />
        <Twitter />
        <Spotify />
      </div>
    </div>
  );
}

export { Profile };
