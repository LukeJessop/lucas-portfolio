import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const videoArray = [
  {
    title: "Adventure Game In Unity Final Product",
    thumbnail:
      "https://i.ytimg.com/vi/1OC9yr-75vw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFAoXTAP&rs=AOn4CLCE7PfwD4eG3KQxQgb6MSsH1D19ow",
    link: "https://www.youtube.com/watch?v=1OC9yr-75vw"
  },
  {
    title: "Pokidex Website Creation Timelapse",
    thumbnail:
      "https://i.ytimg.com/vi/NLFycSrc1W8/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_ICAoJDAP&rs=AOn4CLBIPIb5zSxFf16vs3Hzl6EpQ3LeAg",
    link: "https://www.youtube.com/watch?v=NLFycSrc1W8"
  },
  {
    title: "Monkidex Website Demo",
    thumbnail:
      "https://i.ytimg.com/vi/9QV4kVLnVXk/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoFzAP&rs=AOn4CLCJHzioAf65hHWRwrS6-ssI8YhVow",
    link: "https://www.youtube.com/watch?v=9QV4kVLnVXk&t=1s"
  }
];

function Videos() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  const fetchYoutubeData = useCallback(async () => {
    //this is commented out because the "Quota" for youtube video requests was exceeded or something like that... going manual for now

    // const response = await fetch(
    //   `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_API_KEY}&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`,
    //   { method: "GET" }
    // );
    // const data = response.json();
    // data.then((res) => {
    //   setYoutubeVideos(res.items);
    // });

    setYoutubeVideos(videoArray);
  }, []);

  useEffect(() => {
    // Make a request to fetch channel videos
    fetchYoutubeData();
  }, [fetchYoutubeData]);
  return (
    <section
      id="videos"
      data-nav-tooltip="videos"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Youtube Videos</h3>
        </div>
        <div className="videos-wrapper">
          {youtubeVideos?.map((item, index) => {
            return (
              <a key={index} href={item.link} target="_blank" rel="noreferrer">
                <div className="video-card">
                  <div
                    className="youtube-img"
                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                  >
                    <i
                      className="fab fa-youtube"
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        scale: '120%'
                      }}
                    />
                  </div>
                  <div>
                    <p>{item.title}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Videos;
