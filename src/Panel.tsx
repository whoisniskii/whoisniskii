import { useLanyard } from 'use-lanyard';
import { Activities } from './components/discord/Activities';
import { Avatar } from './components/discord/Avatar';
import { Profile } from './components/Profile';

function Panel() {
  const presence = useLanyard('847865068657836033');

  return (
    <div>
      {presence ? (
        <div className="rounded-lg p-4 w-96 max-w-xl sm:border sm:border-gray-500 border-2">
          <div className="flex flex-col items-center sm:flex-row">
            <Avatar />
            <Profile />
          </div>
          <Activities />
        </div>
      ) : (
        <svg className="animate-spin" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18" />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
}

export { Panel };
