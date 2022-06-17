import { useMemo } from 'react';
import { useLanyard } from 'use-lanyard';
import '../index.css';

function Avatar() {
  const discordUserData = useLanyard('847865068657836033');

  const userData = useMemo(() => {
    return discordUserData?.data;
  }, [discordUserData]);

  return (
    <img
      className="w-28 h-28 rounded-full mb-4 sm:mb-0 sm:mr-4"
      src={`https://cdn.discordapp.com/avatars/${userData?.discord_user.id}/${userData?.discord_user.avatar}.png?size=128`}
      alt="Discord Avatar"
    />
  );
}

export { Avatar };
