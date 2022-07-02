import { useMemo } from 'react';
import { getPresence } from '../../utils';

function DiscordName() {
  const discordUserData = getPresence();

  const userData = useMemo(() => {
    return discordUserData;
  }, [discordUserData]);

  return (
    <div>
      {userData ? (
        <h4 className="text-xl font-bold leading-6">
          <a href="https://discord.com/users/847865068657836033">{userData?.discord_user.username}</a>
          <span className="font-normal text-gray-400 text-lg">#{userData?.discord_user.discriminator}</span>
        </h4>
      ) : (
        <h4 className="text-xl font-bold leading-6">
          <a href="https://discord.com/users/847865068657836033">Niskii</a>
          <span className="font-normal text-gray-400 text-lg">#6694</span>
        </h4>
      )}
    </div>
  );
}

export { DiscordName };
