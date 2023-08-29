import logo from './logo.svg';
import './App.css';
import { Twitch } from './components/Twitch';
import { TwitchEmbed } from './components/TwitchEmbed';


function App() {
  return (
    <div className="">
      <TwitchEmbed />
      <Twitch />
    </div>
  );
}

export default App;
