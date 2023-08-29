
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

export function TwitchEmbed() {

  return (
    <>
    <div>
      <ReactTwitchEmbedVideo channel="talk2megooseman" />
    </div>
    <div>
      <iframe         title="Twitch Clip"
        src="https://clips.twitch.tv/embed?clip=FreezingIgnorantTardigradeYee-JQbeCETm8SnuQqs5&parent=https://christyansegecs.github.io/Twitch-Embed"
        frameBorder="0"
        allowFullScreen="true"
        scrolling="no"
        height="378"
        width="620"></iframe>
    </div>      
    </>
  );
}
