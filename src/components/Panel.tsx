import { useLanyard } from 'use-lanyard';
import { Activities } from './discord/Activities';
import { Avatar } from './discord/Avatar';
import { Loading } from './Loading';
import { Profile } from './Profile';

function Panel() {
  const presence = useLanyard('847865068657836033');

  return (
    <div>
      {presence ? (
        <div className="rounded-lg p-4 w-full max-w-xl sm:border-solid sm:border-gray-500 border-2">
          <div className="flex flex-col items-center sm:flex-row">
            <Avatar />
            <Profile />
          </div>
          <Activities />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export { Panel };
