import { useLanyard } from 'use-lanyard';

function CustomActivity() {
  const discordUserData = useLanyard('847865068657836033');

  const activity = discordUserData?.data?.activities.find(x => x.type === 4);

  return (
    <div className="mt-6 w-full">
      <h5 className="ml-1 mb-1 antialiased text-xs font-bold uppercase text-gray-400">Custom status</h5>
      <div className="flex gap-2 items-center mt-2">
        {activity?.emoji && <img className="inline-block" src={`https://cdn.discordapp.com/emojis/${activity.emoji?.id}.png`} alt={activity.emoji?.name} height={20} width={20} />}
      </div>

      {activity?.state && <span className="flex gap-2 ml-1 mb-1 font-sans antialiased text-sm"> {activity.state}</span>}
    </div>
  );
}

export { CustomActivity };
