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
      <h4 className="text-xl font-bold leading-6 md:h-full md:w-full">
        <a href="https://discord.com/users/847865068657836033">{userData?.discord_user.username}</a>
        <span className="font-normal text-gray-400 ml-1 text-lg absolute">#{userData?.discord_user.discriminator}</span>
      </h4>
      <div>
        <div className="flex flex-row items-center sm:justify-start rounded-full absolute">
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
    </div>
  );
}

export { Profile };
