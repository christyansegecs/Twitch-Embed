
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export function Twitch() {

    const [lastClip, setLastClip] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            'https://clips.twitch.tv/embed?clip=${slug}&parent=www.lobbysquad.com.br&autoplay=true&muted=true',
            {
              headers: {
                'Client-ID': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
                Accept: 'application/vnd.twitchtv.v5+json',
              },
            }
          );
  
          if (response.data.clips.length > 0) {
            setLastClip(response.data.clips[0]);
            console.log(response.data)
          }
        } catch (error) {
          console.error('Error fetching Twitch clips:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className="max-w-lg mx-auto">
      {lastClip && (
        <div className="">
          <a
            href={lastClip.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={lastClip.thumbnail_url} alt="Last Clip" />
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{lastClip.title}</div>
            <p className="text-gray-700 text-base">
              {lastClip.views} views • {lastClip.created_at}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};