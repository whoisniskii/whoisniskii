import { useMemo } from 'react';
import { useLanyardWs } from 'use-lanyard';
import '../index.css';

function Profile() {
  const discordUserData = useLanyardWs('847865068657836033');

  const userData = useMemo(() => {
    return discordUserData?.discord_user;
  }, [discordUserData]);

  return (
    <div>
      <h4 className="text-xl font-bold leading-6">
        <a href="https://discord.com/users/847865068657836033">{userData?.username}</a>
        <span className="font-normal text-gray-400 ml-1 text-lg absolute">#{userData?.discriminator}</span>
      </h4>
    </div>
  );
}

export default Profile;
