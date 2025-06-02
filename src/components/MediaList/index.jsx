import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";


const MediaList = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  useEffect(() => {
    const url = tabs.find((i) => activeTabId === i.id)?.url;
    if (url) {
      fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }).then(async (res) => {
        const data = await res.json();
        console.log(data.results);
        const trendingMovies = data.results.slice(0, 12);
        setMediaList(trendingMovies);
      });
    }
  }, [activeTabId,tabs]);
  return (
    <div className="px-8 text-[1.2vw] py-10 bg-black text-white">
      <div className="flex items-center gap-4 mb-6">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex border border-white rounded">
          {tabs.map((i) => {
            return (
              <li
                key={i.id}
                className={`px-2 p-1 rounded cursor-pointer ${
                  activeTabId === i.id ? "bg-white text-black" : ""
                }`}
                onClick={() => setActiveTabId(i.id)}
              >
                {i.label}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
        {mediaList.map((i) => {
          return (
            <MovieCard
              key={i.id}
              id={i.id}
              title={i.title || i.name}
              releaseDate={i.release_date || i.first_air_date}
              poster={i.poster_path}
              point={i.vote_average}
              mediaType={i.media_type || activeTabId}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MediaList;
