import { DiscordName } from './discord/Name';
import { GitHub } from './socials/GitHub';
import { GitHubSponsors } from './socials/GitHubSponsors';
import { Instagram } from './socials/Instagram';
import { Spotify } from './socials/Spotify';
import { Twitter } from './socials/Twitter';

function Profile() {
  return (
    <header>
      <div className="flex flex-col sm:items-start items-center">
        <DiscordName />
        <div className="flex space-x-4 text-2xl">
          <GitHub />
          <Instagram />
          <Twitter />
          <Spotify />
          <GitHubSponsors />
        </div>
      </div>
    </header>
  );
}

export { Profile };
