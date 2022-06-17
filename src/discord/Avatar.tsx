import { useMemo } from 'react';
import { useLanyardWs } from 'use-lanyard';
import '../index.css';

function Avatar() {
  const discordUserData = useLanyardWs('847865068657836033');

  const userData = useMemo(() => {
    return discordUserData?.discord_user;
  }, [discordUserData]);

  return <img className="w-28 h-28 rounded-full mb-4 sm:mb-0 sm:mr-4" src={`https://cdn.discordapp.com/avatars/${userData?.id}/${userData?.avatar}.png?size=128`} alt="Discord Avatar" />;
}

export default Avatar;
