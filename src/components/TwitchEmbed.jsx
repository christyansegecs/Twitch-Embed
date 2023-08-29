
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

export function TwitchEmbed() {

  return (
    <>
    <div>
      <ReactTwitchEmbedVideo channel="dotalobbysquad" />
    </div>
    <div>
      <iframe src="https://clips.twitch.tv/embed?clip=FreezingIgnorantTardigradeYee-JQbeCETm8SnuQqs5&parent=https://christyansegecs.github.io/Twitch-Embed&output=embed" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
    </div>      
    </>
  );
}
