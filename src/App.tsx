import Activities from './discord/Activities';
import Avatar from './discord/Avatar';
import Profile from './discord/Profile';
import './index.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center align-middle pt-52">
      <div className="rounded-lg p-4 w-96 max-w-xl sm:border sm:border-gray-800">
        <div className="flex flex-col items-center sm:flex-row">
          <Avatar />
          <Profile />
        </div>
        <Activities />
      </div>
    </div>
  );
}

export default App;
