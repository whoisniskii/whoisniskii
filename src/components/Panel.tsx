import { getPresence } from '../utils';
import { DiscordActivities } from './discord/Activities';
import { DiscordAvatar } from './discord/Avatar';
import { Loading } from './Loading';
import { Profile } from './Profile';

function Panel() {
  const presence = getPresence();

  return (
    <div>
      {presence ? (
        <div className="rounded-lg p-4 w-full max-w-xl sm:border-solid sm:border-gray-500 border-2">
          <div className="flex flex-col items-center sm:flex-row">
            <DiscordAvatar />
            <Profile />
          </div>
          <DiscordActivities />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export { Panel };
