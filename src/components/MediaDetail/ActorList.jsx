import { useState } from "react"
import ActorInfo from "./ActorInfo"

const ActorList = ({actors = []}) => {
  const [isShowMore, setIsShowMore] = useState(false)
  const curActors = !isShowMore? actors.slice(0,4): actors
  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">Actors</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {
          curActors.map(i => {
            return (
              <ActorInfo
                key={i.id}
                id={i.id}
                name={i.name}
                character={i.character}
                profilePath={i.profile_path}
              />
            )
          })
        }
        
      </div>
      <p className="cursor-pointer mt-1" onClick={() => setIsShowMore(!isShowMore)}>{!isShowMore?'Show More':'Show Less'}</p>
    </div>
  )
}
export default ActorList