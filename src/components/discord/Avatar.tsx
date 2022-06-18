import { useMemo } from 'react';
import { useLanyard } from 'use-lanyard';
import { DiscordStatus } from './Status';

function DiscordAvatar() {
  const discordUserData = useLanyard('847865068657836033');

  const userData = useMemo(() => {
    return discordUserData?.data;
  }, [discordUserData]);

  return (
    <div className="min-w-[5rem] relative inline-block">
      <img
        className="w-28 h-28 rounded-full mb-4 sm:mb-0 sm:mr-4"
        src={`https://cdn.discordapp.com/avatars/${userData?.discord_user.id}/${userData?.discord_user.avatar}${userData?.discord_user.avatar.startsWith('a_') ? '.gif' : '.png'}?size=128`}
        alt={`${userData?.discord_user.username}#${userData?.discord_user.discriminator}`}
      />
      <DiscordStatus />
    </div>
  );
}

export { DiscordAvatar };
