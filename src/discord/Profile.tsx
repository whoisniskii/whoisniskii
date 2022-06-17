import { GithubLogo, InstagramLogo, SpotifyLogo } from 'phosphor-react';
import { useMemo } from 'react';
import { useLanyard } from 'use-lanyard';
import '../index.css';

function Profile() {
  const discordUserData = useLanyard('847865068657836033');

  const userData = useMemo(() => {
    return discordUserData.data;
  }, [discordUserData]);

  return (
    <div>
      <h4 className="text-xl font-bold leading-6">
        <a href="https://discord.com/users/847865068657836033">{userData?.discord_user.username}</a>
        <span className="font-normal text-gray-400 text-lg">#{userData?.discord_user.discriminator}</span>
      </h4>

      <div className="flex absolute text-2xl font-bold space-x-7">
        <a href="https://github.com/whoisniskii" className="cursor-pointer" target="_blank">
          <GithubLogo />
        </a>
        <a href="https://instagram.com/whoisniskii" className="cursor-pointer" target="_blank">
          <InstagramLogo />
        </a>
        <a href="https://open.spotify.com/user/wu6vyqmi5jig37nh6nkp3wzhg" className="cursor-pointer" target="_blank">
          <SpotifyLogo />
        </a>
      </div>
    </div>
  );
}

export { Profile };
