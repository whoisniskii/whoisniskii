import { useMemo } from 'react';
import { useLanyard } from 'use-lanyard';
import { DiscordStatus } from './Status';

function DiscordAvatar() {
  const discordUserData = useLanyard('847865068657836033');

  const userData = useMemo(() => {
    return discordUserData;
  }, [discordUserData]);

  return (
    <div>
      <div className="min-w-[5rem] relative inline-block">
        <img className="w-28 h-28 rounded-full mb-4 sm:mb-0 sm:mr-4" src="src/assets/avatar.png" alt={`${userData?.data?.discord_user.username}#${userData?.data?.discord_user.discriminator}`} />
        <DiscordStatus />
      </div>
    </div>
  );
}

export { DiscordAvatar };
