import { getPresence } from '../../../utils';

function ActivityImage() {
  const discordUserData = getPresence();

  const activity = discordUserData?.activities.find(x => x.type === 0);

  if (activity && activity?.application_id && activity.assets?.large_image) {
    return (
      <div className="inline-block relative">
        <img className="inline-block rounded-md" src={`https://cdn.discordapp.com/app-assets/${activity.application_id ?? ''}/${activity.assets.large_image}.png`} alt={activity.assets?.large_text} />
      </div>
    );
  }
}

function GameActivity() {
  return null;
  // const activity = getPresence()?.activities.find(x => x.type === 0);

  // return (
  //   <div className="mt-6 w-full">
  //     <h5 className="ml-1 mb-1 antialiased text-xs font-bold uppercase text-gray-400">Playing a game</h5>
  //     <div className="flex flex-row items-center rounded-lg overflow-hidden p-4 bg-[rgba(0,0,0,.2)]">
  //       <div className="w-20 h-20 min-w-[5rem] flex items-center justify-center relative mr-4">
  //         {ActivityImage()}
  //         {activity?.assets?.small_image && (
  //           <img
  //             className="w-7 h-7 border-1 rounded-full bg-black border-black absolute bottom-[-7px] right-[-7px]"
  //             src={`https://cdn.discordapp.com/app-assets/${activity.application_id ?? ''}/${activity.assets.small_image}.png`}
  //             alt={activity.assets.small_text}
  //             height={24}
  //             width={24}
  //           />
  //         )}
  //       </div>
  //       <div>
  //         <h5 className="font-bold leading-4">{activity?.name}</h5>
  //         {activity?.details && <p className="text-sm text-gray-300">{activity.details}</p>}
  //         {activity?.state && <p className="text-sm text-gray-300">{activity.state}</p>}
  //         {activity?.timestamps?.start && <p className="text-sm text-gray-300">{formatTimestamp(activity.timestamps.start)}</p>}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export { GameActivity, ActivityImage };
