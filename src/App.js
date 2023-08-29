import logo from './logo.svg';
import './App.css';
import { Twitch } from './components/Twitch';
import { TwitchEmbed } from './components/TwitchEmbed';


function App() {
  return (
    <div className="">
      <div >
        <Twitch />
      </div>
      <TwitchEmbed />
    </div>
  );
}

export default App;
