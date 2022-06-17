import { useLanyard } from 'use-lanyard';
import '../index.css';

function Activities() {
  const discordUserData = useLanyard('847865068657836033');

  return (
    <div>
      {discordUserData?.data?.listening_to_spotify && (
        <div className="mt-6">
          <h5 className="ml-1 mb-1 text-sm font-bold text-gray-200">Listening on Spotify</h5>
          <div className="flex flex-row items-center rounded-lg overflow-hidden p-4 bg-[rgba(0,0,0,.2)]">
            <div className="w-20 h-20 min-w-[5rem] flex items-center justify-center relative mr-4">
              <img className="rounded-xl" src={`${discordUserData?.data.spotify?.album_art_url}`} alt={`${discordUserData?.data.spotify?.song} art`} />
              <img className="w-7 h-7 border-2 rounded-full bg-black border-black absolute bottom-[-8px] right-[-8px]" src="src/assets/spotify.svg" alt="Spotify Icon" />
            </div>
            <div>
              <h5 className="font-bold leading-4">{discordUserData?.data.spotify?.song}</h5>
              <span className="text-sm text-gray-300">by {discordUserData?.data.spotify?.artist.replaceAll('; ', ', ')}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { Activities };
