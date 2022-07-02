import { useMemo } from 'react';
import { getPresence } from '../../utils';

const StatusColor = {
  online: 'bg-online',
  idle: 'bg-idle',
  dnd: 'bg-dnd',
  offline: 'bg-offline',
};

function DiscordStatus() {
  const discordUserData = getPresence();

  const userData = useMemo(() => {
    return discordUserData;
  }, [discordUserData]);

  return (
    <div>
      {userData ? (
        <div
          className={`absolute h-6 w-6 -bottom-1 -right-1 border-[3px] border-[#1f1f1f] rounded-full mb-6 mx-5 sm:mb-3 sm:mr-7 ${StatusColor[userData?.discord_status as keyof typeof StatusColor]}`}
        />
      ) : (
        <div className={`absolute h-6 w-6 -bottom-1 -right-1 border-[3px] border-[#1f1f1f] rounded-full mb-6 mx-5 sm:mb-3 sm:mr-7 ${StatusColor.offline}`} />
      )}
    </div>
  );
}

export { DiscordStatus };
