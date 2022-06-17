import { useMemo } from 'react';
import { useLanyard } from 'use-lanyard';

const StatusColor = {
  online: 'bg-online',
  idle: 'bg-idle',
  dnd: 'bg-dnd',
  offline: 'bg-offline',
};

function Avatar() {
  const discordUserData = useLanyard('847865068657836033');

  const userData = useMemo(() => {
    return discordUserData?.data;
  }, [discordUserData]);

  return (
    <div className="min-w-[5rem] relative">
      <img
        className="w-28 h-28 rounded-full sm:mb-0 sm:mr-4"
        src={`https://cdn.discordapp.com/avatars/${userData?.discord_user.id}/${userData?.discord_user.avatar}.png?size=128`}
        alt="Discord Avatar"
      />
      <div className={`w-7 h-7 border-2 rounded-full border-black absolute bottom-[-3px] right-[-3px] sm:mb-1 sm:mr-6 ${StatusColor[userData?.discord_status as keyof typeof StatusColor]}`} />
    </div>
  );
}

export { Avatar };
