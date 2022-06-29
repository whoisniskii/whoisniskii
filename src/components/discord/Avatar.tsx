import mainLogo from '../../assets/a_3d12ddf1401c69d888d004daac41f5b5.gif';
import { DiscordStatus } from './Status';

function DiscordAvatar() {
  return (
    <div>
      <div className="min-w-[5rem] relative inline-block">
        <img className="w-28 h-28 rounded-full mb-4 sm:mb-0 sm:mr-4" src={mainLogo} alt="My avatar" />

        <DiscordStatus />
      </div>
    </div>
  );
}

export { DiscordAvatar };
