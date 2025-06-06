import MovieCard from "../MovieCard";
import useFetch from "../../hooks/useFetch";
import { useModalContext } from "../../context/ModalProvider";
import { useEffect } from "react";


const  MediaList = ({ title, tabs }) => {
  const {activeTabId,setActiveTabId} = useModalContext()
  useEffect(() =>{
      if(!activeTabId){
    setActiveTabId(tabs[0]?.id)
  }
  },[tabs])
  
  const {data:response} = useFetch ({
    url:tabs.find((i) => activeTabId === i.id)?.url
  })
  const mediaList = (response.results||[]).slice(0,12)

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
